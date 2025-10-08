import bcryptjs from "bcryptjs";
import { type NextRequest, NextResponse } from "next/server";
import { sendNewEditorMail } from "@/lib/mail/methods/sendNewEditorMail";
import { prisma } from "@/lib/prisma";
import { authorize } from "@/utils/authorize";

/**
 * Handles the HTTP POST request for creating a new employee.
 *
 * This function performs the following steps:
 * - Authorizes the request to ensure the user has "ADMIN" permissions.
 * - Parses the incoming request body to extract required fields: `firstName`, `lastName`, `email`, `password`, `specialization`, and `role`.
 * - Validates that `firstName`, `email`, and `password` are provided.
 * - Checks if an employee with the provided email already exists, returning a conflict response if true.
 * - Hashes the password using bcryptjs.
 * - Creates a new employee record in the database within a transactional context.
 * - Logs the employee addition activity within the same transaction.
 * - Sends a notification email to the newly created employee with their credentials.
 * - Returns the newly created employee in the HTTP response.
 *
 * If any error occurs during the process, it responds with a 500 error and an appropriate error message.
 *
 * @param {NextRequest} req - The incoming Next.js API request object.
 * @returns {Promise<NextResponse>} The HTTP response containing the created employee data or an error message.
 */
export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    await authorize(req, "ADMIN");
    const { firstName, lastName, email, password, specialization, role } =
      await req.json();
    if (!firstName || !email || !password) {
      return NextResponse.json({
        error: `Email or Password is required along with First Name`,
      });
    }

    const empExists = await prisma.employee.findUnique({
      where: { email: email },
    });
    if (empExists) {
      return NextResponse.json(
        { error: `Email is already in use` },
        { status: 409 },
      );
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const newEmployee = await prisma.$transaction(async (tx) => {
      const newEmployee = await tx.employee.create({
        data: {
          firstName,
          lastName,
          email,
          password: hashedPassword,
          specialization,
          role,
        },
      });
      await tx.activityLog.create({
        data: {
          activity: "EMPLOYEE_ADDED",
          details: `${newEmployee.firstName} ${newEmployee.lastName} ${newEmployee.email} is added by Admin`,
          actorId: `my-name-is-aryan`,
        },
      });
      return newEmployee;
    });

    await sendNewEditorMail({
      firstName: newEmployee.firstName,
      email: newEmployee.email,
      password: password,
    });

    return NextResponse.json(newEmployee);
  } catch (_err) {
    return NextResponse.json(
      { error: `Failed to create the User` },
      { status: 500 },
    );
  }
};
