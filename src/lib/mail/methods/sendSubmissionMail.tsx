import {renderTemplate} from "@/lib/mail/methods/renderTemplate";
import SubmissionMail from "@/../emails/SubmissionMail";
import {sendMail} from "@/lib/mail/sendMail";

interface SendSubmissionMail {
    email: string;
    submissionId: string;
    firstName: string;
    password: string;
}

export async function sendSubmissionMail({submissionId, firstName, password, email}: SendSubmissionMail) {
    try {
        const content = await renderTemplate(SubmissionMail, {
            submissionId,
            firstName,
            email,
            password,
        });

        await sendMail({
            to: email,
            subject: `JCT Journal: Submission Received (ID: ${submissionId})`,
            html: content
        })

    } catch (e) {
        console.error(`Error sending email: `, e);
        throw new Error(`Failed sending email: `, {cause: e});
    }
}