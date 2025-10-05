import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";

export const GET = async () => {
    try {
        const archives = await prisma.archive.findMany({
            orderBy: [
                {year: "desc"}, // 1. first, by the most recent year
                {volume: "desc"}, // 2. Then, by the highest volume number
                {issue: "desc"}, // 3. finally, order by the highest issue number
            ],
            include: {
                papers: true
            }
        });
        return NextResponse.json(archives);
    } catch (err) {
        return NextResponse.json({error: `Failed to fetch`}, {status: 500});
    }
};
