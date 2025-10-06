import {NextRequest, NextResponse} from "next/server";
import {authorize} from "@/utils/authorize";
import {getTokenData} from "@/utils/token";
import {prisma} from "@/lib/prisma";

/**
 * Handles an HTTP GET request to retrieve data related to assigned papers for an authorized editor.
 *
 * This function performs the following operations:
 * - Authorizes the request ensuring the user has the "EDITOR" role.
 * - Extracts the authentication token from the request and validates it.
 * - Checks if the corresponding employee exists in the database.
 * - Retrieves all papers assigned to the editor based on their employee ID.
 * - Returns the list of assigned papers or appropriate error responses based on validation failures or exceptions.
 *
 * @param {NextRequest} req - The incoming HTTP request object.
 * @returns {Promise<NextResponse>} - A response containing the assigned papers in JSON format, or an error message with the appropriate HTTP status code.
 */
export const GET = async (req: NextRequest): Promise<NextResponse> => {
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