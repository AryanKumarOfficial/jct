import {transporter} from "@/lib/mail/setup";

/**
 * Interface representing the options for sending an email.
 *
 * This interface defines the required structure for specifying email details
 * such as the recipient, the subject of the email, and the HTML content to be sent.
 */
interface IMailOptions {
    to: string;
    subject: string;
    html: string;
}

/**
 * Sends an email using the specified mail transporter.
 *
 * @param {Object} options - The mail options object.
 * @param {string} options.to - The recipient's email address.
 * @param {string} options.subject - The subject line of the email.
 * @param {string} options.html - The HTML content of the email body.
 * @return {Promise<void>} Resolves when the email is sent successfully or rejects with an error.
 */
export async function sendMail({to, subject, html}: IMailOptions): Promise<void> {
    try {

        await transporter.verify();
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to,
            subject,
            html,
        })

    } catch (err: unknown) {
        console.error(`Failed to send mail`, err)
        throw new Error(`Failed to send mail ${err}`);
    }
}