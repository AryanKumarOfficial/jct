// src/app/api/invoice/[paymentId]/route.ts
import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
import PDFDocument from "pdfkit";
import {format} from "date-fns";
import path from "path";
import fs from "fs";
import {fileExists} from "@/utils/system";

export async function GET(
    _req: Request,
    {params}: { params: Promise<{ paymentId: string }> }
) {
    try {
        const {paymentId} = await params;
        if (!paymentId) {
            return NextResponse.json({error: `Payment id is required`}, {status: 400})
        }
        const payment = await prisma.transaction.findUnique({
            where: {id: paymentId},
            include: {
                paper: true,
                author: true
            },
        });

        if (!payment) {
            return NextResponse.json({error: "Payment not found"}, {status: 404});
        }

        const fontPath = path.join(process.cwd(), "public", "fonts", "inter", "Inter-VariableFont_opsz", "wght.ttf");

        if (!(await fileExists(fontPath))) {
            return NextResponse.json({error: `Font file not found at ${fontPath}. Please check if Inter font is installed.`}, {
                status: 500
            })
        }

        const fontBuffer = fs.readFileSync(fontPath);
        const doc = new PDFDocument({margin: 50});

        const chunks: Uint8Array[] = [];
        doc.on("data", (chunk) => chunks.push(chunk));
        const endPromise = new Promise<void>((resolve) =>
            doc.on("end", resolve)
        );
        doc.registerFont("Inter", fontBuffer);
        doc.font("Inter");

        const amountInr = (payment.amount / 100).toFixed(2);

        // Header
        doc.fontSize(20).text("JCT Journal – Invoice", {align: "center"});
        doc.moveDown();

        doc
            .fontSize(10)
            .text("JCT Journal Publishing Platform", {align: "left"})
            .text("https://jctjournal.com")
            .moveDown();

        doc
            .fontSize(12)
            .text(`Invoice ID: ${payment.id}`)
            .text(
                `Date: ${format(new Date(payment.createdAt), "dd MMM yyyy, HH:mm")}`
            )
            .moveDown();

        // Billed To
        doc
            .fontSize(12)
            .text("Billed To:", {underline: true})
            .text(payment.author.firstName.concat(" ", payment.author.lastName ?? ""))
            .text(payment.author.email)
            .moveDown();

        // Paper Info
        doc
            .fontSize(12)
            .text("Paper Details:", {underline: true})
            .text(payment.paper?.name ?? "Untitled Paper")
            .moveDown();

        // Amount
        doc
            .fontSize(12)
            .text("Charges:", {underline: true})
            .text(`Article Processing Charge (APC): ₹${amountInr}`)
            .moveDown();

        doc
            .fontSize(10)
            .text(
                "Note: This is a computer-generated invoice and does not require a signature."
            );

        doc.end();
        await endPromise;

        const pdfBuffer = Buffer.concat(chunks);

        return new NextResponse(pdfBuffer, {
            status: 200,
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": `inline; filename="invoice-${payment.id}.pdf"`,
            },
        });
    } catch (error: any) {
        console.error("Invoice error:", error);
        return NextResponse.json(
            {error: "Failed to generate invoice", details: error.message},
            {status: 500}
        );
    }
}
