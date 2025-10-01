import {renderTemplate} from "@/lib/mail/methods/renderTemplate";
import NewEditorEmail from "../../../../emails/NewEditorEmail";
import {sendMail} from "@/lib/mail/sendMail";


interface EditorProps {
    email: string;
    firstName: string;
    password: string;
}

export async function sendNewEditorMail({firstName, email, password}: EditorProps) {
    try {
        const content = await renderTemplate(
            NewEditorEmail,
            {
                firstName,
                email,
                password,
            }
        )
        await sendMail({
            to: email,
            subject: `Welcome Aboard! Your JCT Journal Editor Account is Ready`,
            html: content
        })
    } catch (e) {
        console.error(`Error sending email: `, e);
        throw new Error(`Failed sending email: `, {cause: e});
    }
}