/*
  Warnings:

  - Added the required column `image` to the `categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `locations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "events" ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "locations" ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "image" TEXT NOT NULL;
