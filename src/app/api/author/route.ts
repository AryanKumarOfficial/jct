// src/app/api/author/route.ts
import {$Enums, Prisma} from "@/generated/prisma";
import bcrypt from "bcryptjs";
import {lookup} from "mime-types";
import {type NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
import {fileUpload} from "@/utils/operations";
import {getObjectUrl} from "@/utils/cloudflare";
import {submissionQueue} from "@/lib/queue";

export async function POST(req: NextRequest): Promise<NextResponse> {
    let objectKey: string | null = null;

    try {
        const formData = await req.formData();

        // 1. Validate Form Data
        const file = formData.get("file") as File | null;
        const paperName = formData.get("paperName") as string | null;
        const abstract = formData.get("abstract") as string | null;
        const archiveId = formData.get("archiveId") as string | null;
        const authorsStr = formData.get("authors") as string | null;
        const keywordsStr = formData.get("keywords") as string | null;

        if (!file || !paperName || !archiveId || !authorsStr) {
            return NextResponse.json(
                {error: "Missing required fields: file, paperName, archiveId, or authors."},
                {status: 400}
            );
        }

        // 2. Parse & Deduplicate Authors
        let rawAuthors: any[];
        try {
            rawAuthors = JSON.parse(authorsStr);
            if (!Array.isArray(rawAuthors) || rawAuthors.length === 0) {
                return NextResponse.json({error: "Authors must be a non-empty array"}, {status: 400});
            }
        } catch (e) {
            return NextResponse.json({error: "Invalid authors JSON"}, {status: 400});
        }

        const uniqueAuthorsMap = new Map();
        for (const auth of rawAuthors) {
            if (auth.email) {
                uniqueAuthorsMap.set(auth.email.trim().toLowerCase(), auth);
            }
        }
        const uniqueAuthors = Array.from(uniqueAuthorsMap.values());

        // 3. Upload File (Sanitized)
        const fileName = file.name.replace(/\s+/g, '_');
        objectKey = `${Date.now()}-${fileName}`;
        const buffer = Buffer.from(await file.arrayBuffer());
        const contentType = lookup(fileName) || "application/octet-stream";

        await fileUpload({key: objectKey, buffer, contentType});
        const fileUrl = await getObjectUrl(objectKey);

        // 4. Upsert Authors (Outside Transaction)
        const authorEmailData: { firstName: string; email: string; password: string }[] = [];
        const upsertedAuthors = await Promise.all(uniqueAuthors.map(async (author: any) => {
            const email = author.email.trim().toLowerCase();
            const firstName = author.firstName?.trim() || "Unknown";
            const lastName = author.lastName?.trim() || "";
            const full = `${firstName} ${lastName}`.trim();
            const rawPassword = `${(full.slice(0, 4) || email.slice(0, 4)).toUpperCase()}${(author.phone || "0000").toString().slice(-4)}`;
            const hashedPassword = await bcrypt.hash(rawPassword, 10);

            authorEmailData.push({firstName, email, password: rawPassword});

            return prisma.author.upsert({
                where: {email},
                update: {
                    firstName,
                    lastName,
                    phone: author.phone,
                    organisation: author.organisation,
                    country: author.country
                },
                create: {
                    firstName,
                    lastName,
                    email,
                    password: hashedPassword,
                    country: author.country,
                    organisation: author.organisation,
                    phone: author.phone
                },
            });
        }));

        const authorIdsToConnect = upsertedAuthors.map(a => ({id: a.id}));

        // 5. Database Transaction (With Increased Timeout)
        const newPaper = await prisma.$transaction(async (tx) => {
            const currentYear = new Date().getFullYear();

            // ID Counter Logic (Replaces raw SQL sequence)
            let counter = await tx.idCounter.findUnique({where: {id: "paperCounter"}});
            if (!counter || counter.year !== currentYear) {
                counter = await tx.idCounter.upsert({
                    where: {id: "paperCounter"},
                    create: {id: "paperCounter", year: currentYear, count: 101},
                    update: {year: currentYear, count: 101}
                });
            } else {
                counter = await tx.idCounter.update({
                    where: {id: "paperCounter"},
                    data: {count: {increment: 1}}
                });
            }

            const monthNumber = new Date().getMonth() + 1;
            const yearDecade = currentYear.toString().slice(-2);
            const submissionId = `JCT_${yearDecade}${monthNumber}${counter.count.toString().padStart(3, "0")}`;

            // Create Paper
            const paper = await tx.paper.create({
                data: {
                    submissionId,
                    name: paperName,
                    keywords: keywordsStr ? JSON.parse(keywordsStr) : [],
                    manuscriptId: objectKey,
                    manuscriptUrl: fileUrl,
                    archiveId,
                    authors: {connect: authorIdsToConnect},
                    abstract,
                },
                include: {authors: true},
            });

            // Initial Status
            await tx.status.create({
                data: {
                    status: "SUBMITTED",
                    paperId: paper.submissionId,
                    isApproved: true,
                    comments: [`Paper Submitted by Author(s)`],
                },
            });

            return paper;
        }, {
            timeout: 20000,
            maxWait: 5000
        });

        // 6. Background Job (Wrapped in try/catch to ignore Redis errors)
        try {
            await submissionQueue.add("process-submission", {
                submissionId: newPaper.submissionId,
                paperId: newPaper.id,
                authors: authorEmailData,
                manuscriptKey: objectKey,
                manuscriptUrl: fileUrl,
            });
        } catch (queueErr) {
            console.warn("⚠️ Background job failed (Redis down?), but submission was saved.", queueErr);
        }

        return NextResponse.json(newPaper, {status: 201});

    } catch (err: any) {
        console.error("Create Paper Error:", err);
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            return NextResponse.json({error: "Database error: " + err.message}, {status: 400});
        }
        return NextResponse.json({error: "An internal server error occurred."}, {status: 500});
    }
}