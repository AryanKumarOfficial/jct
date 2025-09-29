/*
  Warnings:

  - You are about to drop the column `specailization` on the `employee` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."employee" DROP COLUMN "specailization",
ADD COLUMN     "specialization" TEXT;
