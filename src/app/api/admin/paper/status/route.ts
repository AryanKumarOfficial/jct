// API to approve the status
import {NextRequest, NextResponse} from "next/server";
import {authorize} from "@/utils/authorize";
import {prisma} from "@/lib/prisma";
import {getTokenData} from "@/utils/token";
import {fileUpload} from "@/utils/operations"
import {lookup} from "mime-types"
import {getObjectUrl} from "@/utils/cloudflare";
import {isPaperPaid} from "@/utils/payments";
import {PaperStatus} from "@/types/enums";

export const PATCH = async (req: NextRequest) => {
    try {
        await authorize(req, "ADMIN");
        const {statusId} = await req.json();
        if (!statusId) {
            return NextResponse.json({error: "Status ID is required for this operation"}, {status: 400})
        }
        const updatedStatus = await prisma.status.update({
            where: {id: statusId},
            data: {
                isApproved: true
            }
        })
        return NextResponse.json(updatedStatus);
    } catch (error) {
        console.error(`Failed to approve the paper status`, error);
        return NextResponse.json({error: `Failed to approve the paper status`}, {status: 500});
    }
}

export const POST = async (req: NextRequest) => {
    try {
        await authorize(req, "ADMIN");
        // 1. Handle multipart/form-data for file uploads
        const formData = await req.formData();
        const status = formData.get("status") as PaperStatus;
        const comments = formData.get("comments") as string[] | null;
        const paperId = formData.get("paperId") as string;
        const file = formData.get("file") as File | null;

        if (!status || !paperId) {
            return NextResponse.json({error: "Status and paperId must be provided"}, {status: 400});
        }

        if (!Array.isArray(comments)) {
            return NextResponse.json({error: "Comments must be an array"}, {status: 400});
        }

        const decodedData = await getTokenData(req);
        if (!decodedData.success) {
            return NextResponse.json({error: "Token not found"}, {status: 400});
        }

        if (file) {

            const hasPaid = await isPaperPaid(paperId);
            if (!hasPaid) {
                return NextResponse.json({error: "Cannot publish paper. Payment is pending or has failed."}, {status: 402});
            }

            const fileName = file.name;
            const objectKey = `published/${paperId}-${Date.now()}-${fileName}`;
            const buffer = Buffer.from(await file.arrayBuffer());
            const contentType = lookup(fileName) || "application/octet-stream";
            await fileUpload({key: fileName, buffer, contentType});
            const fileUrl = await getObjectUrl(objectKey);

            const [updatedPaper, newStatus] = await prisma.$transaction([
                prisma.paper.update({
                    where: {id: paperId},
                    data: {
                        publishId: objectKey,
                        publishUrl: fileUrl,
                    }
                }),
                prisma.status.create({
                    data: {
                        status: "PUBLISHED",
                        paperId: paperId, // Ensure this maps to the correct field in your schema
                        comments: comments,
                        changedById: decodedData.data.id,
                        isApproved: true
                    }
                })
            ]);
            return NextResponse.json(newStatus, {status: 201});
        } else {
            const newStatus = await prisma.status.create({
                data: {
                    status,
                    paperId,
                    comments,
                    changedBy :decodedData.data.id
                }
            })
            return NextResponse.json(newStatus, { status: 201 });

        }
    } catch (err) {
        console.error(`Failed to change the paper status`, err);
        return NextResponse.json({error: `Failed to change the paper status`}, {status: 500});
    }
}