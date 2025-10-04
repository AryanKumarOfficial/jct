import jwt from 'jsonwebtoken';
import {NextRequest} from "next/server";

export interface CustomJwtPayload extends jwt.JwtPayload {
    id: string;
    email: string;
    role: string;
}

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

type TokenResult =
    | { success: true; data: CustomJwtPayload }  // replace `any` with your decoded token type
    | { success: false; error: string };

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
