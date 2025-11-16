import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { type NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * Handles the POST request to authenticate a user based on their email and password.
 *
 * @param {NextRequest} req - The incoming HTTP request object from Next.js containing authentication details.
 * @returns {Promise<NextResponse>} A response object containing either a signed JWT token and user details, or an error message with an appropriate HTTP status code.
 *
 * The function performs the following steps:
 * 1. Extracts the email and password from the JSON body of the request.
 * 2. Validates that both email and password are provided.
 * 3. Checks if a user with the given email exists in the database.
 * 4. Verifies the provided password against the stored hashed password using bcrypt.js.
 * 5. Generates a JWT token for the authenticated user upon successful validation.
 * 6. Returns an error response with the appropriate status code and message in case of invalid credentials, missing fields, or other errors.
 */
export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json(
        { error: `Email or Password is required` },
        { status: 400 },
      );
    }
    const userExists = await prisma.employee.findUnique({ where: { email } });
    if (!userExists) {
      return NextResponse.json(
        { error: `User Not found` },
        { status: 404 },
      );
    }

    const isVerified = await bcryptjs.compare(password, userExists.password);
    if (!isVerified) {
      return NextResponse.json(
        { error: `Invalid Credentials` },
        { status: 401 },
      );
    }
    const token = jwt.sign(
      {
        id: userExists.id,
        email: userExists.email,
      },
      process.env.JWT_SECRET_KEY as string,
      { expiresIn: "1h" },
    );

    return NextResponse.json({
      token,
      email: userExists.email,
      id: userExists.id,
      role: userExists.role,
    });
  } catch (_e) {
    return NextResponse.json({ error: `Failed to login` }, { status: 500 });
  }
};
