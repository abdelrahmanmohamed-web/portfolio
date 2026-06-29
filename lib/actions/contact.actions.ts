// Define Zod validation schema for form inputs
// Extract input data from FormData
// Validate input data against Zod schema
// Call email.service.sendContactEmail() with validated data
// Handle success/failure responses
// Return result object to be used by React useActionState hook
"use server";

import * as z from "zod";
import { ActionResponse } from "@/types/contact";
import sendContactEmail from "@/lib/services/email.service";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name cannot exceed 50 characters" }),

  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),

  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters long" })
    .max(1000, { message: "Message cannot exceed 1000 characters" }),
});

export default async function submitContact(
  prevState: ActionResponse | null,
  formData: FormData,
): Promise<ActionResponse> {
  const values = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const validatedFields = contactSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );
  if (!validatedFields.success) {
    return {
      success: false,
      message: "Please fix the errors.",
      errors: validatedFields.error.flatten().fieldErrors,
      values,
    };
  }

  const result = await sendContactEmail(validatedFields.data);

  if (!result.success) {
    return {
      success: false,
      message: "Failed to send email due to a server error. Try again later.",
    };
  }

  return {
    success: true,
    message: "Thank you! Your message has been sent successfully.",
  };
}
