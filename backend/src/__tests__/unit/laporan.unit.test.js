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
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("createLaporan", () => {
    it("harus membuat laporan baru", async () => {
      const mockData = {
        judul: "Laporan Test",
        deskripsi: "Deskripsi laporan test",
        user_nip: "123456789012345678",
        image: "image.jpg",
        file_path: "path/to/file",
      };

      const mockCreatedLaporan = {
        kd_laporan: "laporan-1",
        ...mockData,
        created_at: new Date(),
        updated_at: new Date(),
      };

      prisma.laporan.create.mockResolvedValue(mockCreatedLaporan);

      const result = await laporanService.createLaporan(mockData);

      expect(prisma.laporan.create).toHaveBeenCalledWith({
        data: mockData,
      });
      expect(result).toEqual(mockCreatedLaporan);
    });
  });

  describe("getLaporanById", () => {
    it("harus mengembalikan laporan berdasarkan kode", async () => {
      const mockLaporan = {
        kd_laporan: "laporan-1",
        judul: "Laporan Test",
        deskripsi: "Deskripsi laporan test",
        user_nip: "123456789012345678",
        image: "image.jpg",
        file_path: "path/to/file",
        created_at: new Date(),
        updated_at: new Date(),
        user: {
          nip: "123456789012345678",
          nama: "Test User",
          role: "user",
          image: "user.jpg",
        },
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

    it("harus melempar error ketika laporan tidak ditemukan", async () => {
      prisma.laporan.findUnique.mockResolvedValue(null);

      await expect(
        laporanService.getLaporanById("laporan-tidak-ada")
      ).rejects.toThrow("Laporan tidak ditemukan");

      expect(prisma.laporan.findUnique).toHaveBeenCalledWith({
        where: { kd_laporan: "laporan-tidak-ada" },
        include: {
          user: true,
        },
      });
    });
  });

  describe("getAllLaporan", () => {
    it("harus mengembalikan semua laporan", async () => {
      const mockLaporan = [
        {
          kd_laporan: "laporan-1",
          judul: "Laporan Test",
          deskripsi: "Deskripsi laporan test",
          user_nip: "123456789012345678",
          image: "image.jpg",
          file_path: "path/to/file",
          created_at: new Date(),
          updated_at: new Date(),
          user: {
            nip: "123456789012345678",
            nama: "Test User",
            role: "user",
            image: "user.jpg",
          },
        },
      ];

      prisma.laporan.findMany.mockResolvedValue(mockLaporan);

      const result = await laporanService.getAllLaporan({});

      expect(prisma.laporan.findMany).toHaveBeenCalledWith({
        where: {},
        include: {
          user: true,
        },
        orderBy: {
          created_at: "desc",
        },
      });
      expect(result).toEqual(mockLaporan);
    });

    it("harus memfilter laporan berdasarkan parameter", async () => {
      const mockLaporan = [
        {
          kd_laporan: "laporan-1",
          judul: "Laporan Test",
          deskripsi: "Deskripsi laporan test",
          user_nip: "123456789012345678",
          image: "image.jpg",
          file_path: "path/to/file",
          created_at: new Date(),
          updated_at: new Date(),
          user: {
            nip: "123456789012345678",
            nama: "Test User",
            role: "user",
            image: "user.jpg",
          },
        },
      ];

      prisma.laporan.findMany.mockResolvedValue(mockLaporan);

      const result = await laporanService.getAllLaporan({
        kd_laporan: "laporan-1",
        judul_laporan: "Laporan Test",
        user_nip: "123456789012345678",
      });

      expect(prisma.laporan.findMany).toHaveBeenCalledWith({
        where: {
          kd_laporan: "laporan-1",
          judul_laporan: {
            contains: "Laporan Test",
          },
          user_nip: "123456789012345678",
        },
        include: {
          user: true,
        },
        orderBy: {
          created_at: "desc",
        },
      });
      expect(result).toEqual(mockLaporan);
    });
  });

  describe("updateLaporan", () => {
    it("harus memperbarui laporan", async () => {
      const updateData = {
        judul: "Laporan Test Updated",
        deskripsi: "Deskripsi laporan test updated",
      };

      const mockUpdatedLaporan = {
        kd_laporan: "laporan-1",
        ...updateData,
        user_nip: "123456789012345678",
        image: "image.jpg",
        file_path: "path/to/file",
        created_at: new Date(),
        updated_at: new Date(),
      };

      prisma.laporan.findUnique.mockResolvedValue({ kd_laporan: "laporan-1" });
      prisma.laporan.update.mockResolvedValue(mockUpdatedLaporan);

      const result = await laporanService.updateLaporan(
        "laporan-1",
        updateData
      );

      expect(prisma.laporan.update).toHaveBeenCalledWith({
        where: { kd_laporan: "laporan-1" },
        data: updateData,
      });
      expect(result).toEqual(mockUpdatedLaporan);
    });

    it("harus melempar error ketika laporan tidak ditemukan", async () => {
      prisma.laporan.findUnique.mockResolvedValue(null);

      await expect(
        laporanService.updateLaporan("laporan-tidak-ada", {
          judul: "Laporan Test Updated",
        })
      ).rejects.toThrow("Laporan tidak ditemukan");
    });
  });

  describe("deleteLaporan", () => {
    it("harus menghapus laporan", async () => {
      const mockDeletedLaporan = {
        kd_laporan: "laporan-1",
        judul: "Laporan Test",
        deskripsi: "Deskripsi laporan test",
        user_nip: "123456789012345678",
        image: "image.jpg",
        file_path: "path/to/file",
        created_at: new Date(),
        updated_at: new Date(),
      };

      prisma.laporan.findUnique.mockResolvedValue({ kd_laporan: "laporan-1" });
      prisma.laporan.delete.mockResolvedValue(mockDeletedLaporan);

      const result = await laporanService.deleteLaporan("laporan-1");

      expect(prisma.laporan.delete).toHaveBeenCalledWith({
        where: { kd_laporan: "laporan-1" },
      });
      expect(result).toEqual(mockDeletedLaporan);
    });

    it("harus melempar error ketika laporan tidak ditemukan", async () => {
      prisma.laporan.findUnique.mockResolvedValue(null);

      await expect(
        laporanService.deleteLaporan("laporan-tidak-ada")
      ).rejects.toThrow("Laporan tidak ditemukan");
    });
  });

  describe("getLaporanByUserNip", () => {
    it("harus mengembalikan laporan berdasarkan NIP user", async () => {
      const mockLaporan = [
        {
          kd_laporan: "laporan-1",
          judul: "Laporan Test",
          deskripsi: "Deskripsi laporan test",
          user_nip: "123456789012345678",
          image: "image.jpg",
          file_path: "path/to/file",
          created_at: new Date(),
          updated_at: new Date(),
          user: {
            nip: "123456789012345678",
            nama: "Test User",
            jabatan: {
              kd_jabatan: "J001",
              nama_jabatan: "Staff",
            },
          },
        },
      ];

      prisma.laporan.findMany.mockResolvedValue(mockLaporan);

      const result =
        await laporanService.getLaporanByUserNip("123456789012345678");

      expect(prisma.laporan.findMany).toHaveBeenCalledWith({
        where: { user_nip: "123456789012345678" },
        include: {
          user: {
            select: {
              nip: true,
              nama: true,
              jabatan: true,
            },
          },
        },
        orderBy: {
          created_at: "desc",
        },
      });
      expect(result).toEqual(mockLaporan);
    });
  });
});
