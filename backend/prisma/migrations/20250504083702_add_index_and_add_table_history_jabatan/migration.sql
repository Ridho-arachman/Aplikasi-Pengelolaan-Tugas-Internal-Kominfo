/*
  Warnings:

  - You are about to alter the column `user_nip` on the `laporan` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(18)`.
  - You are about to alter the column `user_nip` on the `pengumpulantugas` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(18)`.
  - You are about to alter the column `user_nip` on the `tugas` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(18)`.

*/
-- DropForeignKey
ALTER TABLE `laporan` DROP FOREIGN KEY `Laporan_user_nip_fkey`;

-- DropForeignKey
ALTER TABLE `pengumpulantugas` DROP FOREIGN KEY `PengumpulanTugas_user_nip_fkey`;

-- DropForeignKey
ALTER TABLE `tugas` DROP FOREIGN KEY `Tugas_user_nip_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_kd_jabatan_fkey`;

-- AlterTable
ALTER TABLE `laporan` MODIFY `user_nip` VARCHAR(18) NOT NULL;

-- AlterTable
ALTER TABLE `pengumpulantugas` MODIFY `user_nip` VARCHAR(18) NOT NULL;

-- AlterTable
ALTER TABLE `tugas` MODIFY `user_nip` VARCHAR(18) NOT NULL;

-- CreateTable
CREATE TABLE `HistoryJabatan` (
    `id` VARCHAR(191) NOT NULL,
    `user_nip` VARCHAR(191) NOT NULL,
    `kd_jabatan` VARCHAR(191) NOT NULL,
    `tanggal_mulai` DATETIME(3) NOT NULL,
    `tanggal_akhir` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `HistoryJabatan_user_nip_idx`(`user_nip`),
    INDEX `HistoryJabatan_kd_jabatan_idx`(`kd_jabatan`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_kd_jabatan_fkey` FOREIGN KEY (`kd_jabatan`) REFERENCES `Jabatan`(`kd_jabatan`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HistoryJabatan` ADD CONSTRAINT `HistoryJabatan_user_nip_fkey` FOREIGN KEY (`user_nip`) REFERENCES `User`(`nip`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HistoryJabatan` ADD CONSTRAINT `HistoryJabatan_kd_jabatan_fkey` FOREIGN KEY (`kd_jabatan`) REFERENCES `Jabatan`(`kd_jabatan`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tugas` ADD CONSTRAINT `Tugas_user_nip_fkey` FOREIGN KEY (`user_nip`) REFERENCES `User`(`nip`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Laporan` ADD CONSTRAINT `Laporan_user_nip_fkey` FOREIGN KEY (`user_nip`) REFERENCES `User`(`nip`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PengumpulanTugas` ADD CONSTRAINT `PengumpulanTugas_user_nip_fkey` FOREIGN KEY (`user_nip`) REFERENCES `User`(`nip`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `laporan` RENAME INDEX `Laporan_user_nip_fkey` TO `Laporan_user_nip_idx`;

-- RenameIndex
ALTER TABLE `pengumpulantugas` RENAME INDEX `PengumpulanTugas_kd_tugas_fkey` TO `PengumpulanTugas_kd_tugas_idx`;

-- RenameIndex
ALTER TABLE `pengumpulantugas` RENAME INDEX `PengumpulanTugas_user_nip_fkey` TO `PengumpulanTugas_user_nip_idx`;

-- RenameIndex
ALTER TABLE `rating` RENAME INDEX `Rating_kd_pengumpulan_tugas_fkey` TO `Rating_kd_pengumpulan_tugas_idx`;

-- RenameIndex
ALTER TABLE `tugas` RENAME INDEX `Tugas_user_nip_fkey` TO `Tugas_user_nip_idx`;

-- RenameIndex
ALTER TABLE `user` RENAME INDEX `User_kd_jabatan_fkey` TO `User_kd_jabatan_idx`;

-- RenameIndex
ALTER TABLE `user` RENAME INDEX `User_nip_atasan_fkey` TO `User_nip_atasan_idx`;
