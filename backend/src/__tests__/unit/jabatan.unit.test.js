const prisma = require("../../libs/prisma");
const jabatanService = require("../../services/jabatan.service");

// Mock semua fungsi Prisma yang digunakan
jest.mock("../../libs/prisma", () => ({
  jabatan: {
    create: jest.fn(),
    findUnique: jest.fn(),
    findMany: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
}));

describe("Jabatan Service", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("createJabatan should create a new jabatan", async () => {
    const mockData = { kd_jabatan: "001", nama_jabatan: "Kepala" };
    prisma.jabatan.create.mockResolvedValue(mockData);

    const result = await jabatanService.createJabatan(mockData);

    expect(prisma.jabatan.create).toHaveBeenCalledWith({ data: mockData });
    expect(result).toEqual(mockData);
  });

  test("getJabatan should return jabatan by kd_jabatan", async () => {
    const mockJabatan = { kd_jabatan: "001", nama_jabatan: "Kepala" };
    prisma.jabatan.findUnique.mockResolvedValue(mockJabatan);

    const result = await jabatanService.getJabatan("001");

    expect(prisma.jabatan.findUnique).toHaveBeenCalledWith({
      where: { kd_jabatan: "001" },
    });
    expect(result).toEqual(mockJabatan);
  });

  test("getAllJabatan should return all jabatan", async () => {
    const mockList = [
      { kd_jabatan: "001", nama_jabatan: "Kepala" },
      { kd_jabatan: "002", nama_jabatan: "Staf" },
    ];
    prisma.jabatan.findMany.mockResolvedValue(mockList);

    const result = await jabatanService.getAllJabatan();

    expect(prisma.jabatan.findMany).toHaveBeenCalled();
    expect(result).toEqual(mockList);
  });

  test("getAllJabatan should filter by kd_jabatan", async () => {
    const mockFiltered = [{ kd_jabatan: "001", nama_jabatan: "Kepala" }];
    prisma.jabatan.findMany.mockResolvedValue(mockFiltered);

    const result = await jabatanService.getAllJabatan("001");

    expect(prisma.jabatan.findMany).toHaveBeenCalledWith({
      where: { kd_jabatan: "001" },
    });
    expect(result).toEqual(mockFiltered);
  });

  test("updateJabatan should update nama_jabatan", async () => {
    const updated = { kd_jabatan: "001", nama_jabatan: "Direktur" };
    prisma.jabatan.update.mockResolvedValue(updated);

    const result = await jabatanService.updateJabatan("001", "Direktur");

    expect(prisma.jabatan.update).toHaveBeenCalledWith({
      where: { kd_jabatan: "001" },
      data: { nama_jabatan: "Direktur" },
    });
    expect(result).toEqual(updated);
  });

  test("deleteJabatan should delete a jabatan by kd_jabatan", async () => {
    const deleted = { kd_jabatan: "001", nama_jabatan: "Direktur" };
    prisma.jabatan.delete.mockResolvedValue(deleted);

    const result = await jabatanService.deleteJabatan("001");

    expect(prisma.jabatan.delete).toHaveBeenCalledWith({
      where: { kd_jabatan: "001" },
    });
    expect(result).toEqual(deleted);
  });
});
