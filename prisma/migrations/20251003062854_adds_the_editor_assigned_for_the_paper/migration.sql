-- AlterTable
ALTER TABLE "paper" ADD COLUMN     "employeeId" TEXT;

-- AddForeignKey
ALTER TABLE "paper" ADD CONSTRAINT "paper_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;
