import {transporter} from "@/lib/mail/setup";

interface IMailOptions {
    to: string;
    subject: string;
    html: string;
}

export async function sendMail({to, subject, html}: IMailOptions) {
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