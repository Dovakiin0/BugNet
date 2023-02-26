/*
  Warnings:

  - A unique constraint covering the columns `[githubId]` on the table `Github` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Github" ALTER COLUMN "githubId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "password" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Github_githubId_key" ON "Github"("githubId");
