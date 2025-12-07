import { z } from "zod";

export const authorImportSchema = z.object({
    firstName: z.string(),
    lastName: z.string().optional(),
    email: z.string().email(),
    organisation: z.string(),
    country: z.string(),
    phone: z.string(),
});

export const paperImportSchema = z.object({
    title: z.string(),
    keywords: z.array(z.string()).default([]),
    volume: z.number(),
    issue: z.number(),
    month: z.string(),
    year: z.number(),

    // Both URL and ID are optional/nullable because:
    // 1. They might not exist in the Excel sheet (legacy data)
    // 2. We add them dynamically during the upload process
    publishUrl: z.string().optional().nullable(),
    publishId: z.string().optional().nullable(),

    authors: z.array(authorImportSchema).min(1),
    createdAt: z.string().optional(),
});

export const bulkImportSchema = z.array(paperImportSchema);

// This generates the TypeScript interface automatically
export type MigrationPayload = z.infer<typeof paperImportSchema>;
export type AuthorImportPayload = z.infer<typeof authorImportSchema>;