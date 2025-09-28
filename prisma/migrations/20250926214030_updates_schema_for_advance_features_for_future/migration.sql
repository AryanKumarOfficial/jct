/*
  Warnings:

  - You are about to drop the column `paperId` on the `author` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `author` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `admin` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "public"."ActivityType" AS ENUM ('PAPER_SUBMITTED', 'STATUS_CHANGED', 'COMMENT_ADDED', 'PAYMENT_SUCCESS', 'PAPER_PUBLISHED', 'EDITOR_ASSIGNED');

-- CreateEnum
CREATE TYPE "public"."WalletTransactionType" AS ENUM ('CREDIT', 'DEBIT');

-- AlterTable
ALTER TABLE "public"."author" DROP COLUMN "paperId";

-- AlterTable
ALTER TABLE "public"."employee" ADD COLUMN     "walletBalance" DOUBLE PRECISION NOT NULL DEFAULT 0.0;

-- AlterTable
ALTER TABLE "public"."status" ADD COLUMN     "isApproved" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "public"."ActivityLog" (
    "id" TEXT NOT NULL,
    "paperId" TEXT NOT NULL,
    "actorId" TEXT NOT NULL,
    "activity" "public"."ActivityType" NOT NULL,
    "details" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ActivityLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."WalletTransaction" (
    "id" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "type" "public"."WalletTransactionType" NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "notes" TEXT,
    "relatedPaperId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WalletTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ActivityLog_paperId_idx" ON "public"."ActivityLog"("paperId");

-- CreateIndex
CREATE INDEX "ActivityLog_actorId_idx" ON "public"."ActivityLog"("actorId");

-- CreateIndex
CREATE INDEX "WalletTransaction_employeeId_idx" ON "public"."WalletTransaction"("employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "author_email_key" ON "public"."author"("email");

-- CreateIndex
CREATE UNIQUE INDEX "employee_email_key" ON "public"."employee"("email");

-- AddForeignKey
ALTER TABLE "public"."ActivityLog" ADD CONSTRAINT "ActivityLog_paperId_fkey" FOREIGN KEY ("paperId") REFERENCES "public"."paper"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ActivityLog" ADD CONSTRAINT "ActivityLog_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "public"."employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."WalletTransaction" ADD CONSTRAINT "WalletTransaction_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."WalletTransaction" ADD CONSTRAINT "WalletTransaction_relatedPaperId_fkey" FOREIGN KEY ("relatedPaperId") REFERENCES "public"."paper"("id") ON DELETE SET NULL ON UPDATE CASCADE;
