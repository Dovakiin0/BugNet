/*
  Warnings:

  - Added the required column `target_id` to the `Notification` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "target_id" INTEGER NOT NULL;
