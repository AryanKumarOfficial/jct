/*
  Warnings:

  - The values [DRAFT] on the enum `PaperStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PaperStatus_new" AS ENUM ('SUBMITTED', 'UNDER_REVIEW', 'REVIEWED', 'REJECTED', 'PUBLISHED');
ALTER TABLE "public"."status" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "status" ALTER COLUMN "status" TYPE "PaperStatus_new" USING ("status"::text::"PaperStatus_new");
ALTER TYPE "PaperStatus" RENAME TO "PaperStatus_old";
ALTER TYPE "PaperStatus_new" RENAME TO "PaperStatus";
DROP TYPE "public"."PaperStatus_old";
ALTER TABLE "status" ALTER COLUMN "status" SET DEFAULT 'SUBMITTED';
COMMIT;

-- AlterTable
ALTER TABLE "IdCounter" ALTER COLUMN "count" SET DEFAULT 100;
