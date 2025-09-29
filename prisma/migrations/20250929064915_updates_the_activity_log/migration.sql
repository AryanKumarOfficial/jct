-- AlterEnum
ALTER TYPE "public"."ActivityType" ADD VALUE 'EMPLOYEE_ADDED';

-- DropForeignKey
ALTER TABLE "public"."ActivityLog" DROP CONSTRAINT "ActivityLog_paperId_fkey";

-- AlterTable
ALTER TABLE "public"."ActivityLog" ALTER COLUMN "paperId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."ActivityLog" ADD CONSTRAINT "ActivityLog_paperId_fkey" FOREIGN KEY ("paperId") REFERENCES "public"."paper"("id") ON DELETE SET NULL ON UPDATE CASCADE;
