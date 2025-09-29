/*
  Warnings:

  - A unique constraint covering the columns `[submissionId]` on the table `paper` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `submissionId` to the `paper` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."paper" ADD COLUMN     "submissionId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."IdCounter" (
    "id" TEXT NOT NULL DEFAULT 'paperCounter',
    "year" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,

    CONSTRAINT "IdCounter_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "IdCounter_id_key" ON "public"."IdCounter"("id");

-- CreateIndex
CREATE UNIQUE INDEX "paper_submissionId_key" ON "public"."paper"("submissionId");
