import { type NextRequest, NextResponse } from "next/server";
import { decodeJwtToken } from "@/utils/token";

/**
 * Handles authorization for incoming requests by validating a provided JWT token and user's role.
 *
 * Checks if the user's role in the token matches the required role.
 *
 * @param {NextRequest} req - The HTTP request object.
 * @param {string} [role="AUTHOR"] - The required user role (e.g., "AUTHOR", "ADMIN", "EDITOR").
 * @returns {Promise<NextResponse | void>} Returns a NextResponse if unauthorized, otherwise returns void (undefined) to allow continuation.
 */
export const authorize = async (
    req: NextRequest,
    role: string = "AUTHOR"
): Promise<NextResponse | void> => {
    const token = req.cookies?.get?.("authToken")?.value ?? null;

    if (!token) {
        return NextResponse.json(
            { error: "Authorization token is missing" },
            { status: 401 }
        );
    }

    try {
        const payload = await decodeJwtToken({ token });

        if (!payload) {
            return NextResponse.json(
                { error: "Invalid or expired token" },
                { status: 401 }
            );
        }

        // Role-based Access Control (RBAC)
        // If the required role is ADMIN, we might strictly require ADMIN.
        // If the role is AUTHOR, we strictly require AUTHOR.
        if (payload.role !== role) {
            return NextResponse.json(
                { error: `Access forbidden: Requires ${role} privileges` },
                { status: 403 }
            );
        }

        // Authorization successful - function completes without returning a response
    } catch (e) {
        console.error("Authorization error:", e);
        return NextResponse.json(
            { error: "Internal Server Error during authorization" },
            { status: 500 }
        );
    }
};