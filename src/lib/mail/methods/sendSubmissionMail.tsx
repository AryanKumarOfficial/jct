import SubmissionMail from "@/../emails/SubmissionMail";
import { renderTemplate } from "@/lib/mail/methods/renderTemplate";
import { sendMail } from "@/lib/mail/sendMail";

/**
 * Represents the properties required to send a submission email.
 * This interface defines the structure of an email object used for
 * notifying users about their submitted information.
 *
 * Properties:
 * - `email`: The recipient's email address to which the submission email will be sent.
 * - `submissionId`: Unique identifier for the submitted item or form.
 * - `firstName`: The first name of the recipient, used for personalization purposes.
 * - `password`: Temporary or secure password related to the submission, if applicable.
 */
interface SendSubmissionMail {
  email: string;
  submissionId: string;
  firstName: string;
  password: string;
}

/**
 * Sends a submission email to the provided recipient with the provided details.
 *
 * @param {Object} params - The parameters required for sending the submission email.
 * @param {string} params.submissionId - The unique identifier for the submission.
 * @param {string} params.firstName - The first name of the email recipient.
 * @param {string} params.password - The password associated with the submission.
 * @param {string} params.email - The email address of the recipient.
 * @return {Promise<void>} A promise that resolves when the email is successfully sent.
 * @throws {Error} Throws an error if sending the email fails.
 */
export async function sendSubmissionMail({
  submissionId,
  firstName,
  password,
  email,
}: SendSubmissionMail): Promise<void> {
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
      html: content,
    });
  } catch (e) {
    console.error(`Error sending email: `, e);
    throw new Error(`Failed sending email: `, { cause: e });
  }
}
