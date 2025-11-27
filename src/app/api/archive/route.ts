import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";

/**
 * Fetches a list of archives from the database, ordered by year (descending),
 * volume (descending), and issue (descending), and includes associated paper.
 *
 * The archives are retrieved using Prisma's `findMany` method with specified
 * sorting criteria and relational data inclusion.
 *
 * @returns {Promise<NextResponse>} A JSON response containing the fetched archive
 *          records with their associated paper or an error message if the
 *          operation fails.
 *
 * @throws {Error} Returns a 500 status JSON response with an error message
 *         if the database query or data retrieval fails.
 */
export const GET = async (req: NextRequest): Promise<NextResponse> => {
    try {
        const searchParams = req.nextUrl.searchParams;
        const mode = searchParams.get(`mode`);
        if (mode === `latest`) {
                const latestArchive = await prisma.archive.findFirst({
                    orderBy: {createdAt: "desc"},
                    include: {papers: true},
                });
            return NextResponse.json([latestArchive]);
        }
        const archives = await prisma.archive.findMany({
            orderBy: [
                {year: "desc"}, // 1. first, by the most recent year
                {volume: "desc"}, // 2. Then, by the highest volume number
                {issue: "desc"}, // 3. finally, order by the highest issue number
            ],
            include: {
                papers: true,
                _count: true,
            },
        });
        return NextResponse.json(archives);
    } catch (err) {
        return NextResponse.json({error: `Failed to fetch`}, {status: 500});
    }
};
