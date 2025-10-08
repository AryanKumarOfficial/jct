import { Prisma } from "@prisma/client";
import { type NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authorize } from "@/utils/authorize";

/**
 * Interface representing route parameters for navigation or routing purposes.
 *
 * This interface defines a structure for route parameters where the `params`
 * property encapsulates a promise that resolves to an object containing route-specific parameters.
 * For instance, it may include an identifier that represents a specific resource or entity.
 *
 * Properties:
 * - `params` is a Promise that resolves to an object with specific parameters, such as `id`.
 */
interface RouteParams {
  params: Promise<{ id: string }>;
}

/**
 * Handles HTTP PATCH requests to update an existing archive resource.
 *
 * This function requires the user to be authorized with the "ADMIN" role before proceeding.
 * It extracts the archive ID from the route parameters and validates the provided update fields
 * from the request body. The function updates the corresponding archive record in the database
 * using the provided data and returns the updated resource as a JSON response.
 *
 * If no archive ID is provided, or if the archive resource is not found in the database, or if
 * the request body does not contain at least one valid field to update, appropriate error
 * responses are returned. Unexpected errors are also handled and logged.
 *
 * @param {NextRequest} req - The HTTP request object.
 * @param {RouteParams} params - An object containing route parameters, including the `id` of the archive.
 * @returns {Promise<NextResponse>} A Promise that resolves to a `NextResponse` containing the result
 * of the operation, which could be the updated archive, an error message, or an appropriate HTTP status code.
 */
export const PATCH = async (
  req: NextRequest,
  { params }: RouteParams,
): Promise<NextResponse> => {
  await authorize(req, "ADMIN");
  const { id: archiveId } = await params;
  try {
    if (!archiveId) {
      return NextResponse.json(
        { error: "Archive ID not provided" },
        { status: 400 },
      );
    }
    const { volume, issue, month, year } = await req.json();
    if (!volume || !issue || !month || !year) {
      return NextResponse.json(
        { error: "At least one field is required to update" },
        { status: 400 },
      );
    }

    const updatedArchive = await prisma.archive.update({
      where: {
        id: archiveId,
      },
      data: {
        volume,
        issue,
        month,
        year,
      },
    });

    return NextResponse.json(updatedArchive);
  } catch (err: any) {
    if (
      err instanceof Prisma.PrismaClientKnownRequestError &&
      err.code === "P2025"
    ) {
      return NextResponse.json(
        { message: `Archive with ID ${archiveId} not found.` },
        { status: 404 },
      );
    }
    console.error(`Failed to update Archive`, err);
    return NextResponse.json(
      { error: `Failed to update Archive` },
      { status: 500 },
    );
  }
};

/**
 * Handles the DELETE request to remove an archive by its ID.
 *
 * This function checks for required authorization with "ADMIN" permissions and
 * attempts to delete the specified archive by its unique identifier. If the archive
 * ID is not provided, a bad request response is returned. If the archive with the given
 * ID does not exist, an appropriate error message is sent back. If an unexpected error
 * occurs during the deletion process, a server error response is returned.
 *
 * @async
 * @function DELETE
 * @param {NextRequest} req - The incoming request object.
 * @param {RouteParams} param1 - The route parameters containing the archive ID.
 * @throws {Error} If the deletion operation fails unexpectedly.
 * @returns {Promise<NextResponse>} The response object indicating the result of the operation.
 */
export const DELETE = async (
  req: NextRequest,
  { params }: RouteParams,
): Promise<NextResponse> => {
  await authorize(req, "ADMIN");
  const { id: archiveId } = await params;
  try {
    if (!archiveId) {
      return NextResponse.json(
        { error: "Archive ID not provided" },
        { status: 400 },
      );
    }

    const result = await prisma.archive.delete({
      where: {
        id: archiveId,
      },
    });

    return NextResponse.json(result);
  } catch (err) {
    if (
      err instanceof Prisma.PrismaClientKnownRequestError &&
      err.code === "P2025"
    ) {
      return NextResponse.json(
        { message: `Archive with ID ${archiveId} not found.` },
        { status: 400 },
      );
    }
    console.error(`Failed to delete Archive`, err);
    return NextResponse.json(
      { error: `Failed to delete Archive` },
      { status: 500 },
    );
  }
};
