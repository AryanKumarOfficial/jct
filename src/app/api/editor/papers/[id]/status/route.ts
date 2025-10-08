import { type NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authorize } from "@/utils/authorize";
import { getTokenData } from "@/utils/token";

/**
 * Handles the POST request for updating the status of a paper in the system.
 *
 * @param {NextRequest} req - The incoming HTTP request object from Next.js.
 * @param {Object} context - The context containing route parameters.
 * @param {Promise<{ id: string }>} context.params - A promise resolving to an object containing the `id` of the paper to be updated.
 *
 * @returns {Promise<NextResponse>} A JSON response with the status of the operation:
 * - On success, returns HTTP status 201 with a success message.
 * - On failure, may return one of the following:
 *   - HTTP status 401 with an error message if the provided token is invalid.
 *   - HTTP status 400 with an error message if the paper ID is missing.
 *   - HTTP status 500 with an error message indicating that the status update has failed.
 *
 * @throws Logs an error to the console if the status update operation fails unexpectedly.
 *
 * The function performs the following actions:
 * - Authorizes the user by validating their token and role ("EDITOR").
 * - Decodes token data to retrieve the user details.
 * - Checks if the token is valid and contains necessary information.
 * - Extracts the paper ID from the request parameters and verifies its presence.
 * - Reads the incoming JSON payload for the new status and comments of the paper.
 * - Updates the paper's status in the database with details of the editor making the change.
 */
export const POST = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
): Promise<NextResponse> => {
  try {
    await authorize(req, "EDITOR");
    const decodedData = await getTokenData(req);
    if (!decodedData.success) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }
    const { id } = await params;
    if (!id)
      return NextResponse.json(
        { error: "Paper ID not found" },
        { status: 400 },
      );

    const { status, comments } = await req.json();
    await prisma.status.create({
      data: {
        status,
        paperId: id,
        changedById: decodedData.data.id,
        comments: comments,
      },
    });
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error(`Failed to update the status`, err);
    return NextResponse.json(
      { error: `Failed to update the status` },
      { status: 500 },
    );
  }
};

/**
 * Handles the PATCH HTTP request to update a status record in the database.
 *
 * @async
 * @function PATCH
 * @param {NextRequest} req - The incoming HTTP request object.
 * @param {Object} param1 - Contains route parameters.
 * @param {Promise<{ id: string }>} param1.params - A promise that resolves to an object containing the `id` of the status to update.
 * @returns {Promise<NextResponse>} The HTTP response object.
 *
 * @description
 * This function performs the following:
 * - Authorizes the user based on their role.
 * - Extracts the `id` parameter and token data from the request.
 * - Validates the token and ensures the `id` is provided.
 * - Parses the request body to extract `comments` and `statusId`.
 * - Updates the specified status in the database by appending new comments.
 * - Returns the updated status as a JSON response.
 * - Handles and logs errors, returning appropriate error responses.
 */
export const PATCH = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
): Promise<NextResponse> => {
  try {
    await authorize(req, "EDITOR");
    const { id } = await params;
    const decodedData = await getTokenData(req);
    if (!decodedData.success) {
      return NextResponse.json({ error: "Token malformed" }, { status: 401 });
    }
    if (!id) {
      return NextResponse.json(
        { error: "Paper ID not found" },
        { status: 401 },
      );
    }

    const { comments, statusId } = await req.json();
    const updatedStatus = await prisma.status.update({
      where: {
        id: statusId,
      },
      data: {
        comments: {
          push: comments,
        },
      },
    });

    return NextResponse.json(updatedStatus);
  } catch (err) {
    console.log(`Failed to update the status`, err);
    return NextResponse.json({
      error: `Failed to update the status`,
      status: 500,
    });
  }
};

/**
 * Handles a GET request to retrieve status data for a specified paper.
 *
 * This function performs authorization to ensure the requester has "EDITOR" permissions.
 * It then extracts the `id` parameter from the request, validates its presence, and fetches
 * associated statuses from the database using Prisma. If the `id` is not provided or if an
 * error occurs during execution, the function returns appropriate error responses.
 *
 * @param {NextRequest} req - The request object, which contains the HTTP request details.
 * @param {Object} context - Context object containing route parameters.
 * @param {Promise<{id: string}>} context.params - A promise resolving to an object that contains the `id` parameter of the paper.
 * @returns {Promise<NextResponse>} A response object with the retrieved statuses or an error message.
 */
export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
): Promise<NextResponse> => {
  try {
    await authorize(req, "EDITOR");
    const { id } = await params;
    if (!id) {
      return NextResponse.json(
        { error: "Paper not found provided" },
        { status: 400 },
      );
    }
    const statuses = await prisma.status.findMany({
      where: { paperId: id },
      include: {
        paper: true,
      },
    });

    return NextResponse.json(statuses);
  } catch (err) {
    console.error(`Failed to get the status`, err);
    return NextResponse.json({
      error: `Failed to get the status`,
      status: 500,
    });
  }
};
