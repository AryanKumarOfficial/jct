// API to approve the status
import {NextRequest, NextResponse} from "next/server";
import {authorize} from "@/utils/authorize";
import {prisma} from "@/lib/prisma";
import {getTokenData} from "@/utils/token";
import {fileUpload} from "@/utils/operations"
import {lookup} from "mime-types"
import {getObjectUrl} from "@/utils/cloudflare";
import {isPaperPaid} from "@/utils/payments";
import {PaperStatus, PaymentStatus} from "@/types/enums";
import {Orders} from "razorpay/dist/types/orders";
import {razorpay} from "@/lib/razorpay";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

const AMOUNT_IN_RUPEES = 1250;

export const PATCH = async (req: NextRequest) => {
    try {
        await authorize(req, "ADMIN");
        const {statusRecordId}: { statusRecordId: string } = await req.json();
        if (!statusRecordId) {
            return NextResponse.json({error: "Status ID is required for this operation"}, {status: 400})
        }


        const updatedStatus = await prisma.status.update({
            where: {id: statusRecordId},
            data: {
                isApproved: true
            },
            include: {
                paper: {
                    select: {
                        authors: {
                            select: {
                                id: true
                            }
                        }
                    }
                }
            }
        })
        if (updatedStatus.status === "REVIEWED") {

            const authorId = updatedStatus.paper.authors[0].id;
            if (!authorId) {
                return NextResponse.json({error: "Could not find an author associated with this paper."}, {status: 404});

            }

            // create an order in the razorpay
            // 1. PREPARE ORDER OPTIONS WITH PROPER TYPES
            const orderOptions: Orders.RazorpayOrderCreateRequestBody = {
                amount: AMOUNT_IN_RUPEES * 100,
                currency: "INR",
                receipt: `receipt_for_${updatedStatus.paperId}_${Date.now()}`,
                notes: {
                    paperId: updatedStatus.paperId
                }
            }

            // 2. create the order
            const order: Orders.RazorpayOrder = await razorpay().orders.create(orderOptions);

            // 3. save the order to the translation table
            await prisma.transaction.create({
                data: {
                    razorpayOrderId: order.id,
                    amount: 1250,
                    status: PaymentStatus.PENDING,
                    paperId: updatedStatus.paperId,
                    authorId,
                }
            })

            return NextResponse.json(order);

        }

        return NextResponse.json(updatedStatus);
    } catch (error) {
        console.error(`Failed to approve the paper status`, error);
        if (error instanceof PrismaClientKnownRequestError && error.code === "P2025")
            return NextResponse.json({error: `Status record to update not found`}, {status: 404})
        return NextResponse.json({error: `Failed to approve the paper status`}, {status: 500});
    }
}

export const POST = async (req: NextRequest) => {
    try {
        await authorize(req, "ADMIN");
        // 1. Handle multipart/form-data for file uploads
        const formData = await req.formData();
        const status = formData.get("status") as PaperStatus;
        const comments = formData.get("comments") as string[] | null;
        const paperId = formData.get("paperId") as string;
        const file = formData.get("file") as File | null;

        if (!status || !paperId) {
            return NextResponse.json({error: "Status and paperId must be provided"}, {status: 400});
        }

        if (!Array.isArray(comments)) {
            return NextResponse.json({error: "Comments must be an array"}, {status: 400});
        }

        const decodedData = await getTokenData(req);
        if (!decodedData.success) {
            return NextResponse.json({error: "Token not found"}, {status: 400});
        }

        if (file) {

            const hasPaid = await isPaperPaid(paperId);
            if (!hasPaid) {
                return NextResponse.json({error: "Cannot publish paper. Payment is pending or has failed."}, {status: 402});
            }

            const fileName = file.name;
            const objectKey = `published/${paperId}-${Date.now()}-${fileName}`;
            const buffer = Buffer.from(await file.arrayBuffer());
            const contentType = lookup(fileName) || "application/octet-stream";
            await fileUpload({key: fileName, buffer, contentType});
            const fileUrl = await getObjectUrl(objectKey);

            const [updatedPaper, newStatus] = await prisma.$transaction([
                prisma.paper.update({
                    where: {id: paperId},
                    data: {
                        publishId: objectKey,
                        publishUrl: fileUrl,
                    }
                }),
                prisma.status.create({
                    data: {
                        status: "PUBLISHED",
                        paperId: paperId, // Ensure this maps to the correct field in your schema
                        comments: comments,
                        changedById: decodedData.data.id,
                        isApproved: true
                    }
                })
            ]);
            return NextResponse.json(newStatus, {status: 201});
        } else {
            const newStatus = await prisma.status.create({
                data: {
                    status,
                    paperId,
                    comments,
                    changedById: decodedData.data.id
                }
            })
            return NextResponse.json(newStatus, {status: 201});

        }
    } catch (err) {
        console.error(`Failed to change the paper status`, err);
        return NextResponse.json({error: `Failed to change the paper status`}, {status: 500});
    }
}