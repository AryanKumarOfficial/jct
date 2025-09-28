import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const POST = async (req: NextRequest) => {
  try {
    const { volume, issue, month, year } = await req.json();
    if (!volume || !issue || !month || !year) {
      return NextResponse.json({ error: "Data Provided" }, { status: 400 });
    }

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
