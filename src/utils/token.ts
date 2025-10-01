import jwt from 'jsonwebtoken';

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
