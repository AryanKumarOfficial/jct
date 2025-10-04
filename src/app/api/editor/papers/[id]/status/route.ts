import {NextRequest, NextResponse} from "next/server";
import {authorize} from "@/utils/authorize";
import {prisma} from "@/lib/prisma";
import {getTokenData} from "@/utils/token";

export const POST = async (req: NextRequest, {params}: { params: Promise<{ id: string }> }) => {
    try {
        await authorize(req, "EDITOR");
        const decodedData = await getTokenData(req);
        if (!decodedData.success) {
            return NextResponse.json({error: "Invalid token"}, {status: 401});
        }
        const {id} = await params;
        if (!id)
            return NextResponse.json({error: "Paper ID not found"}, {status: 400});

        const {status, comments} = await req.json();
        await prisma.status.create({
            data: {
                status,
                paperId: id,
                changedById: decodedData.data.id,
                comments: comments,
            }
        })
        return NextResponse.json({success: true}, {status: 201});

    } catch (err) {
        console.error(`Failed to update the status`, err);
        return NextResponse.json({error: `Failed to update the status`}, {status: 500});
    }
}

export const PATCH = async (req: NextRequest, {params}: { params: Promise<{ id: string }> }) => {
    try {
        await authorize(req, "EDITOR");
        const {id} = await params;
        const decodedData = await getTokenData(req);
        if (!decodedData.success) {
            return NextResponse.json({error: "Token malformed"}, {status: 401});
        }
        if (!id) {
            return NextResponse.json({error: "Paper ID not found"}, {status: 401});
        }

        const {comments, statusId} = await req.json();
        const updatedStatus = await prisma.status.update({
            where: {
                id: statusId,
            },
            data: {
                comments: {
                    push: comments,

                }
            }
        })

        return NextResponse.json(updatedStatus);

    } catch
        (err) {
        console.log(`Failed to update the status`, err);
        return NextResponse.json({error: `Failed to update the status`, status: 500});
    }
}

export const GET = async (req: NextRequest, {params}: { params: Promise<{ id: string }> }) => {
    try {
        await authorize(req, "EDITOR");
        const {id} = await params;
        if (!id) {
            return NextResponse.json({error: "Paper not found provided"}, {status: 400});
        }
        const statuses = await prisma.status.findMany({where: {paperId: id}});

        return NextResponse.json(statuses);

    } catch (err) {
        console.error(`Failed to get the status`, err);
        return NextResponse.json({error: `Failed to get the status`, status: 500});
    }
}