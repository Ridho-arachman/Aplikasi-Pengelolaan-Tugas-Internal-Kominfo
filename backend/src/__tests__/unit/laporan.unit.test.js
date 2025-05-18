const prisma = require("../../libs/prisma");
const laporanService = require("../../services/laporan.service");

// Mock semua fungsi Prisma yang digunakan
jest.mock("../../libs/prisma", () => ({
  laporan: {
    create: jest.fn(),
    findUnique: jest.fn(),
    findMany: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
}));

describe("Laporan Service", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test untuk createLaporan
  test("createLaporan harus membuat laporan baru", async () => {
    const mockData = {
      kd_laporan: "laporan-1",
      isi_laporan: "Isi laporan test",
      judul_laporan: "Judul Laporan Test",
      user_nip: "123456789012345678",
      created_at: new Date(),
      updated_at: new Date(),
    };

    prisma.laporan.create.mockResolvedValue(mockData);

    const result = await laporanService.createLaporan(mockData);

    expect(prisma.laporan.create).toHaveBeenCalledWith({
      data: mockData,
    });
    expect(result).toEqual(mockData);
  });

  // Test untuk getLaporanById
  test("getLaporanById harus mengembalikan laporan berdasarkan kode", async () => {
    const mockLaporan = {
      kd_laporan: "laporan-1",
      isi_laporan: "Isi laporan test",
      judul_laporan: "Judul Laporan Test",
      user_nip: "123456789012345678",
      user: { nip: "123456789012345678", nama: "John Doe" },
    };

    prisma.laporan.findUnique.mockResolvedValue(mockLaporan);

    const result = await laporanService.getLaporanById("laporan-1");

    expect(prisma.laporan.findUnique).toHaveBeenCalledWith({
      where: { kd_laporan: "laporan-1" },
      include: {
        user: true,
      },
    });
    expect(result).toEqual(mockLaporan);
  });

  // Test untuk getLaporanById ketika laporan tidak ditemukan
  test("getLaporanById harus melempar error ketika laporan tidak ditemukan", async () => {
    prisma.laporan.findUnique.mockResolvedValue(null);

    await expect(laporanService.getLaporanById("laporan-tidak-ada")).rejects.toThrow("Laporan tidak ditemukan");

    expect(prisma.laporan.findUnique).toHaveBeenCalledWith({
      where: { kd_laporan: "laporan-tidak-ada" },
      include: {
        user: true,
      },
    });
  });

  // Test untuk getAllLaporan tanpa filter
  test("getAllLaporan harus mengembalikan semua laporan", async () => {
    const mockList = [
      {
        kd_laporan: "laporan-1",
        isi_laporan: "Isi laporan test 1",
        judul_laporan: "Judul Laporan Test 1",
        user_nip: "123456789012345678",
        user: { nip: "123456789012345678", nama: "John Doe" },
      },
      {
        kd_laporan: "laporan-2",
        isi_laporan: "Isi laporan test 2",
        judul_laporan: "Judul Laporan Test 2",
        user_nip: "876543210987654321",
        user: { nip: "876543210987654321", nama: "Jane Doe" },
      },
    ];

    prisma.laporan.findMany.mockResolvedValue(mockList);

    const result = await laporanService.getAllLaporan();

    expect(prisma.laporan.findMany).toHaveBeenCalledWith({
      where: {},
      include: {
        user: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    expect(result).toEqual(mockList);
  });

  // Test untuk getAllLaporan dengan filter
  test("getAllLaporan harus memfilter berdasarkan parameter", async () => {
    const mockFiltered = [
      {
        kd_laporan: "laporan-1",
        isi_laporan: "Isi laporan test 1",
        judul_laporan: "Judul Laporan Test 1",
        user_nip: "123456789012345678",
        user: { nip: "123456789012345678", nama: "John Doe" },
      },
    ];

    prisma.laporan.findMany.mockResolvedValue(mockFiltered);

    const filter = {
      user_nip: "123456789012345678",
      judul_laporan: "Test 1",
    };

    const result = await laporanService.getAllLaporan(filter);

    expect(prisma.laporan.findMany).toHaveBeenCalledWith({
      where: {
        user_nip: "123456789012345678",
        judul_laporan: {
          contains: "Test 1",
        },
      },
      include: {
        user: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    expect(result).toEqual(mockFiltered);
  });

  // Test untuk updateLaporan
  test("updateLaporan harus memperbarui laporan", async () => {
    const kd_laporan = "laporan-1";
    const updateData = {
      judul_laporan: "Judul Laporan Diperbarui",
      isi_laporan: "Isi laporan diperbarui",
    };

    const existingLaporan = {
      kd_laporan: "laporan-1",
      isi_laporan: "Isi laporan test",
      judul_laporan: "Judul Laporan Test",
      user_nip: "123456789012345678",
    };

    const updatedLaporan = {
      ...existingLaporan,
      ...updateData,
    };

    prisma.laporan.findUnique.mockResolvedValue(existingLaporan);
    prisma.laporan.update.mockResolvedValue(updatedLaporan);

    const result = await laporanService.updateLaporan(kd_laporan, updateData);

    expect(prisma.laporan.findUnique).toHaveBeenCalledWith({
      where: { kd_laporan },
    });
    expect(prisma.laporan.update).toHaveBeenCalledWith({
      where: { kd_laporan },
      data: updateData,
    });
    expect(result).toEqual(updatedLaporan);
  });

  // Test untuk updateLaporan ketika laporan tidak ditemukan
  test("updateLaporan harus melempar error ketika laporan tidak ditemukan", async () => {
    const kd_laporan = "laporan-tidak-ada";
    const updateData = {
      judul_laporan: "Judul Laporan Diperbarui",
    };

    prisma.laporan.findUnique.mockResolvedValue(null);

    await expect(laporanService.updateLaporan(kd_laporan, updateData)).rejects.toThrow("Laporan tidak ditemukan");

    expect(prisma.laporan.findUnique).toHaveBeenCalledWith({
      where: { kd_laporan },
    });
    expect(prisma.laporan.update).not.toHaveBeenCalled();
  });

  // Test untuk deleteLaporan
  test("deleteLaporan harus menghapus laporan", async () => {
    const kd_laporan = "laporan-1";
    const existingLaporan = {
      kd_laporan: "laporan-1",
      isi_laporan: "Isi laporan test",
      judul_laporan: "Judul Laporan Test",
      user_nip: "123456789012345678",
    };

    prisma.laporan.findUnique.mockResolvedValue(existingLaporan);
    prisma.laporan.delete.mockResolvedValue(existingLaporan);

    const result = await laporanService.deleteLaporan(kd_laporan);

    expect(prisma.laporan.findUnique).toHaveBeenCalledWith({
      where: { kd_laporan },
    });
    expect(prisma.laporan.delete).toHaveBeenCalledWith({
      where: { kd_laporan },
    });
    expect(result).toEqual(existingLaporan);
  });

  // Test untuk deleteLaporan ketika laporan tidak ditemukan
  test("deleteLaporan harus melempar error ketika laporan tidak ditemukan", async () => {
    const kd_laporan = "laporan-tidak-ada";

    prisma.laporan.findUnique.mockResolvedValue(null);

    await expect(laporanService.deleteLaporan(kd_laporan)).rejects.toThrow("Laporan tidak ditemukan");

    expect(prisma.laporan.findUnique).toHaveBeenCalledWith({
      where: { kd_laporan },
    });
    expect(prisma.laporan.delete).not.toHaveBeenCalled();
  });

  // Test untuk getLaporanByUserNip
  test("getLaporanByUserNip harus mengembalikan laporan berdasarkan NIP user", async () => {
    const user_nip = "123456789012345678";
    const mockLaporanList = [
      {
        kd_laporan: "laporan-1",
        isi_laporan: "Isi laporan test 1",
        judul_laporan: "Judul Laporan Test 1",
        user_nip: "123456789012345678",
        user: { nip: "123456789012345678", nama: "John Doe" },
      },
      {
        kd_laporan: "laporan-3",
        isi_laporan: "Isi laporan test 3",
        judul_laporan: "Judul Laporan Test 3",
        user_nip: "123456789012345678",
        user: { nip: "123456789012345678", nama: "John Doe" },
      },
    ];

    prisma.laporan.findMany.mockResolvedValue(mockLaporanList);

    const result = await laporanService.getLaporanByUserNip(user_nip);

    expect(prisma.laporan.findMany).toHaveBeenCalledWith({
      where: { user_nip },
      include: {
        user: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    expect(result).toEqual(mockLaporanList);
  });
});