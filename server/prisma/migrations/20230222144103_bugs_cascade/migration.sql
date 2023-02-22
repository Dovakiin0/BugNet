-- DropForeignKey
ALTER TABLE "Assignee" DROP CONSTRAINT "Assignee_bugId_fkey";

-- DropForeignKey
ALTER TABLE "Assignee" DROP CONSTRAINT "Assignee_memberId_fkey";

-- AddForeignKey
ALTER TABLE "Assignee" ADD CONSTRAINT "Assignee_bugId_fkey" FOREIGN KEY ("bugId") REFERENCES "Bug"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assignee" ADD CONSTRAINT "Assignee_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE CASCADE ON UPDATE CASCADE;
