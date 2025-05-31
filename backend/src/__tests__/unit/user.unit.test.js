const userService = require("../../services/user.service");
const prisma = require("../../libs/prisma");

jest.mock("../../libs/prisma", () => ({
  user: {
    create: jest.fn(),
    findUnique: jest.fn(),
    findMany: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
}));

describe("User Service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("createUser", () => {
    it("harus membuat user baru", async () => {
      const mockUser = {
        nip: "123456789012345678",
        nama: "Test User",
        password: "hashedPassword",
        role: "user",
        kd_jabatan: "J001",
        nip_atasan: "876543210987654321",
        image: "test.jpg",
      };

      const mockCreatedUser = {
        ...mockUser,
        atasan: {
          nip: "876543210987654321",
          nama: "Atasan Test",
          jabatan: {
            kd_jabatan: "J002",
            nama_jabatan: "Kepala Seksi",
          },
        },
        jabatan: {
          kd_jabatan: "J001",
          nama_jabatan: "Staff",
        },
      };

      prisma.user.create.mockResolvedValue(mockCreatedUser);

      const result = await userService.createUser(mockUser);

      expect(prisma.user.create).toHaveBeenCalledWith({
        data: mockUser,
        include: {
          jabatan: true,
          atasan: {
            select: {
              nip: true,
              nama: true,
              jabatan: true,
            },
          },
        },
      });
      expect(result).toEqual({
        nip: mockCreatedUser.nip,
        nama: mockCreatedUser.nama,
        role: mockCreatedUser.role,
        kd_jabatan: mockCreatedUser.kd_jabatan,
        nip_atasan: mockCreatedUser.nip_atasan,
        image: mockCreatedUser.image,
        jabatan: mockCreatedUser.jabatan,
        atasan: mockCreatedUser.atasan,
      });
    });
  });

  describe("getUser", () => {
    it("harus mengembalikan user berdasarkan NIP", async () => {
      const mockUser = {
        nip: "123456789012345678",
        nama: "Test User",
        role: "user",
        kd_jabatan: "J001",
        nip_atasan: "876543210987654321",
        image: "test.jpg",
        atasan: {
          nip: "876543210987654321",
          nama: "Atasan Test",
          jabatan: {
            kd_jabatan: "J002",
            nama_jabatan: "Kepala Seksi",
          },
        },
        bawahan: [],
        jabatan: {
          kd_jabatan: "J001",
          nama_jabatan: "Staff",
        },
      };

      prisma.user.findUnique.mockResolvedValue(mockUser);

      const result = await userService.getUser("123456789012345678");

      expect(prisma.user.findUnique).toHaveBeenCalledWith({
        where: { nip: "123456789012345678" },
        include: {
          jabatan: true,
          atasan: {
            select: {
              nip: true,
              nama: true,
              jabatan: true,
            },
          },
          bawahan: {
            select: {
              nip: true,
              nama: true,
              jabatan: true,
            },
          },
        },
      });
      expect(result).toEqual(mockUser);
    });

    it("harus mengembalikan null jika user tidak ditemukan", async () => {
      prisma.user.findUnique.mockResolvedValue(null);

      const result = await userService.getUser("123456789012345678");

      expect(prisma.user.findUnique).toHaveBeenCalledWith({
        where: { nip: "123456789012345678" },
        include: {
          jabatan: true,
          atasan: {
            select: {
              nip: true,
              nama: true,
              jabatan: true,
            },
          },
          bawahan: {
            select: {
              nip: true,
              nama: true,
              jabatan: true,
            },
          },
        },
      });
      expect(result).toBeNull();
    });
  });

  describe("getAllUser", () => {
    it("harus memfilter user berdasarkan parameter", async () => {
      const mockUsers = [
        {
          nip: "123456789012345678",
          nama: "Test User",
          role: "user",
          kd_jabatan: "J001",
          nip_atasan: "876543210987654321",
          image: "test.jpg",
          atasan: {
            nip: "876543210987654321",
            nama: "Atasan Test",
            jabatan: {
              kd_jabatan: "J002",
              nama_jabatan: "Kepala Seksi",
            },
          },
          bawahan: [],
          jabatan: {
            kd_jabatan: "J001",
            nama_jabatan: "Staff",
          },
        },
      ];

      prisma.user.findMany.mockResolvedValue(mockUsers);

      const result = await userService.getAllUser(
        "123456789012345678",
        "Test User",
        "user",
        "J001",
        "876543210987654321"
      );

      expect(prisma.user.findMany).toHaveBeenCalledWith({
        where: {
          OR: [
            { nip: { contains: "123456789012345678" } },
            { nama: { contains: "Test User" } },
            { kd_jabatan: { contains: "J001" } },
            { role: "user" },
            { nip_atasan: "876543210987654321" },
          ],
        },
        include: {
          jabatan: true,
          atasan: {
            select: {
              nip: true,
              nama: true,
              jabatan: true,
            },
          },
          bawahan: {
            select: {
              nip: true,
              nama: true,
              jabatan: true,
            },
          },
        },
      });
      expect(result).toEqual(mockUsers);
    });
  });

  describe("updateUser", () => {
    it("harus memperbarui user", async () => {
      const mockUser = {
        nip: "123456789012345678",
        nama: "Test User Updated",
        role: "user",
        kd_jabatan: "J001",
        nip_atasan: "876543210987654321",
        image: "test.jpg",
        atasan: {
          nip: "876543210987654321",
          nama: "Atasan Test",
          jabatan: {
            kd_jabatan: "J002",
            nama_jabatan: "Kepala Seksi",
          },
        },
        bawahan: [],
        jabatan: {
          kd_jabatan: "J001",
          nama_jabatan: "Staff",
        },
      };

      prisma.user.update.mockResolvedValue(mockUser);

      const result = await userService.updateUser("123456789012345678", {
        nama: "Test User Updated",
      });

      expect(prisma.user.update).toHaveBeenCalledWith({
        where: { nip: "123456789012345678" },
        data: { nama: "Test User Updated" },
        include: {
          jabatan: true,
          atasan: {
            select: {
              nip: true,
              nama: true,
              jabatan: true,
            },
          },
          bawahan: {
            select: {
              nip: true,
              nama: true,
              jabatan: true,
            },
          },
        },
      });
      expect(result).toEqual(mockUser);
    });
  });

  describe("deleteUser", () => {
    it("harus menghapus user", async () => {
      const mockUser = {
        nip: "123456789012345678",
        nama: "Test User",
        role: "user",
        kd_jabatan: "J001",
        nip_atasan: "876543210987654321",
        image: "test.jpg",
        atasan: {
          nip: "876543210987654321",
          nama: "Atasan Test",
          jabatan: {
            kd_jabatan: "J002",
            nama_jabatan: "Kepala Seksi",
          },
        },
        bawahan: [],
        jabatan: {
          kd_jabatan: "J001",
          nama_jabatan: "Staff",
        },
      };

      prisma.user.delete.mockResolvedValue(mockUser);

      const result = await userService.deleteUser("123456789012345678");

      expect(prisma.user.delete).toHaveBeenCalledWith({
        where: { nip: "123456789012345678" },
        include: {
          jabatan: true,
          atasan: {
            select: {
              nip: true,
              nama: true,
              jabatan: true,
            },
          },
          bawahan: {
            select: {
              nip: true,
              nama: true,
              jabatan: true,
            },
          },
        },
      });
      expect(result).toEqual(mockUser);
    });
  });
});
