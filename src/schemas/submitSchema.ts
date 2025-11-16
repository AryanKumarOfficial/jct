// src/lib/schemas/submitSchema.ts
import { z } from "zod";

const authorSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().optional(),
    email: z.string().email("Invalid email"),
    phone: z.string().min(1, "Phone is required"),
    organisation: z.string().min(1, "Organisation is required"),
    country: z.string().min(1, "Country is required"),
});

export const submitSchema = z.object({
    paperName: z.string().min(1, "Paper title is required"),
    archiveId: z.string().min(1, "Select an archive"),
    // keywords will be an array of strings (tags)
    keywords: z
        .array(z.string().min(1))
        .optional()
        .default([]),
    // file: we expect a single File; refine checks File type in browser
    file: z
        .any()
        .refine((f) => f instanceof File, "A file is required")
        .refine((f) => (f as File).size <= 20 * 1024 * 1024, "Max file size 20MB")
        .optional(),
    authors: z
        .array(authorSchema)
        .min(1, "At least one author is required")
        .max(4, "A maximum of 4 authors is allowed"),
});

export type SubmitSchema = z.infer<typeof submitSchema>;
