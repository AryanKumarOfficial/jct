import {NextRequest, NextResponse} from "next/server";
import {decodeJwtToken} from "@/utils/token";

/**
 * Handles authorization for incoming requests by validating a provided JWT token and user's role.
 *
 * This asynchronous function retrieves the authorization token from the request headers,
 * decodes it, and checks if the user's role matches the required role. If the token is
 * missing or the role does not match, it returns an appropriate HTTP response with error
 * details and status code.
 *
 * @param {NextRequest} req - The HTTP request object containing the authorization header.
 * @param {string} [role="AUTHOR"] - The required user role to access the resource. Defaults to "AUTHOR".
 * @returns {Promise<NextResponse>} A NextResponse object representing the result of the authorization check.
 */
export const authorize = async (req: NextRequest, role: string = "AUTHOR") => {
    const token = req.headers.get('authorization')?.split("Bearer ")[0];
    if (!token) {
        return NextResponse.json({error: `Authorization token is missing`}, {status: 401});
    }

    const payload = await decodeJwtToken({token});
    if (payload && payload?.role !== role) {
        return NextResponse.json({error: `Only an Admin can perform this action`}, {status: 403});
    }
}
