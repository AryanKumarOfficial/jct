import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { type NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const POST = async (req: NextRequest): Promise<NextResponse> => {
    try {
        const body = await req.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and Password are required" },
                { status: 400 }
            );
        }

        // 1. Find the author
        const author = await prisma.author.findUnique({
            where: { email },
        });

        if (!author) {
            return NextResponse.json(
                { error: "Account not found. Please check your email." },
                { status: 404 }
            );
        }

        // 2. Verify Password
        // Note: Passwords are automatically generated during paper submission.
        // Authors receive them via email.
        const isVerified = await bcryptjs.compare(password, author.password);

        if (!isVerified) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 }
            );
        }

        // 3. Generate JWT Token
        // We explicitly assign the role "AUTHOR" since it's not in the database schema for authors
        const tokenPayload = {
            id: author.id,
            email: author.email,
            role: "AUTHOR",
        };

        const token = jwt.sign(
            tokenPayload,
            process.env.JWT_SECRET_KEY as string,
            { expiresIn: "7d" }
        );

        // 4. Create Response with Cookie
        const response = NextResponse.json({
            message: "Login successful",
            user: {
                id: author.id,
                email: author.email,
                firstName: author.firstName,
                lastName: author.lastName,
                role: "AUTHOR",
            },
        });

        response.cookies.set("authToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 7, // 7 Days
            path: "/",
        });

        return response;
    } catch (error) {
        console.error("Author Login Error:", error);
        return NextResponse.json(
            { error: "An unexpected error occurred during login" },
            { status: 500 }
        );
    }
};