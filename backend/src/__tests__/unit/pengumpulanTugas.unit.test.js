const prisma = require("../../libs/prisma");
const pengumpulanTugasService = require("../../services/pengumpulanTugas.service");

// Mock semua fungsi Prisma yang digunakan
jest.mock("../../libs/prisma", () => ({
  pengumpulanTugas: {
    create: jest.fn(),
    findUnique: jest.fn(),
    findMany: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
}));

describe("Pengumpulan Tugas Service", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test untuk createPengumpulanTugas
  test("createPengumpulanTugas harus membuat pengumpulan tugas baru", async () => {
    const mockData = {
      kd_pengumpulan_tugas: "pengumpulan-1",
      kd_tugas: "tugas-1",
      user_nip: "123456789012345678",
      tanggal_pengumpulan: new Date(),
      file_path: "/path/to/file.pdf",
      catatan: "Catatan pengumpulan",
      status: "menunggu",
      created_at: new Date(),
      updated_at: new Date(),
    };

    const mockIncludeData = {
      ...mockData,
      tugas: { kd_tugas: "tugas-1", judul: "Tugas Test" },
      user: { nip: "123456789012345678", nama: "John Doe" },
    };

    prisma.pengumpulanTugas.create.mockResolvedValue(mockIncludeData);

    const result = await pengumpulanTugasService.createPengumpulanTugas(mockData);

    expect(prisma.pengumpulanTugas.create).toHaveBeenCalledWith({
      data: mockData,
      include: {
        tugas: true,
        user: true,
      },
    });
    expect(result).toEqual(mockIncludeData);
  });

  // Test untuk getPengumpulanTugasById
  test("getPengumpulanTugasById harus mengembalikan pengumpulan tugas berdasarkan kode", async () => {
    const mockPengumpulanTugas = {
      kd_pengumpulan_tugas: "pengumpulan-1",
      kd_tugas: "tugas-1",
      user_nip: "123456789012345678",
      tanggal_pengumpulan: new Date(),
      file_path: "/path/to/file.pdf",
      catatan: "Catatan pengumpulan",
      status: "menunggu",
      tugas: { kd_tugas: "tugas-1", judul: "Tugas Test" },
      user: { nip: "123456789012345678", nama: "John Doe" },
    };

    prisma.pengumpulanTugas.findUnique.mockResolvedValue(mockPengumpulanTugas);

    const result = await pengumpulanTugasService.getPengumpulanTugasById("pengumpulan-1");

    expect(prisma.pengumpulanTugas.findUnique).toHaveBeenCalledWith({
      where: { kd_pengumpulan_tugas: "pengumpulan-1" },
      include: {
        tugas: true,
        user: true,
      },
    });
    expect(result).toEqual(mockPengumpulanTugas);
  });

  // Test untuk getPengumpulanTugasById ketika pengumpulan tugas tidak ditemukan
  test("getPengumpulanTugasById harus melempar error ketika pengumpulan tugas tidak ditemukan", async () => {
    prisma.pengumpulanTugas.findUnique.mockResolvedValue(null);

    await expect(pengumpulanTugasService.getPengumpulanTugasById("pengumpulan-tidak-ada")).rejects.toThrow(
      "Pengumpulan tugas tidak ditemukan"
    );

    expect(prisma.pengumpulanTugas.findUnique).toHaveBeenCalledWith({
      where: { kd_pengumpulan_tugas: "pengumpulan-tidak-ada" },
      include: {
        tugas: true,
        user: true,
      },
    });
  });

  // Test untuk getAllPengumpulanTugas tanpa filter
  test("getAllPengumpulanTugas harus mengembalikan semua pengumpulan tugas", async () => {
    const mockList = [
      {
        kd_pengumpulan_tugas: "pengumpulan-1",
        kd_tugas: "tugas-1",
        user_nip: "123456789012345678",
        tanggal_pengumpulan: new Date(),
        file_path: "/path/to/file1.pdf",
        catatan: "Catatan pengumpulan 1",
        status: "menunggu",
        tugas: { kd_tugas: "tugas-1", judul: "Tugas Test 1" },
        user: { nip: "123456789012345678", nama: "John Doe" },
      },
      {
        kd_pengumpulan_tugas: "pengumpulan-2",
        kd_tugas: "tugas-2",
        user_nip: "876543210987654321",
        tanggal_pengumpulan: new Date(),
        file_path: "/path/to/file2.pdf",
        catatan: "Catatan pengumpulan 2",
        status: "disetujui",
        tugas: { kd_tugas: "tugas-2", judul: "Tugas Test 2" },
        user: { nip: "876543210987654321", nama: "Jane Doe" },
      },
    ];

    prisma.pengumpulanTugas.findMany.mockResolvedValue(mockList);

    const result = await pengumpulanTugasService.getAllPengumpulanTugas();

    expect(prisma.pengumpulanTugas.findMany).toHaveBeenCalledWith({
      where: {},
      include: {
        tugas: true,
        user: true,
      },
      orderBy: {
        tanggal_pengumpulan: "desc",
      },
    });
    expect(result).toEqual(mockList);
  });

  // Test untuk getAllPengumpulanTugas dengan filter
  test("getAllPengumpulanTugas harus memfilter berdasarkan parameter", async () => {
    const mockFiltered = [
      {
        kd_pengumpulan_tugas: "pengumpulan-1",
        kd_tugas: "tugas-1",
        user_nip: "123456789012345678",
        tanggal_pengumpulan: new Date(),
        file_path: "/path/to/file1.pdf",
        catatan: "Catatan pengumpulan 1",
        status: "menunggu",
        tugas: { kd_tugas: "tugas-1", judul: "Tugas Test 1" },
        user: { nip: "123456789012345678", nama: "John Doe" },
      },
    ];

    prisma.pengumpulanTugas.findMany.mockResolvedValue(mockFiltered);

    const filter = {
      kd_tugas: "tugas-1",
      user_nip: "123456789012345678",
      status: "menunggu",
    };

    const result = await pengumpulanTugasService.getAllPengumpulanTugas(filter);

    expect(prisma.pengumpulanTugas.findMany).toHaveBeenCalledWith({
      where: {
        kd_tugas: "tugas-1",
        user_nip: "123456789012345678",
        status: "menunggu",
      },
      include: {
        tugas: true,
        user: true,
      },
      orderBy: {
        tanggal_pengumpulan: "desc",
      },
    });
    expect(result).toEqual(mockFiltered);
  });

  // Test untuk updatePengumpulanTugas
  test("updatePengumpulanTugas harus memperbarui pengumpulan tugas", async () => {
    const kd_pengumpulan_tugas = "pengumpulan-1";
    const updateData = {
      status: "disetujui",
      catatan: "Catatan diperbarui",
    };

    const existingPengumpulanTugas = {
      kd_pengumpulan_tugas: "pengumpulan-1",
      kd_tugas: "tugas-1",
      user_nip: "123456789012345678",
      tanggal_pengumpulan: new Date(),
      file_path: "/path/to/file.pdf",
      catatan: "Catatan pengumpulan",
      status: "menunggu",
    };

    const updatedPengumpulanTugas = {
      ...existingPengumpulanTugas,
      ...updateData,
      tugas: { kd_tugas: "tugas-1", judul: "Tugas Test" },
      user: { nip: "123456789012345678", nama: "John Doe" },
    };

    prisma.pengumpulanTugas.findUnique.mockResolvedValue(existingPengumpulanTugas);
    prisma.pengumpulanTugas.update.mockResolvedValue(updatedPengumpulanTugas);

    const result = await pengumpulanTugasService.updatePengumpulanTugas(kd_pengumpulan_tugas, updateData);

    expect(prisma.pengumpulanTugas.findUnique).toHaveBeenCalledWith({
      where: { kd_pengumpulan_tugas },
    });
    expect(prisma.pengumpulanTugas.update).toHaveBeenCalledWith({
      where: { kd_pengumpulan_tugas },
      data: updateData,
      include: {
        tugas: true,
        user: true,
      },
    });
    expect(result).toEqual(updatedPengumpulanTugas);
  });

  // Test untuk updatePengumpulanTugas ketika pengumpulan tugas tidak ditemukan
  test("updatePengumpulanTugas harus melempar error ketika pengumpulan tugas tidak ditemukan", async () => {
    const kd_pengumpulan_tugas = "pengumpulan-tidak-ada";
    const updateData = {
      status: "disetujui",
    };

    prisma.pengumpulanTugas.findUnique.mockResolvedValue(null);

    await expect(pengumpulanTugasService.updatePengumpulanTugas(kd_pengumpulan_tugas, updateData)).rejects.toThrow(
      "Pengumpulan tugas tidak ditemukan"
    );

    expect(prisma.pengumpulanTugas.findUnique).toHaveBeenCalledWith({
      where: { kd_pengumpulan_tugas },
    });
    expect(prisma.pengumpulanTugas.update).not.toHaveBeenCalled();
  });

  // Test untuk deletePengumpulanTugas
  test("deletePengumpulanTugas harus menghapus pengumpulan tugas", async () => {
    const kd_pengumpulan_tugas = "pengumpulan-1";
    const existingPengumpulanTugas = {
      kd_pengumpulan_tugas: "pengumpulan-1",
      kd_tugas: "tugas-1",
      user_nip: "123456789012345678",
      tanggal_pengumpulan: new Date(),
      file_path: "/path/to/file.pdf",
      catatan: "Catatan pengumpulan",
      status: "menunggu",
    };

    const deletedPengumpulanTugas = {
      ...existingPengumpulanTugas,
      tugas: { kd_tugas: "tugas-1", judul: "Tugas Test" },
      user: { nip: "123456789012345678", nama: "John Doe" },
    };

    prisma.pengumpulanTugas.findUnique.mockResolvedValue(existingPengumpulanTugas);
    prisma.pengumpulanTugas.delete.mockResolvedValue(deletedPengumpulanTugas);

    const result = await pengumpulanTugasService.deletePengumpulanTugas(kd_pengumpulan_tugas);

    expect(prisma.pengumpulanTugas.findUnique).toHaveBeenCalledWith({
      where: { kd_pengumpulan_tugas },
    });
    expect(prisma.pengumpulanTugas.delete).toHaveBeenCalledWith({
      where: { kd_pengumpulan_tugas },
      include: {
        tugas: true,
        user: true,
      },
    });
    expect(result).toEqual(deletedPengumpulanTugas);
  });

  // Test untuk deletePengumpulanTugas ketika pengumpulan tugas tidak ditemukan
  test("deletePengumpulanTugas harus melempar error ketika pengumpulan tugas tidak ditemukan", async () => {
    const kd_pengumpulan_tugas = "pengumpulan-tidak-ada";

    prisma.pengumpulanTugas.findUnique.mockResolvedValue(null);

    await expect(pengumpulanTugasService.deletePengumpulanTugas(kd_pengumpulan_tugas)).rejects.toThrow(
      "Pengumpulan tugas tidak ditemukan"
    );

    expect(prisma.pengumpulanTugas.findUnique).toHaveBeenCalledWith({
      where: { kd_pengumpulan_tugas },
    });
    expect(prisma.pengumpulanTugas.delete).not.toHaveBeenCalled();
  });

  // Test untuk getPengumpulanTugasByTugasId
  test("getPengumpulanTugasByTugasId harus mengembalikan pengumpulan tugas berdasarkan kode tugas", async () => {
    const kd_tugas = "tugas-1";
    const mockPengumpulanTugas = [
      {
        kd_pengumpulan_tugas: "pengumpulan-1",
        kd_tugas: "tugas-1",
        user_nip: "123456789012345678",
        tanggal_pengumpulan: new Date(),
        file_path: "/path/to/file1.pdf",
        catatan: "Catatan pengumpulan 1",
        status: "menunggu",
        tugas: { kd_tugas: "tugas-1", judul: "Tugas Test" },
        user: { nip: "123456789012345678", nama: "John Doe" },
      },
      {
        kd_pengumpulan_tugas: "pengumpulan-2",
        kd_tugas: "tugas-1",
        user_nip: "876543210987654321",
        tanggal_pengumpulan: new Date(),
        file_path: "/path/to/file2.pdf",
        catatan: "Catatan pengumpulan 2",
        status: "disetujui",
        tugas: { kd_tugas: "tugas-1", judul: "Tugas Test" },
        user: { nip: "876543210987654321", nama: "Jane Doe" },
      },
    ];

    prisma.pengumpulanTugas.findMany.mockResolvedValue(mockPengumpulanTugas);

    const result = await pengumpulanTugasService.getPengumpulanTugasByTugasId(kd_tugas);

    expect(prisma.pengumpulanTugas.findMany).toHaveBeenCalledWith({
      where: { kd_tugas },
      include: {
        tugas: true,
        user: true,
      },
      orderBy: {
        tanggal_pengumpulan: "desc",
      },
    });
    expect(result).toEqual(mockPengumpulanTugas);
  });

  // Test untuk getPengumpulanTugasByUserNip
  test("getPengumpulanTugasByUserNip harus mengembalikan pengumpulan tugas berdasarkan NIP user", async () => {
    const user_nip = "123456789012345678";
    const mockPengumpulanTugas = [
      {
        kd_pengumpulan_tugas: "pengumpulan-1",
        kd_tugas: "tugas-1",
        user_nip: "123456789012345678",
        tanggal_pengumpulan: new Date(),
        file_path: "/path/to/file1.pdf",
        catatan: "Catatan pengumpulan 1",
        status: "menunggu",
        tugas: { kd_tugas: "tugas-1", judul: "Tugas Test 1" },
        user: { nip: "123456789012345678", nama: "John Doe" },
      },
      {
        kd_pengumpulan_tugas: "pengumpulan-3",
        kd_tugas: "tugas-3",
        user_nip: "123456789012345678",
        tanggal_pengumpulan: new Date(),
        file_path: "/path/to/file3.pdf",
        catatan: "Catatan pengumpulan 3",
        status: "revisi",
        tugas: { kd_tugas: "tugas-3", judul: "Tugas Test 3" },
        user: { nip: "123456789012345678", nama: "John Doe" },
      },
    ];

    prisma.pengumpulanTugas.findMany.mockResolvedValue(mockPengumpulanTugas);

    const result = await pengumpulanTugasService.getPengumpulanTugasByUserNip(user_nip);

    expect(prisma.pengumpulanTugas.findMany).toHaveBeenCalledWith({
      where: { user_nip },
      include: {
        tugas: true,
        user: true,
      },
      orderBy: {
        tanggal_pengumpulan: "desc",
      },
    });
    expect(result).toEqual(mockPengumpulanTugas);
  });
});