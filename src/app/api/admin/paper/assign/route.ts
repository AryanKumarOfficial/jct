import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/prisma"
import {authorize} from "@/utils/authorize";

/**
 * Handles the POST request for assigning an editor to a specific paper.
 *
 * This asynchronous function authenticates the user to ensure they have
 * "ADMIN" privileges. It extracts `paperId` and `employeeId` from the
 * request body and verifies their existence in the database. If either the
 * paper or the employee does not exist, an error response is returned.
 * Otherwise, it updates the specified paper by associating it with the given
 * employee as the editor.
 *
 * @param {NextRequest} req - The incoming HTTP request object.
 * @returns {Promise<NextResponse>} The JSON response indicating the
 * success or failure of the operation.
 */
export const POST = async (req: NextRequest): Promise<NextResponse> => {
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
        const newPaper = await prisma.paper.update({
            where: {id: paperId},
            data: {
                editorId:employeeId,
            }
        })

        return NextResponse.json(newPaper);

    } catch (error) {
        console.error(`Error Assigning Editor`, error)
        return NextResponse.json({error: "Internal Server Error"}, {status: 500})
    }
}