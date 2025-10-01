-- DropForeignKey
ALTER TABLE "public"."status" DROP CONSTRAINT "status_paperId_fkey";

-- AddForeignKey
ALTER TABLE "status" ADD CONSTRAINT "status_paperId_fkey" FOREIGN KEY ("paperId") REFERENCES "paper"("submissionId") ON DELETE RESTRICT ON UPDATE CASCADE;
