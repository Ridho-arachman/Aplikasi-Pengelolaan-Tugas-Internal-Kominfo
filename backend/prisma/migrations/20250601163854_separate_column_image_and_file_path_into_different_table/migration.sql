/*
  Warnings:

  - You are about to drop the column `file_path` on the `laporan` table. All the data in the column will be lost.
  - You are about to drop the column `file_path` on the `pengumpulantugas` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `pengumpulantugas` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `laporan` DROP COLUMN `file_path`;

-- AlterTable
ALTER TABLE `pengumpulantugas` DROP COLUMN `file_path`,
    DROP COLUMN `image`;

-- CreateTable
CREATE TABLE `LaporanFile` (
    `kd_file` VARCHAR(191) NOT NULL,
    `kd_laporan` VARCHAR(191) NOT NULL,
    `file_path` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `LaporanFile_kd_laporan_idx`(`kd_laporan`),
    PRIMARY KEY (`kd_file`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PengumpulanTugasFile` (
    `kd_file` VARCHAR(191) NOT NULL,
    `kd_pengumpulan_tugas` VARCHAR(191) NOT NULL,
    `file_path` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `PengumpulanTugasFile_kd_pengumpulan_tugas_idx`(`kd_pengumpulan_tugas`),
    PRIMARY KEY (`kd_file`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PengumpulanTugasImage` (
    `kd_image` VARCHAR(191) NOT NULL,
    `kd_pengumpulan_tugas` VARCHAR(191) NOT NULL,
    `image_path` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `PengumpulanTugasImage_kd_pengumpulan_tugas_idx`(`kd_pengumpulan_tugas`),
    PRIMARY KEY (`kd_image`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `LaporanFile` ADD CONSTRAINT `LaporanFile_kd_laporan_fkey` FOREIGN KEY (`kd_laporan`) REFERENCES `Laporan`(`kd_laporan`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PengumpulanTugasFile` ADD CONSTRAINT `PengumpulanTugasFile_kd_pengumpulan_tugas_fkey` FOREIGN KEY (`kd_pengumpulan_tugas`) REFERENCES `PengumpulanTugas`(`kd_pengumpulan_tugas`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PengumpulanTugasImage` ADD CONSTRAINT `PengumpulanTugasImage_kd_pengumpulan_tugas_fkey` FOREIGN KEY (`kd_pengumpulan_tugas`) REFERENCES `PengumpulanTugas`(`kd_pengumpulan_tugas`) ON DELETE CASCADE ON UPDATE CASCADE;
