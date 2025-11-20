// app/api/paper/route.ts

import {Prisma} from "@prisma/client";
import bcryptjs from "bcryptjs";
import {lookup} from "mime-types";
import {type NextRequest, NextResponse} from "next/server";
import {sendSubmissionMail} from "@/lib/mail/methods/sendSubmissionMail";
import {prisma} from "@/lib/prisma";
import {getObjectUrl} from "@/utils/cloudflare";
import {fileUpload} from "@/utils/operations";

/**
 * Handles a POST request to create and store a new paper along with its associated metadata, authors, and status.
 * This method performs input validation, file upload, database operations, and sends emails to authors.
 *
 * @param {NextRequest} req - The incoming request object containing form data with details about the paper, authors, and other metadata.
 * Required fields in `formData` include:
 * - `file`: The manuscript file to be uploaded.
 * - `paperName`: The name/title of the paper.
 * - `archiveId`: The archive to associate the paper with.
 * - `authors`: A JSON stringifies array of author details with properties such as `firstName`, `lastName`, `email`, `phone`, etc.
 * Optional field:
 * - `keywords`: A JSON stringifies array of keywords related to the paper.
 *
 * @return {Promise<NextResponse>} A JSON response with the created paper's data if successful, otherwise an error response.
 *
 * Returns:
 * - `201` on successful paper creation.
 * - `400` if required fields are missing, invalid, or database-related errors occur.
 * - `404` if the specified archive does not exist.
 * - `500` for internal server errors.
 */
export async function POST(req: NextRequest): Promise<NextResponse> {
    try {
        const formData = await req.formData();

        // --- 1. Extract and Validate FormData ---
        const file = formData.get("file") as File | null;
        const paperName = formData.get("paperName") as string | null;
        const archiveId = formData.get("archiveId") as string | null;
        const authorsStr = formData.get("authors") as string | null;
        const keywordsStr = formData.get("keywords") as string | null;

        if (!file || !paperName || !archiveId || !authorsStr) {
            return NextResponse.json(
                {error: "File, paper name, archive, and authors are required."},
                {status: 400},
            );
        }

        // --- 2. Safely Parse JSON inputs ---
        let authors: any[];
        try {
            authors = JSON.parse(authorsStr);
            if (!Array.isArray(authors) || authors.length === 0)
                return NextResponse.json(
                    {error: "Authors must be an array"},
                    {status: 400},
                );
        } catch (e) {
            return NextResponse.json(
                {
                    error:
                        "Invalid or empty 'authors' field. It must be a non-empty JSON array string.",
                },
                {status: 400},
            );
        }

        let keywords: string[] | undefined;
        if (keywordsStr) {
            try {
                keywords = JSON.parse(keywordsStr);
                if (!Array.isArray(keywords))
                    return NextResponse.json(
                        {error: "keywords must be an array"},
                        {status: 400},
                    );
            } catch (e) {
                return NextResponse.json(
                    {
                        error: "Invalid 'keywords' field. It must be a JSON array string.",
                    },
                    {status: 400},
                );
            }
        }

        // --- 3. Pre-Transaction Validations ---
        const archiveExists = await prisma.archive.findUnique({
            where: {id: archiveId},
        });
        if (!archiveExists) {
            return NextResponse.json(
                {message: `Archive with ID ${archiveId} not found.`},
                {status: 404},
            );
        }

        // --- 4. File Upload (can happen before the transaction) ---
        const fileName = file.name;
        const objectKey = `${Date.now()}-${fileName}`;
        const buffer = Buffer.from(await file.arrayBuffer());
        const contentType = lookup(fileName) || "application/octet-stream";
        await fileUpload({key: objectKey, buffer, contentType});
        const fileUrl = await getObjectUrl(objectKey);

        // Array to hold data for sending emails after the transaction
        const authorEmailData: {
            firstName: string;
            email: string;
            password: string;
        }[] = [];

        // --- 5. Database Operations within a Transaction ---
        const newPaper = await prisma.$transaction(async (tx) => {
            // A) Upsert all authors
            const authorUpsertPromises = authors.map((author: any) => {
                const authorFullName = `${author.firstName.trim()} ${author.lastName?.trim() || ""}`;
                const generatedPassword = `${authorFullName.slice(0, 4).toUpperCase()}${author.phone.trim().slice(-4)}`;
                const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);

                authorEmailData.push({
                    firstName: author.firstName,
                    email: author.email,
                    password: generatedPassword,
                });

                return tx.author.upsert({
                    where: {email: author.email},
                    update: {firstName: author.firstName, lastName: author.lastName},
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
            });
            const upsertedAuthors = await Promise.all(authorUpsertPromises);
            const authorIdsToConnect = upsertedAuthors.map((author) => ({
                id: author.id,
            }));

            const zeroBasedMonth = new Date().getMonth();

// Get the human-readable month number (1-12)
            const currentMonthNumber = zeroBasedMonth + 1;
            const currentYear = new Date().getFullYear(); //2025
            const yearDecade = currentYear.toString().slice(-2); //25

            const counter = await tx.idCounter.findUnique({
                where: {id: "paperCounter"},
            });

            let newCount;
            if (!counter || counter.year < currentYear) {
                // the counter is not available or the year has been passed
                newCount = 1;
                await tx.idCounter.upsert({
                    where: {id: "paperCounter"},
                    update: {
                        year: currentYear,
                        count: newCount,
                    },
                    create: {
                        year: currentYear,
                        count: newCount,
                    },
                });
            } else {
                // current year increments this
                const updatedCounter = await tx.idCounter.update({
                    where: {id: "paperCounter"},
                    data: {
                        count: {increment: 1},
                    },
                });
                newCount = updatedCounter.count;
            }

            const submissionId = `JCT_${yearDecade}${currentMonthNumber}${newCount.toString().padStart(3, "0")}`;

            // B) Create the paper and connect authors
            const paper = await tx.paper.create({
                data: {
                    submissionId,
                    name: paperName,
                    keywords,
                    manuscriptId: objectKey,
                    manuscriptUrl: fileUrl,
                    archiveId,
                    authors: {connect: authorIdsToConnect},
                },
                include: {
                    authors: true,
                },
            });

            // C) Create the initial status for the paper
            await tx.status.create({
                data: {
                    status: "SUBMITTED",
                    paperId: paper.submissionId,
                    isApproved: true,
                    comments: [`Paper Submitted by Author(s)`],
                },
            });

            const authorLogPromises = authorIdsToConnect.map((authorId) => {
                return tx.activityLog.create({
                    data: {
                        activity: "PAPER_SUBMITTED",
                        details: `A Paper Submitted by Author(s)`,
                        paperId: paper.id,
                        authorId: authorId.id,
                    },
                });
            });
            await Promise.all(authorLogPromises);

            return paper; // Return the created paper from the transaction
        });

        if (newPaper && authorEmailData.length > 0) {
            const emailPromises = authorEmailData.map((authorData) =>
                sendSubmissionMail({
                    firstName: authorData.firstName,
                    email: authorData.email,
                    password: authorData.password,
                    submissionId: newPaper.submissionId,
                }),
            );
            await Promise.all(emailPromises).catch((e) => {
                console.error(`Failed to send one or more submission emails: `, e);
            });
        }

        return NextResponse.json(newPaper, {status: 201});
    } catch (err) {
        console.error("Create Paper Error:", err);
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            return NextResponse.json(
                {error: "Database error: " + err.message},
                {status: 400},
            );
        }
        return NextResponse.json(
            {error: "An internal server error occurred."},
            {status: 500},
        );
    }
}
