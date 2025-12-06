import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authorize } from "@/utils/authorize";
import { bulkImportSchema } from "@/schemas/migrationSchema";
import bcryptjs from "bcryptjs";
import { PaperStatus } from "@/types/enums";
import { treeifyError } from "zod";
import { generateAuthorPassword, normalizeAndCapitalize } from "@/utils/typography";

export const POST = async (req: NextRequest) => {
    try {
        // 1. Security Check
        await authorize(req, "ADMIN");

        // 2. Parse & Validate Body
        const body = await req.json();
        const parseResult = bulkImportSchema.safeParse(body);

        if (!parseResult.success) {
            return NextResponse.json(
                { error: "Validation failed", details: treeifyError(parseResult.error) },
                { status: 400 }
            );
        }

        const papersToImport = parseResult.data;
        const results = {
            total: papersToImport.length,
            success: 0,
            failed: 0,
            errors: [] as any[],
        };

        // 3. Process sequentially (Fixes Race Conditions & Connection Pool issues)
        for (const [index, entry] of papersToImport.entries()) {
            try {
                // Run operations for THIS paper in a transaction
                // If paper creation fails, the author upserts in this specific step roll back
                // (though usually, keeping authors is fine, transaction ensures consistency)
                await prisma.$transaction(async (tx) => {

                    // A. Handle Archive
                    const archive = await tx.archive.upsert({
                        where: {
                            id: `migrated_vol${entry.volume}_iss${entry.issue}_${entry.year}`,
                        },
                        update: {},
                        create: {
                            id: `migrated_vol${entry.volume}_iss${entry.issue}_${entry.year}`,
                            volume: entry.volume,
                            issue: entry.issue,
                            month: normalizeAndCapitalize(entry.month),
                            year: entry.year,
                        },
                    });

                    // B. Handle Authors
                    // We can use Promise.all here because authors within ONE paper are usually unique
                    const authorPromises = entry.authors.map(async (auth) => {
                        const passString = generateAuthorPassword(auth);
                        const defaultHash = await bcryptjs.hash(passString, 10);

                        return tx.author.upsert({
                            where: { email: auth.email },
                            update: {},
                            create: {
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

                    // C. Generate ID
                    const date = entry.createdAt ? new Date(entry.createdAt) : new Date();
                    const yearDecade = date.getFullYear().toString().slice(-2);
                    const monthNum = (date.getMonth() + 1).toString().padStart(2, "0");
                    const uniqueSuffix = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
                    const submissionId = `MIG_${yearDecade}${monthNum}${uniqueSuffix}`;

                    // D. Create Paper
                    await tx.paper.create({
                        data: {
                            submissionId,
                            name: entry.title,
                            keywords: entry.keywords,
                            archiveId: archive.id,
                            publishUrl: entry.publishUrl,
                            authors: {
                                connect: authors.map((a) => ({ id: a.id })),
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

                // If transaction finishes without error:
                results.success++;

            } catch (err: any) {
                // If the transaction fails, it rolls back this specific paper only
                results.failed++;
                results.errors.push({
                    row: index + 1,
                    title: entry.title,
                    error: err.message
                });
                console.error(`Migration failed for row ${index}:`, err);
            }
        }

        return NextResponse.json({
            message: "Migration completed",
            summary: results
        });

    } catch (error) {
        console.error("Migration Fatal Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
};