import StatusUpdateEmail from "@/../emails/StatusUpdateEmail";
import {renderTemplate} from "@/lib/mail/methods/renderTemplate";
import {sendMail} from "@/lib/mail/sendMail";

interface SendStatusUpdateMailProps {
    email: string;
    firstName: string;
    paperTitle: string;
    submissionId: string;
    newStatus: string;
    comments?: string[];
    paymentLink?: string;
    amount?: number;
}

/**
 * Sends a status update email to the author, optionally with a payment link.
 */
export async function sendStatusUpdateMail({
                                               email,
                                               firstName,
                                               paperTitle,
                                               submissionId,
                                               newStatus,
                                               comments,
                                               paymentLink,
                                               amount
                                           }: SendStatusUpdateMailProps): Promise<void> {
    try {
        const content = await renderTemplate(StatusUpdateEmail, {
            firstName,
            paperTitle,
            submissionId,
            newStatus,
            comments,
            paymentLink,
            amount
        });

        await sendMail({
            to: email,
            subject: `JCT Journal: Status Update for ${submissionId}`,
            html: content,
        });
    } catch (e) {
        console.error(`Error sending status update email: `, e);
    }
}