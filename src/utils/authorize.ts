import {type NextRequest, NextResponse} from "next/server";
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
export const authorize = async (req: NextRequest, role: string = "AUTHOR"): Promise<NextResponse | void> => {
    const token = req.cookies?.get?.("authToken")?.value ?? null;
    if (!token) {
        return NextResponse.json(
            {error: `Authorization token is missing at middleware`},
            {status: 401},
        );
    }

    let payload;
    try {

        payload = await decodeJwtToken({token});
    } catch (e) {
        return NextResponse.json({error: "Invalid or expired token"}, {status: 401});
    }
    if (!payload || payload.role !== role) {
        console.log(`payload:`, payload)
        console.log(`User role: ${payload?.role} does not match required role: ${role}`)
        return NextResponse.json({error: `Only a ${role} can perform this action`}, {status: 403});
    }


};
