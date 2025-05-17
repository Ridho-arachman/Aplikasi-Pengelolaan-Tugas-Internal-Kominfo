const prisma = require("../../libs/prisma");
const historyJabatanService = require("../../services/historyJabatan.service");

// Mock semua fungsi Prisma yang digunakan
jest.mock("../../libs/prisma", () => ({
  historyJabatan: {
    create: jest.fn(),
    findUnique: jest.fn(),
    findMany: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
}));

describe("History Jabatan Service", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test untuk createHistoryJabatan
  test("createHistoryJabatan harus membuat history jabatan baru", async () => {
    const mockData = {
      id: "history-1",
      user_nip: "123456789012345678",
      kd_jabatan: "jabatan-1",
      tanggal_mulai: new Date(),
      tanggal_akhir: null,
      created_at: new Date(),
      updated_at: new Date(),
    };

    const mockIncludeData = {
      ...mockData,
      user: { nip: "123456789012345678", nama: "John Doe" },
      jabatan: { kd_jabatan: "jabatan-1", nama_jabatan: "Kepala Seksi" },
    };

    prisma.historyJabatan.create.mockResolvedValue(mockIncludeData);

    const result = await historyJabatanService.createHistoryJabatan(mockData);

    expect(prisma.historyJabatan.create).toHaveBeenCalledWith({
      data: mockData,
      include: {
        user: true,
        jabatan: true,
      },
    });
    expect(result).toEqual(mockIncludeData);
  });

  // Test untuk getHistoryJabatan
  test("getHistoryJabatan harus mengembalikan history jabatan berdasarkan ID", async () => {
    const mockHistoryJabatan = {
      id: "history-1",
      user_nip: "123456789012345678",
      kd_jabatan: "jabatan-1",
      tanggal_mulai: new Date(),
      tanggal_akhir: null,
      user: { nip: "123456789012345678", nama: "John Doe" },
      jabatan: { kd_jabatan: "jabatan-1", nama_jabatan: "Kepala Seksi" },
    };

    prisma.historyJabatan.findUnique.mockResolvedValue(mockHistoryJabatan);

    const result = await historyJabatanService.getHistoryJabatan("history-1");

    expect(prisma.historyJabatan.findUnique).toHaveBeenCalledWith({
      where: { id: "history-1" },
      include: {
        user: true,
        jabatan: true,
      },
    });
    expect(result).toEqual(mockHistoryJabatan);
  });

  // Test untuk getAllHistoryJabatan tanpa filter
  test("getAllHistoryJabatan harus mengembalikan semua history jabatan", async () => {
    const mockList = [
      {
        id: "history-1",
        user_nip: "123456789012345678",
        kd_jabatan: "jabatan-1",
        tanggal_mulai: new Date(),
        tanggal_akhir: null,
        user: { nip: "123456789012345678", nama: "John Doe" },
        jabatan: { kd_jabatan: "jabatan-1", nama_jabatan: "Kepala Seksi" },
      },
      {
        id: "history-2",
        user_nip: "876543210987654321",
        kd_jabatan: "jabatan-2",
        tanggal_mulai: new Date(),
        tanggal_akhir: new Date(),
        user: { nip: "876543210987654321", nama: "Jane Doe" },
        jabatan: { kd_jabatan: "jabatan-2", nama_jabatan: "Staff IT" },
      },
    ];

    prisma.historyJabatan.findMany.mockResolvedValue(mockList);

    const result = await historyJabatanService.getAllHistoryJabatan();

    expect(prisma.historyJabatan.findMany).toHaveBeenCalledWith({
      where: {},
      include: {
        user: true,
        jabatan: true,
      },
      orderBy: {
        tanggal_mulai: "desc",
      },
    });
    expect(result).toEqual(mockList);
  });

  // Test untuk getAllHistoryJabatan dengan filter user_nip
  test("getAllHistoryJabatan harus memfilter berdasarkan user_nip", async () => {
    const mockFiltered = [
      {
        id: "history-1",
        user_nip: "123456789012345678",
        kd_jabatan: "jabatan-1",
        tanggal_mulai: new Date(),
        tanggal_akhir: null,
        user: { nip: "123456789012345678", nama: "John Doe" },
        jabatan: { kd_jabatan: "jabatan-1", nama_jabatan: "Kepala Seksi" },
      },
    ];

    prisma.historyJabatan.findMany.mockResolvedValue(mockFiltered);

    const result = await historyJabatanService.getAllHistoryJabatan("123456789012345678");

    expect(prisma.historyJabatan.findMany).toHaveBeenCalledWith({
      where: { user_nip: "123456789012345678" },
      include: {
        user: true,
        jabatan: true,
      },
      orderBy: {
        tanggal_mulai: "desc",
      },
    });
    expect(result).toEqual(mockFiltered);
  });

  // Test untuk getAllHistoryJabatan dengan filter kd_jabatan
  test("getAllHistoryJabatan harus memfilter berdasarkan kd_jabatan", async () => {
    const mockFiltered = [
      {
        id: "history-1",
        user_nip: "123456789012345678",
        kd_jabatan: "jabatan-1",
        tanggal_mulai: new Date(),
        tanggal_akhir: null,
        user: { nip: "123456789012345678", nama: "John Doe" },
        jabatan: { kd_jabatan: "jabatan-1", nama_jabatan: "Kepala Seksi" },
      },
    ];

    prisma.historyJabatan.findMany.mockResolvedValue(mockFiltered);

    const result = await historyJabatanService.getAllHistoryJabatan(null, "jabatan-1");

    expect(prisma.historyJabatan.findMany).toHaveBeenCalledWith({
      where: { kd_jabatan: "jabatan-1" },
      include: {
        user: true,
        jabatan: true,
      },
      orderBy: {
        tanggal_mulai: "desc",
      },
    });
    expect(result).toEqual(mockFiltered);
  });

  // Test untuk updateHistoryJabatan
  test("updateHistoryJabatan harus memperbarui history jabatan", async () => {
    const id = "history-1";
    const updateData = {
      tanggal_akhir: new Date(),
    };

    const updatedHistoryJabatan = {
      id: "history-1",
      user_nip: "123456789012345678",
      kd_jabatan: "jabatan-1",
      tanggal_mulai: new Date(),
      tanggal_akhir: updateData.tanggal_akhir,
      user: { nip: "123456789012345678", nama: "John Doe" },
      jabatan: { kd_jabatan: "jabatan-1", nama_jabatan: "Kepala Seksi" },
    };

    prisma.historyJabatan.update.mockResolvedValue(updatedHistoryJabatan);

    const result = await historyJabatanService.updateHistoryJabatan(id, updateData);

    expect(prisma.historyJabatan.update).toHaveBeenCalledWith({
      where: { id },
      data: updateData,
      include: {
        user: true,
        jabatan: true,
      },
    });
    expect(result).toEqual(updatedHistoryJabatan);
  });

  // Test untuk deleteHistoryJabatan
  test("deleteHistoryJabatan harus menghapus history jabatan berdasarkan ID", async () => {
    const id = "history-1";
    const deletedHistoryJabatan = {
      id: "history-1",
      user_nip: "123456789012345678",
      kd_jabatan: "jabatan-1",
      tanggal_mulai: new Date(),
      tanggal_akhir: null,
      user: { nip: "123456789012345678", nama: "John Doe" },
      jabatan: { kd_jabatan: "jabatan-1", nama_jabatan: "Kepala Seksi" },
    };

    prisma.historyJabatan.delete.mockResolvedValue(deletedHistoryJabatan);

    const result = await historyJabatanService.deleteHistoryJabatan(id);

    expect(prisma.historyJabatan.delete).toHaveBeenCalledWith({
      where: { id },
      include: {
        user: true,
        jabatan: true,
      },
    });
    expect(result).toEqual(deletedHistoryJabatan);
  });
});