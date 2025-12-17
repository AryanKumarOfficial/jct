-- CreateEnum
CREATE TYPE "EmailStatus" AS ENUM ('PENDING', 'SENDING', 'SENT', 'FAILED');

-- AlterTable
ALTER TABLE "ActivityLog" ADD COLUMN     "jobRunId" TEXT;

-- CreateTable
CREATE TABLE "SubmissionEmailLog" (
    "id" TEXT NOT NULL,
    "submissionId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "status" "EmailStatus" NOT NULL DEFAULT 'PENDING',
    "attemptCount" INTEGER NOT NULL DEFAULT 0,
    "lastAttempt" TIMESTAMP(3),
    "sentAt" TIMESTAMP(3),
    "error" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SubmissionEmailLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobRun" (
    "id" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    "submissionId" TEXT,
    "paperId" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "lastError" TEXT,
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JobRun_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "SubmissionEmailLog_submissionId_idx" ON "SubmissionEmailLog"("submissionId");

-- CreateIndex
CREATE UNIQUE INDEX "SubmissionEmailLog_submissionId_email_key" ON "SubmissionEmailLog"("submissionId", "email");

-- CreateIndex
CREATE UNIQUE INDEX "JobRun_jobId_key" ON "JobRun"("jobId");

-- CreateIndex
CREATE INDEX "JobRun_submissionId_idx" ON "JobRun"("submissionId");

-- CreateIndex
CREATE INDEX "JobRun_paperId_idx" ON "JobRun"("paperId");

-- CreateIndex
CREATE INDEX "ActivityLog_jobRunId_idx" ON "ActivityLog"("jobRunId");

-- AddForeignKey
ALTER TABLE "ActivityLog" ADD CONSTRAINT "ActivityLog_jobRunId_fkey" FOREIGN KEY ("jobRunId") REFERENCES "JobRun"("id") ON DELETE SET NULL ON UPDATE CASCADE;
