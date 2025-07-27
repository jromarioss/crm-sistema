-- CreateTable
CREATE TABLE `employee_missing` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_employee` INTEGER NOT NULL,
    `date_missing` DATETIME(3) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `employee_missing` ADD CONSTRAINT `employee_missing_id_employee_fkey` FOREIGN KEY (`id_employee`) REFERENCES `employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
