import jwt from 'jsonwebtoken';

export interface CustomJwtPayload extends jwt.JwtPayload {
    id: string;
    email: string;
    role: string;
}

export interface DecodedToken {
    header: jwt.JwtHeader;
    payload: CustomJwtPayload;
    signature: string;
}

export const decodeJwtToken = ({token}: { token: string }) => {
    if (!token) {
        console.error("Token is missing");
        return null;
    }
    try {

        const decoded = jwt.decode(token, {
            json: true,
            complete: true
        });


        if (typeof decoded === "object" && decoded !== null) {
            return decoded as DecodedToken;
        }
        return null;
    } catch (e) {
        console.error(`Failed to decode Jwt: ${e}`);
        return null;
    }
}
