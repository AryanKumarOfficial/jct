/*
  Warnings:

  - You are about to drop the column `employeeId` on the `paper` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."paper" DROP CONSTRAINT "paper_employeeId_fkey";

-- AlterTable
ALTER TABLE "paper" DROP COLUMN "employeeId",
ADD COLUMN     "editorId" TEXT;

-- AddForeignKey
ALTER TABLE "paper" ADD CONSTRAINT "paper_editorId_fkey" FOREIGN KEY ("editorId") REFERENCES "employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;
