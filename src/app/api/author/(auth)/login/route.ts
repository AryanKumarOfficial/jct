import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const POST = async (req: NextRequest) => {
    try {
        const {email, password}: { email: string, password: string } = await req.json();

        if (!email || !password)
            return NextResponse.json({error: 'Email or password not provided'}, {status: 400});

        const userExists = await prisma.author.findUnique({
            where: {email},
        })
        if (!userExists)
            return NextResponse.json({error: `User not found`}, {status: 404})

        const isVerified = await bcryptjs.compare(password, userExists.password);
        if (!isVerified)
            return NextResponse.json({error: `Invalid Credentials`}, {status: 401});
        const token = jwt.sign({
            id: userExists.id,
            email: userExists.email,
            phone: userExists.phone,
        }, process.env.JWT_SECRET as string, {expiresIn: "1h"});

        return NextResponse.json({
            message: `User successfully logged in`,
            token,
        }, {status: 200});

    } catch (err) {
        console.log(`Failed to Authenticate User: `, (err as Error).message);
        return NextResponse.json({error: `Internal Server Error`}, {status: 500})
    }
}