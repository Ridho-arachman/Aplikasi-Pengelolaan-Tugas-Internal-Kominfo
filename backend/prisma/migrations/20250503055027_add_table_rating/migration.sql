-- CreateTable
CREATE TABLE `Rating` (
    `kd_rating` VARCHAR(191) NOT NULL,
    `kd_pengumpulan_tugas` VARCHAR(191) NOT NULL,
    `nilai` DOUBLE NOT NULL,
    `komentar` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`kd_rating`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Rating` ADD CONSTRAINT `Rating_kd_pengumpulan_tugas_fkey` FOREIGN KEY (`kd_pengumpulan_tugas`) REFERENCES `PengumpulanTugas`(`kd_pengumpulan_tugas`) ON DELETE RESTRICT ON UPDATE CASCADE;
