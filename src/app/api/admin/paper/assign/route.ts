import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/prisma"
import {authorize} from "@/utils/authorize";

export const POST = async (req: NextRequest) => {
    try {
        await authorize(req, "ADMIN")
        const {paperId, employeeId} = await req.json();
        const [paper, employee] = await Promise.all([
            prisma.paper.findUnique({
                where: {id: paperId}
            }),
            prisma.employee.findUnique({
                where: {id: employeeId}
            })
        ])
        if (!employee || !paper) {
            return NextResponse.json({error: "Paper or Employee does not exist"}, {status: 400})
        }
        await prisma.paper.update({
            where: {id: paperId},
            data: {
                employeeId,
            }
        })

    } catch (error) {
        console.error(`Error Assigning Editor`, error)
        return NextResponse.json({error: "Internal Server Error"}, {status: 500})
    }
}