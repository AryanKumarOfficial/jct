import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export const PATCH = async (req: NextRequest, { params }: RouteParams) => {
  // TODO: authenticate this route is only meant for the ADMIN employees rest of the users are inaccessible to it also extract their id to create activity LOG

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

export const DELETE = async (_req: NextRequest, { params }: RouteParams) => {
  // TODO: authenticate this route is only meant for the ADMIN employees rest of the users are inaccessible to it also extract their id to create activity LOG

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
