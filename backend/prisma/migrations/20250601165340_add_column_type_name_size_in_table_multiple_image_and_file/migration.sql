/*
  Warnings:

  - Added the required column `file_name` to the `LaporanFile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `file_size` to the `LaporanFile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `file_type` to the `LaporanFile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `file_name` to the `PengumpulanTugasFile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `file_size` to the `PengumpulanTugasFile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `file_type` to the `PengumpulanTugasFile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_name` to the `PengumpulanTugasImage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_size` to the `PengumpulanTugasImage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_type` to the `PengumpulanTugasImage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `laporanfile` ADD COLUMN `file_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `file_size` INTEGER NOT NULL,
    ADD COLUMN `file_type` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `pengumpulantugasfile` ADD COLUMN `file_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `file_size` INTEGER NOT NULL,
    ADD COLUMN `file_type` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `pengumpulantugasimage` ADD COLUMN `image_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `image_size` INTEGER NOT NULL,
    ADD COLUMN `image_type` VARCHAR(191) NOT NULL;
