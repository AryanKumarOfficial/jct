import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
import {authorize} from "@/utils/authorize";
import {bulkImportSchema} from "@/schemas/migrationSchema";
import bcryptjs from "bcryptjs";
import {PaperStatus} from "@/types/enums";
import {treeifyError} from "zod";
import {generateAuthorPassword, normalizeAndCapitalize} from "@/utils/typography";

export const POST = async (req: NextRequest) => {
    try {
        // 1. Security Check
        await authorize(req, "ADMIN");

        // 2. Parse & Validate Body
        const body = await req.json();
        const parseResult = bulkImportSchema.safeParse(body);

        if (!parseResult.success) {
            return NextResponse.json(
                {error: "Validation failed", details: treeifyError(parseResult.error)},
                {status: 400}
            );
        }

        const papersToImport = parseResult.data;
        const results = {
            total: papersToImport.length,
            success: 0,
            failed: 0,
            errors: [] as any[],
        };

        // 3. Process sequentially to prevent Race Conditions
        for (const [index, entry] of papersToImport.entries()) {
            try {
                await prisma.$transaction(async (tx) => {

                    // A. Resolve Archive (Upsert)
                    // We verify if this volume/issue exists, or create it.
                    const archiveId = `migrated_vol${entry.volume}_iss${entry.issue}_${entry.year}`;

                    const archive = await tx.archive.upsert({
                        where: {id: archiveId},
                        update: {},
                        create: {
                            id: archiveId,
                            volume: entry.volume,
                            issue: entry.issue,
                            month: normalizeAndCapitalize(entry.month),
                            year: entry.year,
                        },
                    });

                    // B. DUPLICATE CHECK (Fixes the issue)
                    // Check if a paper with this Title already exists in this Archive
                    const existingPaper = await tx.paper.findFirst({
                        where: {
                            name: {
                                equals: entry.title,
                                mode: "insensitive" // Case-insensitive check
                            },
                            archiveId: archive.id
                        }
                    });

                    if (existingPaper) {
                        throw new Error("Duplicate: Paper already exists in this archive.");
                    }

                    // C. Handle Authors
                    const authorPromises = entry.authors.map(async (auth) => {
                        // Check if author exists by email first to avoid re-hashing password unnecessarily
                        const existingAuthor = await tx.author.findUnique({
                            where: {email: auth.email}
                        });

                        if (existingAuthor) return existingAuthor;

                        // Create new author if not exists
                        const passString = generateAuthorPassword(auth);
                        const defaultHash = await bcryptjs.hash(passString, 10);

                        return tx.author.create({
                            data: {
                                firstName: auth.firstName,
                                lastName: auth.lastName,
                                email: auth.email,
                                password: defaultHash,
                                organisation: auth.organisation,
                                country: auth.country,
                                phone: auth.phone,
                            },
                        });
                    });

                    const authors = await Promise.all(authorPromises);

                    // D. Generate ID
                    const date = entry.createdAt ? new Date(entry.createdAt) : new Date();
                    const yearDecade = date.getFullYear().toString().slice(-2);
                    const monthNum = (date.getMonth() + 1).toString().padStart(2, "0");
                    const uniqueSuffix = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
                    const submissionId = `MIG_${yearDecade}${monthNum}${uniqueSuffix}`;

                    // E. Create Paper
                    await tx.paper.create({
                        data: {
                            submissionId,
                            name: entry.title,
                            keywords: entry.keywords,
                            archiveId: archive.id,
                            publishId: entry.publishId,
                            publishUrl: entry.publishUrl,
                            authors: {
                                connect: authors.map((a) => ({id: a.id})),
                            },
                            createdAt: entry.createdAt ? new Date(entry.createdAt) : undefined,
                            paperStatuses: {
                                create: {
                                    status: PaperStatus.PUBLISHED,
                                    isApproved: true,
                                    comments: ["Imported via Bulk Migration Tool"],
                                    createdAt: entry.createdAt ? new Date(entry.createdAt) : undefined,
                                }
                            }
                        }
                    });
                });

                // Transaction committed successfully
                results.success++;

            } catch (err: any) {
                // Transaction rolled back
                results.failed++;
                results.errors.push({
                    row: index + 1, // 1-based index for the UI
                    title: entry.title,
                    error: err.message || "Unknown database error"
                });
                console.error(`Migration failed for row ${index + 1}:`, err.message);
            }
        }

        // Return summary so Frontend can generate the Error Sheet
        return NextResponse.json({
            message: "Batch processed",
            summary: results
        });

    } catch (error) {
        console.error("Migration Fatal Error:", error);
        return NextResponse.json(
            {error: "Internal Server Error"},
            {status: 500}
        );
    }
};