import {NextRequest, NextResponse} from "next/server";
import crypto from "crypto";
import {prisma} from "@/lib/prisma";
import {sendPaymentSuccessMail} from "@/lib/mail/methods/sendPaymentSuccessMail";
import {PaymentStatus} from "@/types/enums";

export const dynamic = 'force-dynamic';

export const POST = async (req: NextRequest) => {
    try {
        const rawBody = await req.text();
        const signature = req.headers.get("x-razorpay-signature");
        const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

        if (!signature || !secret) {
            return NextResponse.json({error: "Missing signature or secret"}, {status: 400});
        }

        // Verify Signature
        const generatedSignature = crypto
            .createHmac("sha256", secret)
            .update(rawBody)
            .digest("hex");

        if (generatedSignature !== signature) {
            return NextResponse.json({error: "Invalid signature"}, {status: 400});
        }

        const body = JSON.parse(rawBody);
        const event = body.event;
        const payload = body.payload;

        if (event === "payment.captured" || event === "order.paid") {
            const payment = payload.payment.entity;
            const webhookOrderId = payment.order_id;
            const paymentId = payment.id;
            const paperId = payment.notes?.paperId;

            console.log(`Processing ${event} for Paper: ${paperId}, Order: ${webhookOrderId}`);

            // 1. Try finding transaction by Order ID (Standard Checkout flow)
            let existingTx = await prisma.transaction.findUnique({
                where: {razorpayOrderId: webhookOrderId || ""},
            });

            // 2. Fallback: Find by Paper ID (Payment Link flow)
            // Payment links usually generate a new order_id that won't match your DB
            if (!existingTx && paperId) {
                console.log("Order ID mismatch (likely Payment Link). Looking up by Paper ID...");
                existingTx = await prisma.transaction.findFirst({
                    where: {
                        paperId: paperId,
                        status: {in: [PaymentStatus.PENDING, PaymentStatus.FAILED]} // Only look for open txns
                    },
                    orderBy: {createdAt: 'desc'} // Get the latest one
                });
            }

            if (!existingTx) {
                console.error(`Transaction not found for Order: ${webhookOrderId} or Paper: ${paperId}`);
                return NextResponse.json({error: "Transaction lookup failed"}, {status: 404});
            }

            // Idempotency check
            if (existingTx.status === PaymentStatus.SUCCESS || existingTx.status === PaymentStatus.COMPLETED) {
                return NextResponse.json({status: "already_processed"});
            }

            // 3. Update Database
            const transaction = await prisma.$transaction(async (tx) => {
                const updatedTx = await tx.transaction.update({
                    where: {id: existingTx.id},
                    data: {
                        status: PaymentStatus.SUCCESS,
                        razorpayPaymentId: paymentId,
                        // If it was a Payment Link, we might want to update the order ID to the one used
                        razorpayOrderId: webhookOrderId || existingTx.razorpayOrderId,
                        amount: payment.amount / 100,
                    },
                    include: {author: true, paper: true}
                });

                await tx.activityLog.create({
                    data: {
                        activity: "PAYMENT_SUCCESS",
                        details: `Webhook confirmed payment via ${payment.method}. ID: ${paymentId}`,
                        paperId: updatedTx.paperId,
                        authorId: updatedTx.authorId
                    },
                });

                return updatedTx;
            });

            // 4. Send Email
            await sendPaymentSuccessMail({
                amount: transaction.amount,
                firstName: transaction.author.firstName,
                email: transaction.author.email,
                paperTitle: transaction.paper.name,
                orderId: transaction.razorpayOrderId,
                submissionId: transaction.paper.submissionId,
                paymentId: transaction.razorpayPaymentId!
            });

            return NextResponse.json({status: "ok"});
        }

        if (event === "payment.failed") {
            const payment = payload.payment.entity;
            const webhookOrderId = payment.order_id;
            const paperId = payment.notes?.paperId;

            console.log(`Payment failed for Order: ${webhookOrderId}`);
            // 1. Find the transaction
            let existingTx = await prisma.transaction.findUnique({
                where: {
                    razorpayOrderId: webhookOrderId || ""
                }
            })
            if (!existingTx && paperId) {
                existingTx = await prisma.transaction.findFirst({
                    where: {
                        paperId,
                        status: {
                            in: [PaymentStatus.PENDING, PaymentStatus.FAILED]
                        }
                    },
                    orderBy: {
                        createdAt: "desc"
                    }
                })
            }
            if (existingTx) {
                // SAFETY CHECK: Never mark a successful transaction as failed
                if (existingTx.status === PaymentStatus.SUCCESS || existingTx.status === PaymentStatus.COMPLETED) {
                    console.log("Ignored failure event for already successful transaction.");
                    return NextResponse.json({status: "ignored_already_success"});
                }
                // 2. Atomic Update and Log
                await prisma.$transaction(async (tx) => {
                    await tx.transaction.update({
                        where: {id: existingTx.id},
                        data: {
                            status: PaymentStatus.FAILED
                        }
                    })

                    // 3. Log the failure
                    await tx.activityLog.create({
                        data: {
                            activity: "STATUS_CHANGED",
                            details: `Payment failed: ${payment.error_description}` || `Unknown error`,
                            paperId: existingTx.paperId,
                            authorId: existingTx.authorId
                        },
                    });
                })

            }

            return NextResponse.json({status: "ok_failed_recorded"});

        }

        return NextResponse.json({status: "ignored"});

    } catch (error) {
        console.error("Webhook Error:", error);
        return NextResponse.json({error: "Internal Server Error"}, {status: 500});
    }
};