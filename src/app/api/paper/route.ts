import {prisma} from "@/lib/prisma";
import {NextResponse} from "next/server";

export const GET = async () => {
    try {
        const papers = await prisma.paper.findMany({
            include: {
                archive: {
                    select: {
                        volume: true,
                        issue: true,
                        year: true
                    }
                }
            }
        });
        if (!papers) {
            return NextResponse.json({error: `No Papers Found`}, {status: 404});
        }
        return NextResponse.json(papers);
    } catch (e) {
        console.log(`Failed to fetch Papers`, e);
        return NextResponse.json({error: `Internal Server Error`}, {status: 500})
    }
}