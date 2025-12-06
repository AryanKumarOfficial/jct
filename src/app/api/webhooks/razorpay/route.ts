import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";
import { sendPaymentSuccessMail } from "@/lib/mail/methods/sendPaymentSuccessMail";
import {$Enums} from "@/generated/prisma";

export const PaymentStatus = {
    ...$Enums.paymentStatus
} as const;

// Force dynamic since we are reading headers and body
export const dynamic = 'force-dynamic';

export const POST = async (req: NextRequest) => {
    try {
        // 1. Get the Raw Body
        // Webhook signature verification requires the raw unparsed body
        const rawBody = await req.text();

        // 2. Get the Signature Header
        const signature = req.headers.get("x-razorpay-signature");
        const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

        if (!signature || !secret) {
            return NextResponse.json(
                { error: "Missing signature or webhook secret" },
                { status: 400 }
            );
        }

        // 3. Verify Signature
        // HMAC SHA256(rawBody, secret) must match the signature header
        const generatedSignature = crypto
            .createHmac("sha256", secret)
            .update(rawBody)
            .digest("hex");

        if (generatedSignature !== signature) {
            console.error("Invalid Webhook Signature");
            return NextResponse.json(
                { error: "Invalid signature" },
                { status: 400 }
            );
        }

        // 4. Parse the Body safely
        const body = JSON.parse(rawBody);
        const event = body.event;
        const payload = body.payload;

        console.log(`Received Razorpay Webhook Event: ${event}`);

        // 5. Handle Specific Events
        // We primarily care about 'payment.captured' or 'order.paid'
        if (event === "payment.captured") {
            const payment = payload.payment.entity;
            const orderId = payment.order_id;
            const paymentId = payment.id;

            // Extract metadata we saved in 'notes' during order creation
            // See: src/app/api/admin/paper/status/route.ts
            const paperId = payment.notes?.paperId;

            if (!orderId || !paperId) {
                console.error("Webhook payload missing order_id or paperId in notes");
                return NextResponse.json({ status: "ignored_missing_meta" });
            }

            // 6. Find and Update Transaction
            // Check if the transaction exists via orderId
            const existingTx = await prisma.transaction.findUnique({
                where: { razorpayOrderId: orderId },
            });

            if (!existingTx) {
                console.error(`Transaction not found for Order ID: ${orderId}`);
                return NextResponse.json({ error: "Transaction not found" }, { status: 404 });
            }

            // IDEMPOTENCY CHECK: If already success, skip to avoid duplicate emails/logs
            if (existingTx.status === PaymentStatus.SUCCESS || existingTx.status === PaymentStatus.COMPLETED) {
                return NextResponse.json({ status: "already_processed" });
            }

            // 7. Perform Database Update
            const transaction = await prisma.$transaction(async (tx) => {
                // Update Transaction
                const updatedTx = await tx.transaction.update({
                    where: { id: existingTx.id },
                    data: {
                        status: PaymentStatus.SUCCESS,
                        razorpayPaymentId: paymentId,
                        amount: payment.amount / 100, // Amount comes in paise
                    },
                    include: {
                        author: true,
                        paper: true
                    }
                });

                // Log Activity
                await tx.activityLog.create({
                    data: {
                        activity: "PAYMENT_SUCCESS",
                        details: `Webhook confirmed payment. Order: ${orderId}, Payment: ${paymentId}`,
                        paperId: paperId,
                        authorId: updatedTx.authorId
                    },
                });

                return updatedTx;
            });

            // 8. Send Email (Non-blocking)
            // We await it here for simplicity, but in high-scale apps, use a queue
            await sendPaymentSuccessMail({
                amount: transaction.amount,
                firstName: transaction.author.firstName,
                email: transaction.author.email,
                paperTitle: transaction.paper.name,
                orderId: transaction.razorpayOrderId,
                submissionId: transaction.paper.submissionId,
                paymentId: transaction.razorpayPaymentId!
            });

            return NextResponse.json({ status: "ok" });
        }

        // Return 200 for unhandled events so Razorpay doesn't retry them
        return NextResponse.json({ status: "ignored_event" });

    } catch (error) {
        console.error("Webhook Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
};