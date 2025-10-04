import {NextRequest, NextResponse} from "next/server";
import {authorize} from "@/utils/authorize";
import {getTokenData} from "@/utils/token";
import {prisma} from "@/lib/prisma";

export const GET = async (req: NextRequest) => {
    try {
        await authorize(req, "EDITOR");
        const tokenResult = await getTokenData(req);
        if (!tokenResult.success) {
            return NextResponse.json({error: tokenResult.error}, {status: 401});
        }
        const employeeExists = await prisma.employee.findUnique({where: {id: tokenResult.data.id}})

        if (!employeeExists) {
            return NextResponse.json({error: `Employee doesn't exist`}, {status: 400});
        }

        const papers = await prisma.paper.findMany({
            where: {
                editorId: employeeExists.id,
            }
        })
        return NextResponse.json(papers);

    } catch (error) {
        console.error(`Failed to Fetch Assigned Papers`, error)
        return NextResponse.json({error: "Internal Server"}, {status: 500})
    }
}