/*
  Warnings:

  - Added the required column `description` to the `certificate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `certificate` ADD COLUMN `description` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `employee_info` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_employee` INTEGER NOT NULL,
    `id_position` INTEGER NOT NULL,
    `wage` DECIMAL(10, 2) NOT NULL,
    `meal_voucher` DECIMAL(10, 2) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `employee_info` ADD CONSTRAINT `employee_info_id_employee_fkey` FOREIGN KEY (`id_employee`) REFERENCES `employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employee_info` ADD CONSTRAINT `employee_info_id_position_fkey` FOREIGN KEY (`id_position`) REFERENCES `positions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
