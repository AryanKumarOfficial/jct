import {type NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";

/**
 * Handles GET requests to retrieve the status of a paper based on the provided paper ID.
 *
 * This function extracts the `paperId` from the request's query parameters.
 * If the `paperId` is not provided or invalid, it returns an error response with a 400 status code.
 * If no status is found for the provided `paperId`, it returns a 404 status code with an error message.
 * If a database error or unexpected issue occurs, it logs the error and returns a 500 status code.
 * Otherwise, it retrieves the paper's status data including associated information such as the paper and
 * the user who changed it, returning the data in JSON format.
 *
 * @param {NextRequest} req - The HTTP request object containing the query parameter `paperId`.
 * @returns {Promise<NextResponse>} The HTTP response containing the paper status data or an error message.
 */
export const GET = async (req: NextRequest): Promise<NextResponse> => {
    try {
        const searchParams = req.nextUrl.searchParams;
        const paperId = searchParams.get(`paperId`);
        if (!paperId) {
            return NextResponse.json(
                {error: `Paper id is required`},
                {
                    status: 400,
                },
            );
        }

        const status = await prisma.status.findMany({
            where: {
                paperId: paperId,
                isApproved: true,
            },
            orderBy: [
                {
                    createdAt: "desc",
                },
                {
                    updatedAt: "desc",
                },
            ],
            include: {
                paper: {
                    include: {
                        authors: true,
                        Copyright: true
                    }
                },
                changedBy: true,
            },
        });

        if (status.length === 0)
            return NextResponse.json({error: "No paper found."}, {status: 404});

        return NextResponse.json(status);
    } catch (err) {
        console.error(`Failed to fetch the status of the paper`, err);
        return NextResponse.json(
            {error: `Failed to fetch the status of the paper`},
            {status: 500},
        );
    }
};
