-- DropForeignKey
ALTER TABLE "public"."ActivityLog" DROP CONSTRAINT "ActivityLog_actorId_fkey";

-- AlterTable
ALTER TABLE "ActivityLog" ALTER COLUMN "actorId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ActivityLog" ADD CONSTRAINT "ActivityLog_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;
