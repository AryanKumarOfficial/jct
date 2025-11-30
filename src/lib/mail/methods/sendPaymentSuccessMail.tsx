import { renderTemplate } from "@/lib/mail/methods/renderTemplate";
import { sendMail } from "@/lib/mail/sendMail";
import PaymentSuccessEmail from "../../../../emails/PaymentSuccessEmail";

interface PaymentSuccessMailProps {
    email: string;
    firstName: string;
    paperTitle: string;
    submissionId: string;
    amount: number;
    orderId: string;
    paymentId: string;
}

export async function sendPaymentSuccessMail({
                                                 email,
                                                 firstName,
                                                 paperTitle,
                                                 submissionId,
                                                 amount,
                                                 orderId,
                                                 paymentId,
                                             }: PaymentSuccessMailProps): Promise<void> {
    try {
        const date = new Date().toLocaleDateString("en-IN", {
            day: 'numeric', month: 'long', year: 'numeric'
        });

        const content = await renderTemplate(PaymentSuccessEmail, {
            firstName,
            paperTitle,
            submissionId,
            amount,
            orderId,
            paymentId,
            date
        });

        await sendMail({
            to: email,
            subject: `Payment Receipt: ${submissionId}`,
            html: content,
        });
    } catch (e) {
        console.error(`Error sending payment success email: `, e);
        // We don't throw here to avoid failing the webhook response just because email failed
    }
}