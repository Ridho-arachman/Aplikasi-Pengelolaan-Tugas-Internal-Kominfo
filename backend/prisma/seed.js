const { PrismaClient } = require("../generated/prisma/client");
const { userFactory } = require("./factories/user.factory");
const { jabatanFactory } = require("./factories/jabatan.factory");
const { tugasFactory } = require("./factories/tugas.factory");
const { laporanFactory } = require("./factories/laporan.factory");
const { laporanFileFactory } = require("./factories/laporanFile.factory");
const {
  pengumpulanTugasFactory,
} = require("./factories/pengumpulanTugas.factory");
const {
  pengumpulanTugasFileFactory,
} = require("./factories/pengumpulanTugasFile.factory");
const {
  pengumpulanTugasImageFactory,
} = require("./factories/pengumpulanTugasImage.factory");
const { ratingFactory } = require("./factories/rating.factory");
const { historyJabatanFactory } = require("./factories/historyJabatan.factory");
const prisma = new PrismaClient();

async function clearDatabase() {
  // Hapus data dari tabel paling child ke parent (urutan penting!)
  await prisma.rating.deleteMany();
  await prisma.pengumpulanTugasFile.deleteMany();
  await prisma.pengumpulanTugasImage.deleteMany();
  await prisma.pengumpulanTugas.deleteMany();
  await prisma.laporanFile.deleteMany();
  await prisma.laporan.deleteMany();
  await prisma.tugas.deleteMany();
  await prisma.historyJabatan.deleteMany();
  await prisma.user.deleteMany();
  await prisma.jabatan.deleteMany();
}

async function main() {
  // Bersihkan database dulu
  await clearDatabase();

  // 1. Seed beberapa jabatan
  const jabatanList = [];
  for (let i = 0; i < 3; i++) {
    const jabatan = await prisma.jabatan.create({
      data: jabatanFactory(),
    });
    jabatanList.push(jabatan);
  }

  // 2. Seed satu user admin
  const adminJabatan = jabatanList[0];
  const adminData = await userFactory({
    kd_jabatan: adminJabatan.kd_jabatan,
    role: "admin",
    nip: "123456789012345678",
    nama: "Admin Utama",
  });
  const adminUser = await prisma.user.create({ data: adminData });

  // 3. Seed beberapa user biasa
  const userList = [];
  for (let i = 0; i < 5; i++) {
    const jabatan = jabatanList[Math.floor(Math.random() * jabatanList.length)];
    const userData = await userFactory({ kd_jabatan: jabatan.kd_jabatan });
    const user = await prisma.user.create({ data: userData });
    userList.push(user);
  }

  // 4. Set beberapa user punya atasan (nip_atasan)
  // Pilih 2 user acak, atasan diambil dari userList (bukan dirinya sendiri, bukan admin)
  if (userList.length > 2) {
    for (let i = 0; i < 2; i++) {
      const bawah = userList[i];
      // Pilih atasan random dari userList yang bukan dirinya sendiri
      const calonAtasan = userList.filter((u) => u.nip !== bawah.nip);
      const atasan =
        calonAtasan[Math.floor(Math.random() * calonAtasan.length)];
      await prisma.user.update({
        where: { nip: bawah.nip },
        data: { nip_atasan: atasan.nip },
      });
    }
  }

  // 5. Seed history jabatan untuk setiap user
  for (const user of [adminUser, ...userList]) {
    const jumlahHistory = Math.floor(Math.random() * 2) + 1;
    for (let i = 0; i < jumlahHistory; i++) {
      const jabatan =
        jabatanList[Math.floor(Math.random() * jabatanList.length)];
      const historyData = historyJabatanFactory({
        user_nip: user.nip,
        kd_jabatan: jabatan.kd_jabatan,
      });
      await prisma.historyJabatan.create({ data: historyData });
    }
  }

  // 6. Seed tugas & laporan untuk setiap user (kecuali admin)
  const tugasList = [];
  const laporanList = [];
  for (const user of userList) {
    // Seed tugas
    for (let i = 0; i < 2; i++) {
      const tugasData = tugasFactory({ user_nip: user.nip });
      const tugas = await prisma.tugas.create({ data: tugasData });
      tugasList.push(tugas);
    }
    // Seed laporan
    for (let i = 0; i < 2; i++) {
      const laporanData = laporanFactory({ user_nip: user.nip });
      const laporan = await prisma.laporan.create({ data: laporanData });
      laporanList.push(laporan);

      // Seed file laporan
      const jumlahFile = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < jumlahFile; j++) {
        const fileData = laporanFileFactory({ kd_laporan: laporan.kd_laporan });
        await prisma.laporanFile.create({ data: fileData });
      }
    }
  }

  // 7. Seed pengumpulan tugas untuk setiap tugas
  const pengumpulanList = [];
  for (const tugas of tugasList) {
    const pengumpulanData = pengumpulanTugasFactory({
      kd_tugas: tugas.kd_tugas,
      user_nip: tugas.user_nip,
    });
    const pengumpulan = await prisma.pengumpulanTugas.create({
      data: pengumpulanData,
    });
    pengumpulanList.push(pengumpulan);

    // Seed file pengumpulan tugas
    const jumlahFile = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < jumlahFile; i++) {
      const fileData = pengumpulanTugasFileFactory({
        kd_pengumpulan_tugas: pengumpulan.kd_pengumpulan_tugas,
      });
      await prisma.pengumpulanTugasFile.create({ data: fileData });
    }

    // Seed image pengumpulan tugas
    const jumlahImage = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < jumlahImage; i++) {
      const imageData = pengumpulanTugasImageFactory({
        kd_pengumpulan_tugas: pengumpulan.kd_pengumpulan_tugas,
      });
      await prisma.pengumpulanTugasImage.create({ data: imageData });
    }
  }

  // 8. Seed rating untuk setiap pengumpulan tugas
  for (const pengumpulan of pengumpulanList) {
    const ratingData = ratingFactory({
      kd_pengumpulan_tugas: pengumpulan.kd_pengumpulan_tugas,
    });
    await prisma.rating.create({ data: ratingData });
  }

  console.log("Seeding selesai!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
