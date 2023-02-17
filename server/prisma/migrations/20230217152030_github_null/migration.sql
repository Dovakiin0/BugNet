-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_githubId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "githubId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_githubId_fkey" FOREIGN KEY ("githubId") REFERENCES "Github"("id") ON DELETE SET NULL ON UPDATE CASCADE;
