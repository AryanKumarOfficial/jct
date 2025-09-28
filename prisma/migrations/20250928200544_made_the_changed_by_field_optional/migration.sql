-- DropForeignKey
ALTER TABLE "public"."status" DROP CONSTRAINT "status_changedById_fkey";

-- AlterTable
ALTER TABLE "public"."status" ALTER COLUMN "changedById" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."status" ADD CONSTRAINT "status_changedById_fkey" FOREIGN KEY ("changedById") REFERENCES "public"."employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;
