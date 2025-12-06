import { z } from "zod";

export const authorImportSchema = z.object({
    firstName: z.string(),
    lastName: z.string().optional(),
    email: z.email(),
    organisation: z.string(),
    country: z.string(),
    phone: z.string(),
});

export const paperImportSchema = z.object({
    title: z.string(),
    keywords: z.array(z.string()).default([]),
    // Archive Details
    volume: z.number(),
    issue: z.number(),
    month: z.string(),
    year: z.number(),
    // File (Optional: if you have URLs from an old system)
    publishUrl: z.string().optional().nullable(),
    // Authors
    authors: z.array(authorImportSchema).min(1),
    // Optional: Force a specific submission date
    createdAt: z.iso.datetime().optional(),
});

export const bulkImportSchema = z.array(paperImportSchema);

export type MigrationPayload = z.infer<typeof bulkImportSchema>;
export type AuthorImportSchema = z.infer<typeof authorImportSchema>;