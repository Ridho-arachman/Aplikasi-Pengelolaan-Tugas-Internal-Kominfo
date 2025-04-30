-- CreateTable
CREATE TABLE `Jabatan` (
    `kd_jabatan` VARCHAR(191) NOT NULL,
    `nama_jabatan` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Jabatan_nama_jabatan_key`(`nama_jabatan`),
    PRIMARY KEY (`kd_jabatan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `nip` VARCHAR(18) NOT NULL,
    `nama` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `role` ENUM('user', 'admin') NOT NULL DEFAULT 'user',
    `kd_jabatan` VARCHAR(191) NOT NULL,
    `nip_atasan` VARCHAR(18) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`nip`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tugas` (
    `kd_tugas` VARCHAR(191) NOT NULL,
    `judul` VARCHAR(255) NOT NULL,
    `deskripsi` TEXT NOT NULL,
    `user_nip` VARCHAR(191) NOT NULL,
    `status` ENUM('pending', 'in_progress', 'selesai', 'dibatalkan') NOT NULL DEFAULT 'pending',
    `deadline` DATETIME(3) NOT NULL,
    `prioritas` ENUM('tinggi', 'sedang', 'rendah') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`kd_tugas`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Laporan` (
    `kd_laporan` VARCHAR(191) NOT NULL,
    `isi_laporan` TEXT NOT NULL,
    `judul_laporan` VARCHAR(255) NOT NULL,
    `user_nip` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`kd_laporan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PengumpulanTugas` (
    `kd_pengumpulan_tugas` VARCHAR(191) NOT NULL,
    `kd_tugas` VARCHAR(191) NOT NULL,
    `user_nip` VARCHAR(191) NOT NULL,
    `tanggal_pengumpulan` DATETIME(3) NOT NULL,
    `file_path` VARCHAR(191) NOT NULL,
    `catatan` TEXT NOT NULL,
    `status` ENUM('menunggu', 'disetujui', 'revisi', 'ditolak') NOT NULL DEFAULT 'menunggu',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`kd_pengumpulan_tugas`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_nip_atasan_fkey` FOREIGN KEY (`nip_atasan`) REFERENCES `User`(`nip`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_kd_jabatan_fkey` FOREIGN KEY (`kd_jabatan`) REFERENCES `Jabatan`(`kd_jabatan`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tugas` ADD CONSTRAINT `Tugas_user_nip_fkey` FOREIGN KEY (`user_nip`) REFERENCES `User`(`nip`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Laporan` ADD CONSTRAINT `Laporan_user_nip_fkey` FOREIGN KEY (`user_nip`) REFERENCES `User`(`nip`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PengumpulanTugas` ADD CONSTRAINT `PengumpulanTugas_kd_tugas_fkey` FOREIGN KEY (`kd_tugas`) REFERENCES `Tugas`(`kd_tugas`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PengumpulanTugas` ADD CONSTRAINT `PengumpulanTugas_user_nip_fkey` FOREIGN KEY (`user_nip`) REFERENCES `User`(`nip`) ON DELETE RESTRICT ON UPDATE CASCADE;
