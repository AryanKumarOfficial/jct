import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const POST = async (req: NextRequest) => {
    try {
        const {email, password} = await req.json();
        if (!email || !password) {
            return NextResponse.json({error: `Email or Password is required`}, {status: 400});
        }
        const userExists = await prisma.employee.findUnique({where: {email}});
        if (!userExists) {
            return NextResponse.json({error: `User already exists`}, {status: 404});
        }

        const isVerified = await bcryptjs.compare(password, userExists.password);
        if (!isVerified) {
            return NextResponse.json({error: `Invalid Credentials`}, {status: 401});
        }
        const token = jwt.sign({
            id: userExists.id,
            email: userExists.email
        }, process.env.JWT_SECRET_KEY as string, {expiresIn: "1h"});

        return NextResponse.json({token, email: userExists.email, id: userExists.id, role: userExists.role});

    } catch (_e) {
        return NextResponse.json({error: `Failed to login`}, {status: 500});
    }
}