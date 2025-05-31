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
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("createPengumpulanTugas", () => {
    it("harus membuat pengumpulan tugas baru", async () => {
      const mockData = {
        kd_tugas: "tugas-1",
        user_nip: "123456789012345678",
        tanggal_pengumpulan: new Date(),
        image: "image.jpg",
        file_path: "path/to/file",
        catatan: "Catatan tugas",
        status: "menunggu",
      };

      const mockResult = {
        ...mockData,
        kd_pengumpulan_tugas: "pengumpulan-1",
        created_at: new Date(),
        updated_at: new Date(),
      };

      prisma.pengumpulanTugas.create.mockResolvedValue(mockResult);

      const result =
        await pengumpulanTugasService.createPengumpulanTugas(mockData);

      expect(prisma.pengumpulanTugas.create).toHaveBeenCalledWith({
        data: {
          ...mockData,
          tanggal_pengumpulan: expect.any(Date),
        },
        include: {
          tugas: true,
          user: {
            select: {
              nip: true,
              nama: true,
              jabatan: true,
            },
          },
        },
      });
      expect(result).toEqual(mockResult);
    });
  });

  describe("getPengumpulanTugasById", () => {
    it("harus mengembalikan pengumpulan tugas berdasarkan kode", async () => {
      const mockPengumpulanTugas = {
        kd_pengumpulan_tugas: "pengumpulan-1",
        kd_tugas: "tugas-1",
        user_nip: "123456789012345678",
        tanggal_pengumpulan: new Date(),
        image: "image.jpg",
        file_path: "path/to/file",
        catatan: "Catatan tugas",
        status: "menunggu",
        created_at: new Date(),
        updated_at: new Date(),
      };

      prisma.pengumpulanTugas.findUnique.mockResolvedValue(
        mockPengumpulanTugas
      );

      const result =
        await pengumpulanTugasService.getPengumpulanTugasById("pengumpulan-1");

      expect(prisma.pengumpulanTugas.findUnique).toHaveBeenCalledWith({
        where: { kd_pengumpulan_tugas: "pengumpulan-1" },
        include: {
          tugas: true,
          user: {
            select: {
              nip: true,
              nama: true,
              jabatan: true,
            },
          },
        },
      });
      expect(result).toEqual(mockPengumpulanTugas);
    });

    it("harus melempar error ketika pengumpulan tugas tidak ditemukan", async () => {
      prisma.pengumpulanTugas.findUnique.mockResolvedValue(null);

      await expect(
        pengumpulanTugasService.getPengumpulanTugasById("pengumpulan-tidak-ada")
      ).rejects.toThrow("Pengumpulan tugas tidak ditemukan");

      expect(prisma.pengumpulanTugas.findUnique).toHaveBeenCalledWith({
        where: { kd_pengumpulan_tugas: "pengumpulan-tidak-ada" },
        include: {
          tugas: true,
          user: {
            select: {
              nip: true,
              nama: true,
              jabatan: true,
            },
          },
        },
      });
    });
  });

  describe("getAllPengumpulanTugas", () => {
    it("harus mengembalikan semua pengumpulan tugas", async () => {
      const mockPengumpulanTugas = [
        {
          kd_pengumpulan_tugas: "pengumpulan-1",
          kd_tugas: "tugas-1",
          user_nip: "123456789012345678",
          tanggal_pengumpulan: new Date(),
          image: "image.jpg",
          file_path: "path/to/file",
          catatan: "Catatan tugas",
          status: "menunggu",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ];

      prisma.pengumpulanTugas.findMany.mockResolvedValue(mockPengumpulanTugas);

      const result = await pengumpulanTugasService.getAllPengumpulanTugas();

      expect(prisma.pengumpulanTugas.findMany).toHaveBeenCalledWith({
        where: {},
        include: {
          tugas: true,
          user: {
            select: {
              nip: true,
              nama: true,
              jabatan: true,
            },
          },
        },
        orderBy: {
          tanggal_pengumpulan: "desc",
        },
      });
      expect(result).toEqual(mockPengumpulanTugas);
    });

    it("harus memfilter berdasarkan parameter", async () => {
      const filter = {
        kd_tugas: "tugas-1",
        user_nip: "123456789012345678",
        status: "menunggu",
      };

      const mockPengumpulanTugas = [
        {
          kd_pengumpulan_tugas: "pengumpulan-1",
          ...filter,
          tanggal_pengumpulan: new Date(),
          image: "image.jpg",
          file_path: "path/to/file",
          catatan: "Catatan tugas",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ];

      prisma.pengumpulanTugas.findMany.mockResolvedValue(mockPengumpulanTugas);

      const result =
        await pengumpulanTugasService.getAllPengumpulanTugas(filter);

      expect(prisma.pengumpulanTugas.findMany).toHaveBeenCalledWith({
        where: filter,
        include: {
          tugas: true,
          user: {
            select: {
              nip: true,
              nama: true,
              jabatan: true,
            },
          },
        },
        orderBy: {
          tanggal_pengumpulan: "desc",
        },
      });
      expect(result).toEqual(mockPengumpulanTugas);
    });
  });

  describe("updatePengumpulanTugas", () => {
    it("harus memperbarui pengumpulan tugas", async () => {
      const kd_pengumpulan_tugas = "pengumpulan-1";
      const updateData = {
        catatan: "Catatan diperbarui",
        status: "disetujui",
      };

      const mockUpdatedPengumpulanTugas = {
        kd_pengumpulan_tugas,
        kd_tugas: "tugas-1",
        user_nip: "123456789012345678",
        tanggal_pengumpulan: new Date(),
        image: "image.jpg",
        file_path: "path/to/file",
        ...updateData,
        created_at: new Date(),
        updated_at: new Date(),
      };

      prisma.pengumpulanTugas.findUnique.mockResolvedValue({
        kd_pengumpulan_tugas,
      });
      prisma.pengumpulanTugas.update.mockResolvedValue(
        mockUpdatedPengumpulanTugas
      );

      const result = await pengumpulanTugasService.updatePengumpulanTugas(
        kd_pengumpulan_tugas,
        updateData
      );

      expect(prisma.pengumpulanTugas.update).toHaveBeenCalledWith({
        where: { kd_pengumpulan_tugas },
        data: updateData,
        include: {
          tugas: true,
          user: {
            select: {
              nip: true,
              nama: true,
              jabatan: true,
            },
          },
        },
      });
      expect(result).toEqual(mockUpdatedPengumpulanTugas);
    });
  });

  describe("deletePengumpulanTugas", () => {
    it("harus menghapus pengumpulan tugas", async () => {
      const kd_pengumpulan_tugas = "pengumpulan-1";
      const mockDeletedPengumpulanTugas = {
        kd_pengumpulan_tugas,
        kd_tugas: "tugas-1",
        user_nip: "123456789012345678",
        tanggal_pengumpulan: new Date(),
        image: "image.jpg",
        file_path: "path/to/file",
        catatan: "Catatan tugas",
        status: "menunggu",
        created_at: new Date(),
        updated_at: new Date(),
      };

      prisma.pengumpulanTugas.findUnique.mockResolvedValue({
        kd_pengumpulan_tugas,
      });
      prisma.pengumpulanTugas.delete.mockResolvedValue(
        mockDeletedPengumpulanTugas
      );

      const result =
        await pengumpulanTugasService.deletePengumpulanTugas(
          kd_pengumpulan_tugas
        );

      expect(prisma.pengumpulanTugas.delete).toHaveBeenCalledWith({
        where: { kd_pengumpulan_tugas },
        include: {
          tugas: true,
          user: {
            select: {
              nip: true,
              nama: true,
              jabatan: true,
            },
          },
        },
      });
      expect(result).toEqual(mockDeletedPengumpulanTugas);
    });
  });

  describe("getPengumpulanTugasByTugasId", () => {
    it("harus mengembalikan pengumpulan tugas berdasarkan kode tugas", async () => {
      const kd_tugas = "tugas-1";
      const mockPengumpulanTugas = [
        {
          kd_pengumpulan_tugas: "pengumpulan-1",
          kd_tugas,
          user_nip: "123456789012345678",
          tanggal_pengumpulan: new Date(),
          image: "image.jpg",
          file_path: "path/to/file",
          catatan: "Catatan tugas",
          status: "menunggu",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ];

      prisma.pengumpulanTugas.findMany.mockResolvedValue(mockPengumpulanTugas);

      const result =
        await pengumpulanTugasService.getPengumpulanTugasByTugasId(kd_tugas);

      expect(prisma.pengumpulanTugas.findMany).toHaveBeenCalledWith({
        where: { kd_tugas },
        include: {
          tugas: true,
          user: {
            select: {
              nip: true,
              nama: true,
              jabatan: true,
            },
          },
        },
        orderBy: {
          tanggal_pengumpulan: "desc",
        },
      });
      expect(result).toEqual(mockPengumpulanTugas);
    });
  });

  describe("getPengumpulanTugasByUserNip", () => {
    it("harus mengembalikan pengumpulan tugas berdasarkan NIP user", async () => {
      const user_nip = "123456789012345678";
      const mockPengumpulanTugas = [
        {
          kd_pengumpulan_tugas: "pengumpulan-1",
          kd_tugas: "tugas-1",
          user_nip,
          tanggal_pengumpulan: new Date(),
          image: "image.jpg",
          file_path: "path/to/file",
          catatan: "Catatan tugas",
          status: "menunggu",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ];

      prisma.pengumpulanTugas.findMany.mockResolvedValue(mockPengumpulanTugas);

      const result =
        await pengumpulanTugasService.getPengumpulanTugasByUserNip(user_nip);

      expect(prisma.pengumpulanTugas.findMany).toHaveBeenCalledWith({
        where: { user_nip },
        include: {
          tugas: true,
          user: {
            select: {
              nip: true,
              nama: true,
              jabatan: true,
            },
          },
        },
        orderBy: {
          tanggal_pengumpulan: "desc",
        },
      });
      expect(result).toEqual(mockPengumpulanTugas);
    });
  });
});
