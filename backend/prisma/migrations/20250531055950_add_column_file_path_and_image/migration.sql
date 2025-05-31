/*
  Warnings:

  - Added the required column `file_path` to the `Laporan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `PengumpulanTugas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `laporan` ADD COLUMN `file_path` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `pengumpulantugas` ADD COLUMN `image` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `image` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE INDEX `Tugas_status_idx` ON `Tugas`(`status`);

-- CreateIndex
CREATE INDEX `Tugas_deadline_idx` ON `Tugas`(`deadline`);
