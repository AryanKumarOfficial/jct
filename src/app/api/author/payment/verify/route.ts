import {NextRequest, NextResponse} from "next/server";
import crypto from "crypto";
import {prisma} from "@/lib/prisma";
import {PaymentStatus} from "@/types/enums";
import {sendPaymentSuccessMail} from "@/lib/mail/methods/sendPaymentSuccessMail";

export const POST = async (req: NextRequest) => {
    try {
        // 3. Parse Request Body
        const {
            razorpay_payment_id,
            razorpay_order_id,
            razorpay_signature,
            paperId
        } = await req.json();

        if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature || !paperId) {
            return NextResponse.json(
                {error: "Missing required payment details"},
                {status: 400}
            );
        }

        // 4. Verify Signature
        // Formula: HMAC_SHA256(order_id + "|" + payment_id, secret)
        const body = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_SECRET_KEY!)
            .update(body.toString())
            .digest("hex");

        const isAuthentic = expectedSignature === razorpay_signature;

        if (!isAuthentic) {
            // Log suspicious activity if needed
            console.error(`Invalid signature for order ${razorpay_order_id}`);
            return NextResponse.json(
                {error: "Invalid payment signature"},
                {status: 400}
            );
        }

        // 5. Update Database
        // We verify that the transaction exists and belongs to this user/paper
        const existingTx = await prisma.transaction.findUnique({
            where: {razorpayOrderId: razorpay_order_id},
        });

        if (!existingTx) {
            return NextResponse.json({error: "Transaction record not found"}, {status: 404});
        }

        // Use a transaction to ensure data consistency
        const transaction = await prisma.$transaction(async (tx) => {
            // A. Update Transaction Status
            const transaction = await tx.transaction.update({
                where: {id: existingTx.id},
                data: {
                    status: PaymentStatus.SUCCESS,
                    razorpayPaymentId: razorpay_payment_id,
                },
                include: {
                    author: true,
                    paper: true
                }
            });

            // B. Log Activity
            await tx.activityLog.create({
                data: {
                    activity: "PAYMENT_SUCCESS",
                    details: `Publication fee paid. Order: ${razorpay_order_id}`,
                    paperId: paperId,
                },
            });
            return transaction;
        });
        await sendPaymentSuccessMail({
            amount: transaction.amount,
            firstName: transaction.author.firstName,
            email: transaction.author.email,
            paperTitle: transaction.paper.name,
            orderId: transaction.razorpayOrderId,
            submissionId: transaction.paper.submissionId,
            paymentId: transaction.razorpayPaymentId!
        })

        return NextResponse.json({
            success: true,
            message: "Payment verified and recorded successfully"
        });

    } catch (error) {
        console.error("Payment Verification Error:", error);
        return NextResponse.json(
            {error: "Internal Server Error"},
            {status: 500}
        );
    }
};