// app/api/paper/route.ts
import {$Enums, Prisma} from "@/generated/prisma";
import bcrypt from "bcryptjs";
import {lookup} from "mime-types";
import {type NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
import {fileUpload} from "@/utils/operations";
import {getObjectUrl} from "@/utils/cloudflare";
import {submissionQueue} from "@/lib/queue";
import ActivityType = $Enums.ActivityType;

export async function POST(req: NextRequest): Promise<NextResponse> {
    try {
        const formData = await req.formData();

        const file = formData.get("file") as File | null;
        const paperName = formData.get("paperName") as string | null;
        const abstract = formData.get("abstract") as string | null;
        const archiveId = formData.get("archiveId") as string | null;
        const authorsStr = formData.get("authors") as string | null;
        const keywordsStr = formData.get("keywords") as string | null;

        if (!file || !paperName || !archiveId || !authorsStr) {
            return NextResponse.json({error: "File, paper name, archive, and authors are required."}, {status: 400});
        }

        // parse authors
        let authors: any[];
        try {
            authors = JSON.parse(authorsStr);
            if (!Array.isArray(authors) || authors.length === 0) {
                return NextResponse.json({error: "Authors must be a non-empty array"}, {status: 400});
            }
        } catch (e) {
            return NextResponse.json({error: "Invalid authors JSON"}, {status: 400});
        }

        // parse keywords (optional)
        let keywords: string[] | undefined;
        if (keywordsStr) {
            try {
                const parsed = JSON.parse(keywordsStr);
                if (Array.isArray(parsed) && parsed.length > 0) keywords = parsed;
            } catch {
                // ignore
            }
        }

        // Ensure archive exists
        const archiveExists = await prisma.archive.findUnique({where: {id: archiveId}});
        if (!archiveExists) return NextResponse.json({message: `Archive ${archiveId} not found`}, {status: 404});

        // Upload file BEFORE transaction
        const fileName = file.name;
        const objectKey = `${Date.now()}-${fileName}`;
        const buffer = Buffer.from(await file.arrayBuffer());
        const contentType = lookup(fileName) || "application/octet-stream";
        await fileUpload({key: objectKey, buffer, contentType});
        const fileUrl = await getObjectUrl(objectKey);

        // Prepare author email payloads + async upsert authors OUTSIDE tx (faster)
        const authorEmailData: { firstName: string; email: string; password: string }[] = [];

        const upsertPromises = authors.map(async (author: any) => {
            // generate a temporary password (or use another flow)
            const full = `${author.firstName?.trim() || ""} ${author.lastName?.trim() || ""}`.trim();
            const generatedPassword = `${(full.slice(0, 4) || author.email.slice(0, 4)).toUpperCase()}${(author.phone || "0000").toString().slice(-4)}`;
            const hashedPassword = await bcrypt.hash(generatedPassword, 10);

            // collect email payload
            authorEmailData.push({firstName: author.firstName, email: author.email, password: generatedPassword});

            // upsert (concurrent)
            const upserted = await prisma.author.upsert({
                where: {email: author.email},
                update: {
                    firstName: author.firstName,
                    lastName: author.lastName,
                    phone: author.phone,
                    organisation: author.organisation,
                    country: author.country,
                },
                create: {
                    firstName: author.firstName,
                    lastName: author.lastName,
                    email: author.email,
                    password: hashedPassword,
                    country: author.country,
                    organisation: author.organisation,
                    phone: author.phone,
                },
            });
            return upserted;
        });

        const upsertedAuthors = await Promise.all(upsertPromises);
        const authorIdsToConnect = upsertedAuthors.map(a => ({id: a.id}));

        // Minimal, fast transaction: use Postgres sequence for number and create paper + status + logs
        const newPaper = await prisma.$transaction(async (tx) => {
            // Get next sequence value (Postgres)
            const seqRows  = await tx.$queryRawUnsafe<{ nextval: bigint }[]>(`SELECT nextval('paper_submission_seq')`);
            const currentYear = new Date().getFullYear();
            const monthNumber = new Date().getMonth() + 1;
            const yearDecade = currentYear.toString().slice(-2);
            const seqNumber = Number(seqRows[0].nextval);
            const submissionId = `JCT_${yearDecade}${monthNumber}${seqNumber.toString().padStart(3, "0")}`;

            const paper = await tx.paper.create({
                data: {
                    submissionId,
                    name: paperName,
                    keywords,
                    manuscriptId: objectKey,
                    manuscriptUrl: fileUrl,
                    archiveId,
                    authors: {connect: authorIdsToConnect},
                    abstract,
                },
                include: {authors: true},
            });

            await tx.status.create({
                data: {
                    status: "SUBMITTED",
                    paperId: paper.submissionId,
                    isApproved: true,
                    comments: [`Paper Submitted by Author(s)`],
                },
            });

            // batch activity logs
            if (authorIdsToConnect.length > 0) {
                const logs = authorIdsToConnect.map(aid => ({
                    authorId: aid.id,
                    paperId: paper.id,
                    activity: ActivityType.PAPER_SUBMITTED,
                    details: "A Paper Submitted by Author(s)",
                }));
                // use createMany to be faster
                await tx.activityLog.createMany({data: logs});
            }

            return paper;
        });

        // Push background job to queue and return 201 quickly
        await submissionQueue.add("process-submission", {
            submissionId: newPaper.submissionId,
            paperId: newPaper.id,
            authors: authorEmailData,
            manuscriptKey: objectKey,
            manuscriptUrl: fileUrl,
        });

        return NextResponse.json(newPaper, {status: 201});
    } catch (err: any) {
        console.error("Create Paper Error:", err);
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            return NextResponse.json({error: "Database error: " + err.message}, {status: 400});
        }
        return NextResponse.json({error: "An internal server error occurred."}, {status: 500});
    }
}
