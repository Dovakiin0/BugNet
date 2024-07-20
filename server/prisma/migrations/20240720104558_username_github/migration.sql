/*
  Warnings:

  - Added the required column `userName` to the `Github` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Github" ADD COLUMN     "userName" TEXT NOT NULL;
