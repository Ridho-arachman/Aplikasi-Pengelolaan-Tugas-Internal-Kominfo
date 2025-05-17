const prisma = require("../../libs/prisma");
const tugasService = require("../../services/tugas.service");

// Mock semua fungsi Prisma yang digunakan
jest.mock("../../libs/prisma", () => ({
  tugas: {
    create: jest.fn(),
    findUnique: jest.fn(),
    findMany: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
}));

describe("Tugas Service", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test untuk createTugas
  test("createTugas harus membuat tugas baru", async () => {
    const mockData = {
      kd_tugas: "tugas-1",
      judul: "Membuat Laporan Bulanan",
      deskripsi: "Membuat laporan kinerja bulanan",
      user_nip: "123456789012345678",
      status: "pending",
      deadline: new Date(),
      prioritas: "tinggi",
      created_at: new Date(),
      updated_at: new Date(),
    };

    prisma.tugas.create.mockResolvedValue(mockData);

    const result = await tugasService.createTugas(mockData);

    expect(prisma.tugas.create).toHaveBeenCalledWith({
      data: mockData,
    });
    expect(result).toEqual(mockData);
  });

  // Test untuk getTugasById
  test("getTugasById harus mengembalikan tugas berdasarkan kode", async () => {
    const mockTugas = {
      kd_tugas: "tugas-1",
      judul: "Membuat Laporan Bulanan",
      deskripsi: "Membuat laporan kinerja bulanan",
      user_nip: "123456789012345678",
      status: "pending",
      deadline: new Date(),
      prioritas: "tinggi",
      user: { nip: "123456789012345678", nama: "John Doe" },
      pengumpulan_tugas: [],
    };

    prisma.tugas.findUnique.mockResolvedValue(mockTugas);

    const result = await tugasService.getTugasById("tugas-1");

    expect(prisma.tugas.findUnique).toHaveBeenCalledWith({
      where: { kd_tugas: "tugas-1" },
      include: {
        user: true,
        pengumpulan_tugas: true,
      },
    });
    expect(result).toEqual(mockTugas);
  });

  // Test untuk getTugasById ketika tugas tidak ditemukan
  test("getTugasById harus melempar error ketika tugas tidak ditemukan", async () => {
    prisma.tugas.findUnique.mockResolvedValue(null);

    await expect(tugasService.getTugasById("tugas-tidak-ada")).rejects.toThrow("Tugas tidak ditemukan");

    expect(prisma.tugas.findUnique).toHaveBeenCalledWith({
      where: { kd_tugas: "tugas-tidak-ada" },
      include: {
        user: true,
        pengumpulan_tugas: true,
      },
    });
  });

  // Test untuk getAllTugas tanpa filter
  test("getAllTugas harus mengembalikan semua tugas", async () => {
    const mockList = [
      {
        kd_tugas: "tugas-1",
        judul: "Membuat Laporan Bulanan",
        deskripsi: "Membuat laporan kinerja bulanan",
        user_nip: "123456789012345678",
        status: "pending",
        deadline: new Date(),
        prioritas: "tinggi",
        user: { nip: "123456789012345678", nama: "John Doe" },
        pengumpulan_tugas: [],
      },
      {
        kd_tugas: "tugas-2",
        judul: "Rapat Koordinasi",
        deskripsi: "Rapat koordinasi tim IT",
        user_nip: "876543210987654321",
        status: "in_progress",
        deadline: new Date(),
        prioritas: "sedang",
        user: { nip: "876543210987654321", nama: "Jane Doe" },
        pengumpulan_tugas: [],
      },
    ];

    prisma.tugas.findMany.mockResolvedValue(mockList);

    const result = await tugasService.getAllTugas();

    expect(prisma.tugas.findMany).toHaveBeenCalledWith({
      where: {},
      include: {
        user: true,
        pengumpulan_tugas: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    expect(result).toEqual(mockList);
  });

  // Test untuk getAllTugas dengan filter
  test("getAllTugas harus memfilter berdasarkan parameter", async () => {
    const mockFiltered = [
      {
        kd_tugas: "tugas-1",
        judul: "Membuat Laporan Bulanan",
        deskripsi: "Membuat laporan kinerja bulanan",
        user_nip: "123456789012345678",
        status: "pending",
        deadline: new Date(),
        prioritas: "tinggi",
        user: { nip: "123456789012345678", nama: "John Doe" },
        pengumpulan_tugas: [],
      },
    ];

    prisma.tugas.findMany.mockResolvedValue(mockFiltered);

    const filter = {
      user_nip: "123456789012345678",
      status: "pending",
    };

    const result = await tugasService.getAllTugas(filter);

    expect(prisma.tugas.findMany).toHaveBeenCalledWith({
      where: {
        user_nip: "123456789012345678",
        status: "pending",
      },
      include: {
        user: true,
        pengumpulan_tugas: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    expect(result).toEqual(mockFiltered);
  });

  // Test untuk updateTugas
  test("updateTugas harus memperbarui tugas", async () => {
    const kd_tugas = "tugas-1";
    const updateData = {
      judul: "Laporan Bulanan Diperbarui",
      status: "in_progress",
    };

    const existingTugas = {
      kd_tugas: "tugas-1",
      judul: "Membuat Laporan Bulanan",
      deskripsi: "Membuat laporan kinerja bulanan",
      user_nip: "123456789012345678",
      status: "pending",
      deadline: new Date(),
      prioritas: "tinggi",
    };

    const updatedTugas = {
      ...existingTugas,
      ...updateData,
    };

    prisma.tugas.findUnique.mockResolvedValue(existingTugas);
    prisma.tugas.update.mockResolvedValue(updatedTugas);

    const result = await tugasService.updateTugas(kd_tugas, updateData);

    expect(prisma.tugas.findUnique).toHaveBeenCalledWith({
      where: { kd_tugas },
    });
    expect(prisma.tugas.update).toHaveBeenCalledWith({
      where: { kd_tugas },
      data: updateData,
    });
    expect(result).toEqual(updatedTugas);
  });

  // Test untuk updateTugas ketika tugas tidak ditemukan
  test("updateTugas harus melempar error ketika tugas tidak ditemukan", async () => {
    const kd_tugas = "tugas-tidak-ada";
    const updateData = {
      judul: "Laporan Bulanan Diperbarui",
      status: "in_progress",
    };

    prisma.tugas.findUnique.mockResolvedValue(null);

    await expect(tugasService.updateTugas(kd_tugas, updateData)).rejects.toThrow("Tugas tidak ditemukan");

    expect(prisma.tugas.findUnique).toHaveBeenCalledWith({
      where: { kd_tugas },
    });
    expect(prisma.tugas.update).not.toHaveBeenCalled();
  });

  // Test untuk deleteTugas
  test("deleteTugas harus menghapus tugas", async () => {
    const kd_tugas = "tugas-1";
    const existingTugas = {
      kd_tugas: "tugas-1",
      judul: "Membuat Laporan Bulanan",
      deskripsi: "Membuat laporan kinerja bulanan",
      user_nip: "123456789012345678",
      status: "pending",
      deadline: new Date(),
      prioritas: "tinggi",
    };

    prisma.tugas.findUnique.mockResolvedValue(existingTugas);
    prisma.tugas.delete.mockResolvedValue(existingTugas);

    const result = await tugasService.deleteTugas(kd_tugas);

    expect(prisma.tugas.findUnique).toHaveBeenCalledWith({
      where: { kd_tugas },
    });
    expect(prisma.tugas.delete).toHaveBeenCalledWith({
      where: { kd_tugas },
    });
    expect(result).toEqual(existingTugas);
  });

  // Test untuk deleteTugas ketika tugas tidak ditemukan
  test("deleteTugas harus melempar error ketika tugas tidak ditemukan", async () => {
    const kd_tugas = "tugas-tidak-ada";

    prisma.tugas.findUnique.mockResolvedValue(null);

    await expect(tugasService.deleteTugas(kd_tugas)).rejects.toThrow("Tugas tidak ditemukan");

    expect(prisma.tugas.findUnique).toHaveBeenCalledWith({
      where: { kd_tugas },
    });
    expect(prisma.tugas.delete).not.toHaveBeenCalled();
  });
});