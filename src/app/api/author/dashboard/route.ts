import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
import {authorize} from "@/utils/authorize";
import {getTokenData} from "@/utils/token";
import type {Prisma} from "@prisma/client";

import {type status as Status} from "@/generated/prisma";

type AuthorWithPapers = Prisma.authorGetPayload<{
    include: {
        papers: {
            include: {
                paperStatuses: true,
                Copyright: true
            };
            orderBy?: any
        }
    }
}>;


export const GET = async (req: NextRequest) => {
    try {
        // 1. Authorize user
        const authResponse = await authorize(req, "AUTHOR");
        if (authResponse) return authResponse; // Returns error response if unauthorized

        // 2. Get User ID from Token
        const tokenData = await getTokenData(req);
        if (!tokenData.success) {
            return NextResponse.json({error: "Invalid token"}, {status: 401});
        }

        // 3. Fetch Author Details & Papers
        const author = (await prisma.author.findUnique({
            where: {id: tokenData.data.id},
            include: {
                papers: {
                    orderBy: {createdAt: "desc"},
                    include: {
                        paperStatuses: {
                            orderBy: {createdAt: "desc"}, // Get latest status first
                            take: 1,
                        },
                        Copyright: true, // Check if copyright exists/is signed
                    },
                },
            },
        })) as AuthorWithPapers | null;

        if (!author) {
            return NextResponse.json({error: "Author not found"}, {status: 404});
        }

        // 4. Format data for the dashboard
        const dashboardData = {
            profile: {
                firstName: author.firstName,
                lastName: author.lastName,
                email: author.email,
                phone: author.phone,
                organization: author.organisation,
                country: author.country,
            },
            stats: {
                total: author.papers.length,
                accepted: author.papers.filter((p) => p.paperStatuses[0]?.status === 'ACCEPTED').length,
                published: author.papers.filter(p => p.paperStatuses[0]?.status === 'PUBLISHED').length,
            },
            papers: author.papers.map((paper) => {
                const currentStatus = paper.paperStatuses[0]?.status || "SUBMITTED";
                const isCopyrightSigned = paper.Copyright?.copyrightStatus === "SIGNED";

                return {
                    id: paper.id,
                    submissionId: paper.submissionId,
                    title: paper.name,
                    createdAt: paper.createdAt,
                    status: currentStatus,
                    // Action is required if Accepted but NOT signed
                    actionRequired: currentStatus === "ACCEPTED" && !isCopyrightSigned,
                    isCopyrightSigned,
                };
            }),
        };

        return NextResponse.json(dashboardData);
    } catch (error) {
        console.error("Dashboard API Error:", error);
        return NextResponse.json(
            {error: "Internal Server Error"},
            {status: 500}
        );
    }
};