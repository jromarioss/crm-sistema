-- AlterTable
ALTER TABLE `employee_certificate` MODIFY `status` INTEGER NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `employee_info` MODIFY `status` INTEGER NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `employee_missing` MODIFY `status` INTEGER NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `employee_warning` MODIFY `status` INTEGER NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `employees` MODIFY `status` INTEGER NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `sectors` MODIFY `status` INTEGER NULL DEFAULT 1;

-- CreateTable
CREATE TABLE `employee_sector` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_sector` INTEGER NOT NULL,
    `id_employee` INTEGER NOT NULL,
    `status` INTEGER NULL DEFAULT 1,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `productions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_sector` INTEGER NOT NULL,
    `id_employee` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `amount` INTEGER NOT NULL,
    `status` INTEGER NULL DEFAULT 1,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `amount` INTEGER NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `status` INTEGER NULL DEFAULT 1,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `buyers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_employee` INTEGER NOT NULL,
    `id_product` INTEGER NOT NULL,
    `id_supplier` INTEGER NOT NULL,
    `month_reference` VARCHAR(191) NOT NULL,
    `value` DECIMAL(10, 2) NOT NULL,
    `amount` INTEGER NOT NULL,
    `total_value` DECIMAL(10, 2) NOT NULL,
    `status` INTEGER NULL DEFAULT 1,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pay_stub` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_employee` INTEGER NOT NULL,
    `month_reference` VARCHAR(191) NOT NULL,
    `wage` DECIMAL(10, 2) NOT NULL,
    `descounts` DECIMAL(10, 2) NOT NULL,
    `bonus` DECIMAL(10, 2) NOT NULL,
    `total_wage` DECIMAL(65, 30) NOT NULL,
    `status` INTEGER NULL DEFAULT 1,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `suppliers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `cnpj` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `status` INTEGER NULL DEFAULT 1,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `suppliers_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `employee_sector` ADD CONSTRAINT `employee_sector_id_sector_fkey` FOREIGN KEY (`id_sector`) REFERENCES `sectors`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employee_sector` ADD CONSTRAINT `employee_sector_id_employee_fkey` FOREIGN KEY (`id_employee`) REFERENCES `employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `productions` ADD CONSTRAINT `productions_id_sector_fkey` FOREIGN KEY (`id_sector`) REFERENCES `sectors`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `productions` ADD CONSTRAINT `productions_id_employee_fkey` FOREIGN KEY (`id_employee`) REFERENCES `employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `buyers` ADD CONSTRAINT `buyers_id_employee_fkey` FOREIGN KEY (`id_employee`) REFERENCES `employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `buyers` ADD CONSTRAINT `buyers_id_product_fkey` FOREIGN KEY (`id_product`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `buyers` ADD CONSTRAINT `buyers_id_supplier_fkey` FOREIGN KEY (`id_supplier`) REFERENCES `suppliers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pay_stub` ADD CONSTRAINT `pay_stub_id_employee_fkey` FOREIGN KEY (`id_employee`) REFERENCES `employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
