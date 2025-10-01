import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";

export const GET = async (req: NextRequest) => {
    try {
        const searchParams = req.nextUrl.searchParams;
        const paperId = searchParams.get(`paperId`)
        if (!paperId) {
            return NextResponse.json({error: `Paper id is required`}, {
                status: 400
            });
        }

        const status = await prisma.status.findMany({
            where: {
                paperId: paperId, isApproved: true
            },
            orderBy: [
                {
                    createdAt: "desc"
                },
                {
                    updatedAt: "desc"
                }
            ],
            include: {
                paper: true,
                changedBy: true
            },
        });

        if (status.length === 0) return NextResponse.json({error: "No paper found."}, {status: 404});

        return NextResponse.json(status);

    } catch (err) {
        console.error(`Failed to fetch the status of the paper`, err);
        return NextResponse.json({error: `Failed to fetch the status of the paper`}, {status: 500});
    }
}