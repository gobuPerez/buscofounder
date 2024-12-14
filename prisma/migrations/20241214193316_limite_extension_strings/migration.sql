/*
  Warnings:

  - You are about to alter the column `problem` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1024)`.
  - You are about to alter the column `vision` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1024)`.
  - You are about to alter the column `aboutMe` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1024)`.
  - You are about to alter the column `looking_for` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1024)`.
  - You are about to alter the column `offer` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1024)`.
  - You are about to alter the column `team` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1024)`.
  - You are about to alter the column `location` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1024)`.
  - You are about to alter the column `linkedin` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1024)`.
  - You are about to alter the column `instagram` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1024)`.
  - You are about to alter the column `twitter` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1024)`.
  - You are about to alter the column `profile_photo` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1024)`.
  - You are about to alter the column `contact_email` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1024)`.
  - You are about to alter the column `project_phase` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1024)`.
  - You are about to alter the column `publicName` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(64)`.

*/
-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "problem" SET DATA TYPE VARCHAR(1024),
ALTER COLUMN "vision" SET DATA TYPE VARCHAR(1024),
ALTER COLUMN "aboutMe" SET DATA TYPE VARCHAR(1024),
ALTER COLUMN "looking_for" SET DATA TYPE VARCHAR(1024),
ALTER COLUMN "offer" SET DATA TYPE VARCHAR(1024),
ALTER COLUMN "team" SET DATA TYPE VARCHAR(1024),
ALTER COLUMN "location" SET DATA TYPE VARCHAR(1024),
ALTER COLUMN "linkedin" SET DATA TYPE VARCHAR(1024),
ALTER COLUMN "instagram" SET DATA TYPE VARCHAR(1024),
ALTER COLUMN "twitter" SET DATA TYPE VARCHAR(1024),
ALTER COLUMN "profile_photo" SET DATA TYPE VARCHAR(1024),
ALTER COLUMN "contact_email" SET DATA TYPE VARCHAR(1024),
ALTER COLUMN "project_phase" SET DATA TYPE VARCHAR(1024),
ALTER COLUMN "publicName" SET DATA TYPE VARCHAR(64);
