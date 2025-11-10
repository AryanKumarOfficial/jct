// src/schemas/submission.schema.ts
import {z} from "zod";

/**
 * Shared Zod schemas for paper submissions — import these on both frontend and backend.
 * Keep this file pure schema + inferred types so it can be reused safely.
 */

export const authorSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().optional(),
    email: z.string().email("Invalid email"),
    phone: z.string().regex(/^[0-9]{10}$/, "Phone must be exactly 10 digits"),
    country: z.string().min(1, "Country is required"),
    organisation: z.string().min(1, "Organisation is required"),
});

export const submissionSchema = z.object({
    paperName: z.string().min(3, "Paper name must be at least 3 characters"),
    archiveId: z.string().min(1, "Archive ID is required"),
    authors: z.array(authorSchema).min(1, "At least one author is required"),
    keywords: z.array(z.string()).optional(),
});

// Inferred TypeScript types for convenience
export type AuthorInput = z.infer<typeof authorSchema>;
export type SubmissionInput = z.infer<typeof submissionSchema>;

// Optionally export helper validators for quick usage
export const validateSubmission = (data: unknown) => submissionSchema.safeParse(data);
export const validateAuthor = (data: unknown) => authorSchema.safeParse(data);
