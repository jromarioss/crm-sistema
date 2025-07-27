/*
  Warnings:

  - You are about to drop the `certificate` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `certificate` DROP FOREIGN KEY `certificate_id_employee_fkey`;

-- DropTable
DROP TABLE `certificate`;

-- CreateTable
CREATE TABLE `employee_warning` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_employee` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `employee_certificate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_employee` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `start_date` DATETIME(3) NOT NULL,
    `end_date` DATETIME(3) NOT NULL,
    `file` VARCHAR(191) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `employee_warning` ADD CONSTRAINT `employee_warning_id_employee_fkey` FOREIGN KEY (`id_employee`) REFERENCES `employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employee_certificate` ADD CONSTRAINT `employee_certificate_id_employee_fkey` FOREIGN KEY (`id_employee`) REFERENCES `employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
