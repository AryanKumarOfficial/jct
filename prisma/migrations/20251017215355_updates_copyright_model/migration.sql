/*
  Warnings:

  - You are about to drop the column `signedIn` on the `Copyright` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Copyright` table without a default value. This is not possible if the table is not empty.
  - Made the column `pdfKey` on table `Copyright` required. This step will fail if there are existing NULL values in that column.
  - Made the column `pdfUrl` on table `Copyright` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Copyright" DROP COLUMN "signedIn",
ADD COLUMN     "signedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "pdfKey" SET NOT NULL,
ALTER COLUMN "pdfUrl" SET NOT NULL;
