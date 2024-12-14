/*
  Warnings:

  - You are about to drop the column `email` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `phase` on the `Post` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[publicName]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `publicName` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "email",
DROP COLUMN "phase",
ADD COLUMN     "contact_email" TEXT,
ADD COLUMN     "project_phase" TEXT,
ADD COLUMN     "publicName" TEXT NOT NULL,
ALTER COLUMN "problem" DROP NOT NULL,
ALTER COLUMN "vision" DROP NOT NULL,
ALTER COLUMN "aboutMe" DROP NOT NULL,
ALTER COLUMN "looking_for" DROP NOT NULL,
ALTER COLUMN "offer" DROP NOT NULL,
ALTER COLUMN "team" DROP NOT NULL,
ALTER COLUMN "location" DROP NOT NULL,
ALTER COLUMN "linkedin" DROP NOT NULL,
ALTER COLUMN "instagram" DROP NOT NULL,
ALTER COLUMN "twitter" DROP NOT NULL,
ALTER COLUMN "profile_photo" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Post_publicName_key" ON "Post"("publicName");
