import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
import puppeteer from "puppeteer";
import path from "node:path";
import fs from "node:fs/promises";
import {fileUpload} from "@/utils/operations";
import {getObjectUrl} from "@/utils/cloudflare";

export const POST = async (req: NextRequest, {params}: { params: Promise<{ paperId: string }> }) => {
    try {

        const {paperId} = await params;
        if (!paperId) {
            return NextResponse.json({error: `Paper id is required`}, {status: 400});
        }
        // 1. Fetch Paper and Author details
        const paper = await prisma.paper.findUnique({
            where: {
                id: paperId,
            },
            include: {
                authors: true
            }
        })

        if (!paper || paper.authors.length === 0) {
            return NextResponse.json({error: `Paper or Authors not found`}, {status: 404});
        }

        const primaryAuthor = paper.authors[0];
        const authorName = `${primaryAuthor.firstName} ${primaryAuthor.lastName}` || `Primary Author`;
        const paperTitle = paper.name || `Paper Title`;
        const submissionDate = new Date().toLocaleDateString("en-IN").replace(/\//g, '-');

        // 2. Read and populate the HTML template
        const templatePath = path.resolve("./templates", "copyright-template.html");
        let html = await fs.readFile(templatePath, "utf-8");
        html = html.replace(/{{authorName}}/g, authorName)
            .replace(/{{paperTitle}}/g, paperTitle)
            .replace(/{{submissionDate}}/g, submissionDate);

        // 3. Generate PDF with Puppeteer
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setContent(html, {
            waitUntil: "domcontentloaded"
        });
        const pdfUint8Array = await page.pdf({format: "A4"});
        await browser.close();

        // 4. Upload the PDF to Cloudflare R2
        const pdfBuffer = Buffer.from(pdfUint8Array);
        const objectKey = `copyright/${submissionDate}/${paperId}.pdf`;
        await fileUpload({
            key: objectKey,
            buffer: pdfBuffer,
            contentType: "application/pdf"
        })
        // Get a signed URL for the uploaded file (optional, but good for immediate access)
        const pdfUrl = await getObjectUrl(objectKey);

        // 5. Create the Copyright record in the database

        const newCopyright = await prisma.copyright.create({
            data: {
                paperId: paperId,
                copyrightStatus: "SIGNED",
                pdfKey: objectKey,
                pdfUrl,
            }
        })

        return NextResponse.json({newCopyright, message: `Copyright signed successfully`});


    } catch (err) {
        console.error(`Failed to sign copyright`, err);
        return NextResponse.json({error: "Internal Server Error"}, {status: 500});
    }
}