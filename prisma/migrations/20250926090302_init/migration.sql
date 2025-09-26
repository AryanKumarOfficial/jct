-- CreateEnum
CREATE TYPE "public"."EmployeeRole" AS ENUM ('EDITOR', 'ADMIN', 'FRESHER');

-- CreateEnum
CREATE TYPE "public"."PaperStatus" AS ENUM ('DRAFT', 'SUBMITTED', 'REVIEWED', 'PUBLISHED', 'REJECTED');

-- CreateEnum
CREATE TYPE "public"."paymentStatus" AS ENUM ('FAILED', 'PENDING', 'SUCCESS');

-- CreateTable
CREATE TABLE "public"."paper" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "keywords" TEXT[] DEFAULT ARRAY['cse']::TEXT[],
    "manuscriptId" TEXT,
    "manuscriptUrl" TEXT,
    "publishId" TEXT,
    "publishUrl" TEXT,
    "archiveId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "paper_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."author" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "organisation" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "paperId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."status" (
    "id" TEXT NOT NULL,
    "status" "public"."PaperStatus" NOT NULL DEFAULT 'SUBMITTED',
    "paperId" TEXT NOT NULL,
    "changedById" TEXT NOT NULL,
    "comments" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."employee" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "public"."EmployeeRole" NOT NULL DEFAULT 'FRESHER',
    "specailization" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."archive" (
    "id" TEXT NOT NULL,
    "volume" INTEGER NOT NULL,
    "issue" INTEGER NOT NULL,
    "month" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "archive_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."transaction" (
    "id" TEXT NOT NULL,
    "razorpayOrderId" TEXT NOT NULL,
    "razorpayPaymentId" TEXT,
    "amount" INTEGER NOT NULL,
    "status" "public"."paymentStatus" NOT NULL DEFAULT 'PENDING',
    "paperId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_authorTopaper" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_authorTopaper_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "paper_id_key" ON "public"."paper"("id");

-- CreateIndex
CREATE UNIQUE INDEX "author_id_key" ON "public"."author"("id");

-- CreateIndex
CREATE UNIQUE INDEX "status_id_key" ON "public"."status"("id");

-- CreateIndex
CREATE UNIQUE INDEX "employee_id_key" ON "public"."employee"("id");

-- CreateIndex
CREATE UNIQUE INDEX "archive_id_key" ON "public"."archive"("id");

-- CreateIndex
CREATE UNIQUE INDEX "transaction_id_key" ON "public"."transaction"("id");

-- CreateIndex
CREATE UNIQUE INDEX "transaction_razorpayOrderId_key" ON "public"."transaction"("razorpayOrderId");

-- CreateIndex
CREATE INDEX "_authorTopaper_B_index" ON "public"."_authorTopaper"("B");

-- AddForeignKey
ALTER TABLE "public"."paper" ADD CONSTRAINT "paper_archiveId_fkey" FOREIGN KEY ("archiveId") REFERENCES "public"."archive"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."status" ADD CONSTRAINT "status_paperId_fkey" FOREIGN KEY ("paperId") REFERENCES "public"."paper"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."status" ADD CONSTRAINT "status_changedById_fkey" FOREIGN KEY ("changedById") REFERENCES "public"."employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."employee" ADD CONSTRAINT "employee_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "public"."employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."transaction" ADD CONSTRAINT "transaction_paperId_fkey" FOREIGN KEY ("paperId") REFERENCES "public"."paper"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."transaction" ADD CONSTRAINT "transaction_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_authorTopaper" ADD CONSTRAINT "_authorTopaper_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."author"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_authorTopaper" ADD CONSTRAINT "_authorTopaper_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."paper"("id") ON DELETE CASCADE ON UPDATE CASCADE;
