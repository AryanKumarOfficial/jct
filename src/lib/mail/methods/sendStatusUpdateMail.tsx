import StatusUpdateEmail from "@/../emails/StatusUpdateEmail";
import { renderTemplate } from "@/lib/mail/methods/renderTemplate";
import { sendMail } from "@/lib/mail/sendMail";

interface SendStatusUpdateMailProps {
    email: string;
    firstName: string;
    paperTitle: string;
    submissionId: string;
    newStatus: string;
    comments?: string[];
}

/**
 * Sends a status update email to the author.
 */
export async function sendStatusUpdateMail({
                                               email,
                                               firstName,
                                               paperTitle,
                                               submissionId,
                                               newStatus,
                                               comments,
                                           }: SendStatusUpdateMailProps): Promise<void> {
    try {
        const content = await renderTemplate(StatusUpdateEmail, {
            firstName,
            paperTitle,
            submissionId,
            newStatus,
            comments,
        });

        await sendMail({
            to: email,
            subject: `JCT Journal: Status Update for ${submissionId}`,
            html: content,
        });
    } catch (e) {
        console.error(`Error sending status update email: `, e);
        // We don't throw here to prevent failing the entire transaction if email fails
    }
}