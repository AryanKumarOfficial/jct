-- CreateEnum
CREATE TYPE "CopyrightStatus" AS ENUM ('PENDING', 'SIGNED');

-- CreateTable
CREATE TABLE "Copyright" (
    "id" TEXT NOT NULL,
    "copyrightStatus" "CopyrightStatus" NOT NULL DEFAULT 'PENDING',
    "pdfKey" TEXT,
    "pdfUrl" TEXT,
    "signedIn" TIMESTAMP(3),
    "paperId" TEXT NOT NULL,

    CONSTRAINT "Copyright_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Copyright_id_key" ON "Copyright"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Copyright_paperId_key" ON "Copyright"("paperId");

-- AddForeignKey
ALTER TABLE "Copyright" ADD CONSTRAINT "Copyright_paperId_fkey" FOREIGN KEY ("paperId") REFERENCES "paper"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
