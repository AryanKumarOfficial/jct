import { type NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authorize } from "@/utils/authorize";

/**
 * Asynchronous handler function for the POST HTTP method.
 * This function is responsible for creating a new archive in the database. It validates the incoming request, checks for
 * duplicate records, and inserts a new archive entry into the database if all validations pass.
 *
 * @param {NextRequest} req - The incoming HTTP request object provided by Next.js.
 * @returns {Promise<NextResponse>} A JSON response object containing the created archive
 * entry or an error message with an appropriate HTTP status code.
 *
 * Error Cases:
 * - Returns a 400 status with an error message if required fields (`volume`, `issue`, `month`, `year`) are missing.
 * - Returns a 400 status with an error message if a record with the same `volume`, `issue`, and `year` already exists.
 * - Returns a 401 status if the request is unauthorized.
 * - Returns a 500 status with an error message for any internal server error.
 */
export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    await authorize(req, "ADMIN");
    const { volume, issue, month, year } = await req.json();
    if (!volume || !issue || !month || !year) {
      return NextResponse.json({ error: "Data Provided" }, { status: 400 });
    }

    const archiveExists = await prisma.archive.findFirst({
      where: {
        year,
        issue,
        volume,
      },
    });

    if (archiveExists)
      return NextResponse.json(
        { error: `This Issue already Exits` },
        { status: 400 },
      );

    const newArchive = await prisma.archive.create({
      data: {
        volume,
        issue,
        month,
        year,
      },
    });

    return NextResponse.json(newArchive, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
};
