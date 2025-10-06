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

/**
 * Represents an amount of money in Indian Rupees.
 *
 * This variable holds a numerical value (integer or floating-point)
 * indicating the monetary quantity in the currency of Indian Rupees.
 */
const AMOUNT_IN_RUPEES = 1250;

/**
 * Handles an HTTP PATCH request to update the approval status of a status record.
 *
 * This function performs the following actions:
 * - Ensures the requester has "ADMIN" authorization.
 * - Validates the presence of a `statusRecordId` in the request payload.
 * - Updates the `isApproved` field of the status record in the database.
 * - If the updated status is "REVIEWED", an order is created using Razorpay for the associated paper's primary author,
 *   and this order is saved into a transaction record in the database.
 *
 * Returns the updated status record or the created Razorpay order as a JSON response.
 *
 * @param {NextRequest} req The incoming HTTP request.
 * @returns {Promise<NextResponse>} A JSON response containing the updated status or Razorpay order,
 *                                  or an error message with an appropriate HTTP status code.
 *
 * @throws {PrismaClientKnownRequestError} If the specified status record to update is not found.
 *
 * Error Responses:
 * - 400: If `statusRecordId` is not provided in the request.
 * - 404: If an author associated with the paper is not found or if the status record is not found.
 * - 500: If an unexpected error occurs during the status update or order creation.
 */
export const PATCH = async (req: NextRequest): Promise<NextResponse> => {
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

/**
 * Handles POST requests for managing paper status and optional file uploads.
 *
 * The function performs the following actions:
 * 1. Verifies if the requester is authorized as an "ADMIN".
 * 2. Parses the request as multipart/form-data to handle file uploads.
 * 3. Retrieves and validates required data such as `status`, `comments`, `paperId`, and optional `file` from the request.
 * 4. Ensures that `status` and `paperId` are provided.
 * 5. Checks if `comments` is an array, if provided.
 * 6. Decodes authentication token data to verify the requester's identity.
 * 7. If a file is provided, processes the file upload:
 *    - Ensures that the paper's payment is completed.
 *    - Uploads the file to object storage and generates a URL for the file.
 *    - Updates the database to set the `publishId` and `publishUrl` for the paper, and
 *      creates a new "PUBLISHED" `status` with approval details.
 * 8. If no file is provided, solely updates the `status` of the paper with comments and requester details.
 *
 * If an error occurs at any stage, an appropriate error response with status code is returned.
 *
 * @param {NextRequest} req - The HTTP request object containing form data and token for authorization.
 * @returns {Promise<NextResponse>} - A JSON response indicating success or error.
 */
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