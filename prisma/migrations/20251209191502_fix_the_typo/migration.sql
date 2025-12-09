/*
  Warnings:

  - You are about to drop the column `abstact` on the `paper` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "paper" DROP COLUMN "abstact",
ADD COLUMN     "abstract" TEXT;
