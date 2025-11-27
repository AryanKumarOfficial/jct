import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
import {razorpay} from "@/lib/razorpay";
import {authorize} from "@/utils/authorize";
import {getObjectUrl} from "@/utils/cloudflare";
import {fileUpload} from "@/utils/operations";
import {isPaperPaid} from "@/utils/payments";
import {getTokenData} from "@/utils/token";
import {sendStatusUpdateMail} from "@/lib/mail/methods/sendStatusUpdateMail";
import {PaymentStatus, PaperStatus} from "@/types/enums";
import {lookup} from "mime-types";

const AMOUNT_IN_RUPEES = 1500;

interface Author {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    country: string;
    organisation: string;
}

// --- Helper: Generate Payment Order & Link ---
async function handleAcceptedPayment(paperId: string, submissionId: string, authorId: string, author: Author) {
    // 1. Check if the transaction already exists
    const existingTx = await prisma.transaction.findFirst({
        where: {
            paperId: paperId,
            status: {
                in: [PaymentStatus.PENDING, PaymentStatus.SUCCESS]
            }
        }
    });

    let transaction;
    if (existingTx) {
        transaction = existingTx;
    } else {
        // 2. Create Razorpay Order
        const order = await razorpay().orders.create({
            amount: Math.round(AMOUNT_IN_RUPEES * 100), // paise
            currency: "INR",
            receipt: `receipt_${submissionId}_${Date.now()}`,
            notes: {paperId: paperId, submissionId: submissionId},
        });
        const res = await razorpay().paymentLink.create({
            amount: AMOUNT_IN_RUPEES * 100,
            currency: "INR",
            customer: {
                name: author.firstName + " " + author.lastName,
                email: author.email,
                contact: author.phone,
            },
            notify: {
                email: true,
                sms: true,
                whatsapp: true,
            },
            reminder_enable: true,
            notes: {paperId: paperId, submissionId: submissionId},
            description: `Payment for JCT ${submissionId}`,
        })

        console.log(`url`, res)
        // 3. Save to DB
        transaction = await prisma.transaction.create({
            data: {
                razorpayOrderId: order.id,
                amount: AMOUNT_IN_RUPEES,
                status: PaymentStatus.PENDING,
                paperId: paperId,
                authorId: authorId,
            },
        });
    }

    // 4. Generate Link (Direct to your website's payment page)
    const paymentLink = `${process.env.NEXT_PUBLIC_APP_URL}/author/pay/${submissionId}`;
    return {transaction, paymentLink};
}

// --- PATCH: Approve a Status ---
export const PATCH = async (req: NextRequest): Promise<NextResponse> => {
    try {
        await authorize(req, "ADMIN");
        const {statusRecordId} = await req.json();

        if (!statusRecordId) {
            return NextResponse.json({error: "Status ID required"}, {status: 400});
        }

        const updatedStatus = await prisma.status.update({
            where: {id: statusRecordId},
            data: {isApproved: true},
            include: {
                paper: {include: {authors: true}},
            },
        });

        const primaryAuthor = updatedStatus.paper.authors[0];
        let paymentLink = undefined;

        // Logic: If status is ACCEPTED, trigger payment flow
        if (updatedStatus.status === "ACCEPTED" && primaryAuthor) {
            const result = await handleAcceptedPayment(updatedStatus.paperId, updatedStatus.paper.submissionId, primaryAuthor.id, primaryAuthor as Author);
            paymentLink = result.paymentLink;
        }

        // Send Email
        if (primaryAuthor) {
            await sendStatusUpdateMail({
                email: primaryAuthor.email,
                firstName: primaryAuthor.firstName,
                paperTitle: updatedStatus.paper.name,
                submissionId: updatedStatus.paper.submissionId,
                newStatus: updatedStatus.status,
                comments: updatedStatus.comments,
                paymentLink: paymentLink,
                amount: AMOUNT_IN_RUPEES
            });
        }

        return NextResponse.json(updatedStatus);
    } catch (error) {
        console.error(`Failed to approve status`, error);
        return NextResponse.json({error: `Internal Server Error`}, {status: 500});
    }
};

// --- POST: Create New Status / Publish ---
export const POST = async (req: NextRequest): Promise<NextResponse> => {
    try {
        await authorize(req, "ADMIN");
        const formData = await req.formData();

        const status = formData.get("status") as PaperStatus;
        const commentsJson = formData.get("comments") as string | null;
        const submissionId = formData.get("paperId") as string; // This is the visible ID (e.g. JCT_25...)
        const file = formData.get("file") as File | null;

        // 1. Safe JSON Parsing
        let comments: string[] = [];
        if (commentsJson) {
            try {
                const parsed = JSON.parse(commentsJson);
                comments = Array.isArray(parsed) ? parsed : [String(parsed)];
            } catch (e) {
                comments = [commentsJson];
            }
        }

        if (!status || !submissionId) {
            return NextResponse.json({error: "Status and Paper ID required"}, {status: 400});
        }

        const decodedData = await getTokenData(req);
        if (!decodedData.success)
            return NextResponse.json({error: `Invalid Request`}, {status: 400})
        const paperObj = await prisma.paper.findUnique({
            where: {submissionId},
            include: {authors: true}
        });

        if (!paperObj) return NextResponse.json({error: "Paper not found"}, {status: 404});

        // 2. Handle PUBLISH (with File)
        if (file && status === "PUBLISHED") {
            const hasPaid = await isPaperPaid(paperObj.id);

            // NOTE: Uncomment below to strictly enforce payment before publishing
            if (!hasPaid) return NextResponse.json({error: "Payment pending."}, {status: 402});

            const fileName = file.name;
            const objectKey = `published/${submissionId}-${Date.now()}-${fileName}`;
            const buffer = Buffer.from(await file.arrayBuffer());
            const contentType = lookup(fileName) || "application/octet-stream";

            await fileUpload({key: objectKey, buffer, contentType});
            const fileUrl = await getObjectUrl(objectKey);

            // FIX: We rely on 'newStatus' to get author details, as updatedPaper won't have relations
            const [updatedPaper, newStatus] = await prisma.$transaction([
                prisma.paper.update({
                    where: {id: paperObj.id},
                    data: {publishId: objectKey, publishUrl: fileUrl},
                }),
                prisma.status.create({
                    data: {
                        status: "PUBLISHED",
                        paperId: paperObj.submissionId,
                        comments: comments,
                        changedById: decodedData.data?.id,
                        isApproved: true,
                    },
                    include: {paper: {include: {authors: true}}},
                }),
            ]);

            // Notify Author (Using newStatus which has the authors included)
            const author = newStatus.paper.authors[0];
            if (author) {
                await sendStatusUpdateMail({
                    email: author.email,
                    firstName: author.firstName,
                    paperTitle: newStatus.paper.name,
                    submissionId: submissionId,
                    newStatus: "PUBLISHED",
                    comments
                });
            }
            return NextResponse.json(newStatus, {status: 201});
        }

        // 3. Handle Other Status Changes
        else {
            const newStatus = await prisma.status.create({
                data: {
                    status,
                    paperId: submissionId,
                    comments,
                    changedById: decodedData.data?.id,
                    isApproved: true,
                },
                include: {paper: {include: {authors: true}}},
            });

            let paymentLink = undefined;
            if (status === "ACCEPTED") {
                const res = await handleAcceptedPayment(paperObj.id, submissionId, paperObj.authors[0].id, paperObj.authors[0] as Author);
                paymentLink = res.paymentLink;
            }

            const author = newStatus.paper.authors[0];
            if (author) {
                await sendStatusUpdateMail({
                    email: author.email,
                    firstName: author.firstName,
                    paperTitle: newStatus.paper.name,
                    submissionId,
                    newStatus: status,
                    comments,
                    paymentLink,
                    amount: AMOUNT_IN_RUPEES
                });
            }
            return NextResponse.json(newStatus, {status: 201});
        }

    } catch (err) {
        console.error(`Admin Status Action Failed:`, err);
        return NextResponse.json({error: "Internal Server Error"}, {status: 500});
    }
};