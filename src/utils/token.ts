import jwt from 'jsonwebtoken';
import {NextRequest} from "next/server";

/**
 * Interface representing a custom JWT payload that extends the default JwtPayload.
 * This interface includes additional fields specific to the application's requirements.
 *
 * Fields:
 * - id: The unique identifier for the user.
 * - email: The email address of the user.
 * - role: The role assigned to the user within the application.
 */
export interface CustomJwtPayload extends jwt.JwtPayload {
    id: string;
    email: string;
    role: string;
}

/**
 * Decodes a given JSON Web Token (JWT) and verifies its validity using a secret key.
 *
 * @param {Object} params - The parameters containing the token to decode.
 * @param {string} params.token - The JWT to be decoded.
 * @returns {Promise<CustomJwtPayload | null>} A promise that resolves to the decoded payload if the token is valid, or null if it is invalid or an error occurs.
 * @throws Will log an error to the console if the decoding process fails or the token is missing.
 */
export const decodeJwtToken = async ({token}: { token: string }) => {
    if (!token) {
        console.error("Token is missing");
        return null;
    }
    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);


        if (typeof decoded === "object" && decoded !== null) {
            return decoded as CustomJwtPayload;
        }
        return null;
    } catch (e) {
        console.error(`Failed to decode Jwt: ${e}`);
        return null;
    }
}

/**
 * Represents the result of a token decoding or validation operation.
 *
 * This type indicates whether the operation was successful and provides either the decoded token data
 * or an error message.
 *
 * A successful result includes the decoded token payload of type `CustomJwtPayload`.
 * An unsuccessful result includes an error message that describes the reason for failure.
 */
type TokenResult =
    | { success: true; data: CustomJwtPayload }  // replace `any` with your decoded token type
    | { success: false; error: string };

/**
 * Extracts and validates the token from the authorization header of the incoming request.
 * If the token is valid, returns the decoded token data. Otherwise, returns an error.
 *
 * @param {NextRequest} req - The incoming HTTP request object containing headers and potentially an authorization token.
 * @returns {Promise<TokenResult>} A promise that resolves to an object indicating whether the token validation was successful.
 * If successful, includes the decoded token data; otherwise, includes an error message.
 */
export const getTokenData = async (req: NextRequest): Promise<TokenResult> => {
    const authHeader = req.headers.get("authorization");

    if (!authHeader?.startsWith("Bearer ")) {
        return {success: false, error: "Authorization token is missing or invalid"};
    }

    const token = authHeader.replace(/^Bearer\s+/i, "").trim();

    if (!token) {
        return {success: false, error: "Token is missing"};
    }

    const decoded = (await decodeJwtToken({token}));
    if (!decoded) {
        return {success: false, error: "Invalid or expired token"};
    }

    return {success: true, data: decoded};
}
