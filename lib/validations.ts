import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name needs at least 2 characters").max(80, "Name is too long"),
  email: z.string().email("Enter a valid email address"),
  message: z
    .string()
    .min(10, "Tell me a bit more — at least 10 characters")
    .max(2000, "Message is too long (max 2000 characters)"),
  website: z.string().max(0).optional(), 
});

export type ContactInput = z.infer<typeof contactSchema>;
