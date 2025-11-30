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
                },
                authors: true, // Needed to show author names
                editor: {      // Needed to show assigned editor
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true
                    }
                },
                paperStatuses: { // Needed to track history and current status
                    orderBy: {
                        createdAt: 'desc'
                    }
                },
                Copyright: true,
                transactions: {
                    where: {
                        status: {
                            in: ["SUCCESS", "COMPLETED"]
                        }
                    },
                    select: {
                        id: true,
                        status: true,
                        amount: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
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