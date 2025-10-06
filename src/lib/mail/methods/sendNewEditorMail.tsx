import {renderTemplate} from "@/lib/mail/methods/renderTemplate";
import NewEditorEmail from "../../../../emails/NewEditorEmail";
import {sendMail} from "@/lib/mail/sendMail";


/**
 * Represents the properties required for an editor.
 *
 * This interface defines the structure for objects that hold
 * information about an editor, including login details and
 * personal information.
 *
 * Properties:
 *
 * @property email - The email address associated with the editor.
 * @property firstName - The first name of the editor.
 * @property password - The password used by the editor for authentication.
 */
interface EditorProps {
    email: string;
    firstName: string;
    password: string;
}

/**
 * Sends a welcome email to a new editor with their account details.
 *
 * @param {Object} params - The parameters for sending the email.
 * @param {string} params.firstName - The first name of the new editor.
 * @param {string} params.email - The email address of the new editor.
 * @param {string} params.password - The password for the new editor's account.
 * @return {Promise<void>} A promise that resolves when the email is sent successfully.
 * @throws {Error} If an error occurs while sending the email.
 */
export async function sendNewEditorMail({firstName, email, password}: EditorProps): Promise<void> {
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