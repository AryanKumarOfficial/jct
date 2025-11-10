// src/schemas/submission.schemas.ts
import {z} from "zod";

/**
 * Shared Zod schemas for paper submissions — import these on both frontend and backend.
 * Keep this file pure schemas + inferred types so it can be reused safely.
 */

// A reusable transformer for JSON strings
const stringifiedJson = (schema: z.ZodType) =>
    z.string().transform((str, ctx) => {
        try {
            return schema.parse(JSON.parse(str));
        } catch (e) {
            ctx.addIssue({code: z.ZodIssueCode.custom, message: "Invalid JSON string"});
            return z.NEVER;
        }
    });

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
    authors: stringifiedJson(z.array(authorSchema).min(1, "At least one author is required")),
    keywords: stringifiedJson(z.array(z.string()).default([]).optional()),
});

// Inferred TypeScript types for convenience
export type AuthorInput = z.infer<typeof authorSchema>;
export type SubmissionInput = z.infer<typeof submissionSchema>;

// Optionally export helper validators for quick usage
export const validateSubmission = (data: unknown) => submissionSchema.safeParse(data);
export const validateAuthor = (data: unknown) => authorSchema.safeParse(data);
