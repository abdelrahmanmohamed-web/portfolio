// Build email content
// Send email through provider
// Return success or failure result
import { Resend } from "resend";
import { ContactFormData } from "@/types/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendContactEmail({
  name,
  email,
  message,
}: ContactFormData): Promise<{ success: boolean }> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.MY_EMAIL as string,
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2>You received a new message from your portfolio website:</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #7b1f35; border-radius: 4px;">
            ${message.replace(/\n/g, "<br/>")}
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error(error)
    return { success: false };
  }
}
