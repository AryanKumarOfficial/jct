import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
import {authorize} from "@/utils/authorize";
import {getTokenData} from "@/utils/token";
import {fileUpload} from "@/utils/operations";
import {getObjectUrl} from "@/utils/cloudflare";
import puppeteer from "puppeteer";
import path from "node:path";
import fs from "node:fs/promises";

export const POST = async (
    req: NextRequest,
    {params}: { params: Promise<{ paperId: string }> }
) => {
    try {
        // 1. Security: Authorize the user role
        await authorize(req, "AUTHOR");

        const {paperId} = await params;
        if (!paperId) {
            return NextResponse.json(
                {error: "Paper ID is required"},
                {status: 400}
            );
        }

        // 2. Security: Validate Token & User Identity
        const tokenData = await getTokenData(req);
        if (!tokenData.success) {
            return NextResponse.json(
                {error: "Unauthorized request"},
                {status: 401}
            );
        }
        const userId = tokenData.data.id;

        // 3. Fetch Paper and Authors
        const paper = await prisma.paper.findUnique({
            where: {id: paperId},
            include: {authors: true},
        });

        if (!paper) {
            return NextResponse.json({error: "Paper not found"}, {status: 404});
        }

        // 4. Security: Ownership Check
        // Ensure the logged-in user is actually an author of this paper
        const isAuthor = paper.authors.some((author) => author.id === userId);
        if (!isAuthor) {
            return NextResponse.json(
                {error: "You are not authorized to sign copyright for this paper."},
                {status: 403}
            );
        }

        // Check if already signed
        const existingCopyright = await prisma.copyright.findUnique({
            where: {paperId},
        });

        if (existingCopyright && existingCopyright.copyrightStatus === "SIGNED") {
            return NextResponse.json(
                {error: "Copyright is already signed."},
                {status: 409}
            );
        }

        // 5. Prepare Data for PDF
        const primaryAuthor = paper.authors[0]; // Assuming primary author signs, or the specific logged in author
        // Ideally, we use the name of the person actually signing:
        const signingAuthor = paper.authors.find((a) => a.id === userId) || primaryAuthor;

        const authorName = `${signingAuthor.firstName} ${signingAuthor.lastName || ""}`.trim();
        const paperTitle = paper.name;
        const submissionDate = new Date().toLocaleDateString("en-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

        // 6. Read and Populate Template
        const templatePath = path.resolve("./templates", "copyright-template.html");
        let html = await fs.readFile(templatePath, "utf-8");

        // Simple template replacement
        html = html
            .replace(/{{authorName}}/g, authorName)
            .replace(/{{paperTitle}}/g, paperTitle)
            .replace(/{{submissionDate}}/g, submissionDate);

        // 7. Generate PDF
        const browser = await puppeteer.launch({
            args: ["--no-sandbox", "--disable-setuid-sandbox"], // Required for Docker/Serverless environments
        });
        const page = await browser.newPage();
        await page.setContent(html, {waitUntil: "domcontentloaded"});
        const pdfUint8Array = await page.pdf({format: "A4", printBackground: true});
        await browser.close();

        // 8. Upload to Cloudflare R2
        const pdfBuffer = Buffer.from(pdfUint8Array);
        const objectKey = `copyright/${paper.submissionId}-${Date.now()}.pdf`; // Use submissionId for cleaner file names

        await fileUpload({
            key: objectKey,
            buffer: pdfBuffer,
            contentType: "application/pdf",
        });

        const pdfUrl = await getObjectUrl(objectKey);

        // 9. Save Record in Database
        const newCopyright = await prisma.copyright.create({
            data: {
                paperId: paper.id,
                copyrightStatus: "SIGNED",
                pdfKey: objectKey,
                pdfUrl: pdfUrl,
            },
        });

        // 10. Log the activity
        await prisma.activityLog.create({
            data: {
                activity: "STATUS_CHANGED", // Or create a specific COPYRIGHT_SIGNED activity type
                details: `Copyright form signed by ${authorName}`,
                paperId: paper.id,
                authorId: userId,
            },
        });

        return NextResponse.json({
            message: "Copyright signed successfully",
            copyright: newCopyright,
        });

    } catch (err) {
        console.error("Copyright signing error:", err);
        return NextResponse.json(
            {error: "Internal Server Error during copyright signing."},
            {status: 500}
        );
    }
};