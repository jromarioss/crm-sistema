/*
  Warnings:

  - You are about to alter the column `status` on the `positions` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `updated_at` to the `positions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `positions` ADD COLUMN `updated_at` DATETIME(3) NOT NULL,
    MODIFY `status` INTEGER NULL DEFAULT 1;

-- CreateTable
CREATE TABLE `sector` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
