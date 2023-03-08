-- DropForeignKey
ALTER TABLE "Board" DROP CONSTRAINT "Board_kanbanId_fkey";

-- DropForeignKey
ALTER TABLE "Kanban" DROP CONSTRAINT "Kanban_projectId_fkey";

-- AddForeignKey
ALTER TABLE "Kanban" ADD CONSTRAINT "Kanban_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Board" ADD CONSTRAINT "Board_kanbanId_fkey" FOREIGN KEY ("kanbanId") REFERENCES "Kanban"("id") ON DELETE CASCADE ON UPDATE CASCADE;
