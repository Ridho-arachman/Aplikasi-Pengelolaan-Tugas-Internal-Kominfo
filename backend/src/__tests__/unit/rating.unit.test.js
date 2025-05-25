const prisma = require("../../libs/prisma");
const ratingService = require("../../services/rating.service");

// Mock semua fungsi Prisma yang digunakan
jest.mock("../../libs/prisma", () => ({
  rating: {
    create: jest.fn(),
    findUnique: jest.fn(),
    findFirst: jest.fn(),
    findMany: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
}));

describe("Rating Service", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test untuk createRating
  test("createRating harus membuat rating baru", async () => {
    const mockData = {
      kd_rating: "rating-1",
      kd_pengumpulan_tugas: "pengumpulan-1",
      nilai: 90,
      komentar: "Bagus sekali",
      created_at: new Date(),
      updated_at: new Date(),
    };

    const mockIncludeData = {
      ...mockData,
      pengumpulanTugas: {
        kd_pengumpulan_tugas: "pengumpulan-1",
        tugas: { kd_tugas: "tugas-1", judul: "Tugas Test" },
        user: { nip: "123456789012345678", nama: "John Doe" },
      },
    };

    prisma.rating.create.mockResolvedValue(mockIncludeData);

    const result = await ratingService.createRating(mockData);

    expect(prisma.rating.create).toHaveBeenCalledWith({
      data: mockData,
      include: {
        pengumpulanTugas: {
          include: {
            tugas: true,
            user: true,
          },
        },
      },
    });
    expect(result).toEqual(mockIncludeData);
  });

  // Test untuk getRatingById
  test("getRatingById harus mengembalikan rating berdasarkan kode", async () => {
    const mockRating = {
      kd_rating: "rating-1",
      kd_pengumpulan_tugas: "pengumpulan-1",
      nilai: 90,
      komentar: "Bagus sekali",
      pengumpulanTugas: {
        kd_pengumpulan_tugas: "pengumpulan-1",
        tugas: { kd_tugas: "tugas-1", judul: "Tugas Test" },
        user: { nip: "123456789012345678", nama: "John Doe" },
      },
    };

    prisma.rating.findUnique.mockResolvedValue(mockRating);

    const result = await ratingService.getRatingById("rating-1");

    expect(prisma.rating.findUnique).toHaveBeenCalledWith({
      where: { kd_rating: "rating-1" },
      include: {
        pengumpulanTugas: {
          include: {
            tugas: true,
            user: true,
          },
        },
      },
    });
    expect(result).toEqual(mockRating);
  });

  // Test untuk getRatingById ketika rating tidak ditemukan
  test("getRatingById harus melempar error ketika rating tidak ditemukan", async () => {
    prisma.rating.findUnique.mockResolvedValue(null);

    await expect(ratingService.getRatingById("rating-tidak-ada")).rejects.toThrow(
      "Rating tidak ditemukan"
    );

    expect(prisma.rating.findUnique).toHaveBeenCalledWith({
      where: { kd_rating: "rating-tidak-ada" },
      include: {
        pengumpulanTugas: {
          include: {
            tugas: true,
            user: true,
          },
        },
      },
    });
  });

  // Test untuk getAllRating tanpa filter
  test("getAllRating harus mengembalikan semua rating", async () => {
    const mockList = [
      {
        kd_rating: "rating-1",
        kd_pengumpulan_tugas: "pengumpulan-1",
        nilai: 90,
        komentar: "Bagus sekali",
        pengumpulanTugas: {
          kd_pengumpulan_tugas: "pengumpulan-1",
          tugas: { kd_tugas: "tugas-1", judul: "Tugas Test 1" },
          user: { nip: "123456789012345678", nama: "John Doe" },
        },
      },
      {
        kd_rating: "rating-2",
        kd_pengumpulan_tugas: "pengumpulan-2",
        nilai: 75,
        komentar: "Cukup baik",
        pengumpulanTugas: {
          kd_pengumpulan_tugas: "pengumpulan-2",
          tugas: { kd_tugas: "tugas-2", judul: "Tugas Test 2" },
          user: { nip: "876543210987654321", nama: "Jane Doe" },
        },
      },
    ];

    prisma.rating.findMany.mockResolvedValue(mockList);

    const result = await ratingService.getAllRating();

    expect(prisma.rating.findMany).toHaveBeenCalledWith({
      where: {},
      include: {
        pengumpulanTugas: {
          include: {
            tugas: true,
            user: true,
          },
        },
      },
      orderBy: {
        created_at: "desc",
      },
    });
    expect(result).toEqual(mockList);
  });

  // Test untuk getAllRating dengan filter
  test("getAllRating harus memfilter berdasarkan parameter", async () => {
    const mockFiltered = [
      {
        kd_rating: "rating-1",
        kd_pengumpulan_tugas: "pengumpulan-1",
        nilai: 90,
        komentar: "Bagus sekali",
        pengumpulanTugas: {
          kd_pengumpulan_tugas: "pengumpulan-1",
          tugas: { kd_tugas: "tugas-1", judul: "Tugas Test 1" },
          user: { nip: "123456789012345678", nama: "John Doe" },
        },
      },
    ];

    prisma.rating.findMany.mockResolvedValue(mockFiltered);

    const filter = {
      kd_pengumpulan_tugas: "pengumpulan-1",
      nilai: 90,
    };

    const result = await ratingService.getAllRating(filter);

    expect(prisma.rating.findMany).toHaveBeenCalledWith({
      where: {
        kd_pengumpulan_tugas: "pengumpulan-1",
        nilai: 90,
      },
      include: {
        pengumpulanTugas: {
          include: {
            tugas: true,
            user: true,
          },
        },
      },
      orderBy: {
        created_at: "desc",
      },
    });
    expect(result).toEqual(mockFiltered);
  });

  // Test untuk updateRating
  test("updateRating harus memperbarui rating", async () => {
    const kd_rating = "rating-1";
    const updateData = {
      nilai: 95,
      komentar: "Sangat bagus sekali",
    };

    const existingRating = {
      kd_rating: "rating-1",
      kd_pengumpulan_tugas: "pengumpulan-1",
      nilai: 90,
      komentar: "Bagus sekali",
    };

    const updatedRating = {
      ...existingRating,
      ...updateData,
      pengumpulanTugas: {
        kd_pengumpulan_tugas: "pengumpulan-1",
        tugas: { kd_tugas: "tugas-1", judul: "Tugas Test" },
        user: { nip: "123456789012345678", nama: "John Doe" },
      },
    };

    prisma.rating.findUnique.mockResolvedValue(existingRating);
    prisma.rating.update.mockResolvedValue(updatedRating);

    const result = await ratingService.updateRating(kd_rating, updateData);

    expect(prisma.rating.findUnique).toHaveBeenCalledWith({
      where: { kd_rating },
    });
    expect(prisma.rating.update).toHaveBeenCalledWith({
      where: { kd_rating },
      data: updateData,
      include: {
        pengumpulanTugas: {
          include: {
            tugas: true,
            user: true,
          },
        },
      },
    });
    expect(result).toEqual(updatedRating);
  });

  // Test untuk updateRating ketika rating tidak ditemukan
  test("updateRating harus melempar error ketika rating tidak ditemukan", async () => {
    const kd_rating = "rating-tidak-ada";
    const updateData = {
      nilai: 95,
    };

    prisma.rating.findUnique.mockResolvedValue(null);

    await expect(ratingService.updateRating(kd_rating, updateData)).rejects.toThrow(
      "Rating tidak ditemukan"
    );

    expect(prisma.rating.findUnique).toHaveBeenCalledWith({
      where: { kd_rating },
    });
    expect(prisma.rating.update).not.toHaveBeenCalled();
  });

  // Test untuk deleteRating
  test("deleteRating harus menghapus rating", async () => {
    const kd_rating = "rating-1";
    const existingRating = {
      kd_rating: "rating-1",
      kd_pengumpulan_tugas: "pengumpulan-1",
      nilai: 90,
      komentar: "Bagus sekali",
    };

    const deletedRating = {
      ...existingRating,
      pengumpulanTugas: {
        kd_pengumpulan_tugas: "pengumpulan-1",
        tugas: { kd_tugas: "tugas-1", judul: "Tugas Test" },
        user: { nip: "123456789012345678", nama: "John Doe" },
      },
    };

    prisma.rating.findUnique.mockResolvedValue(existingRating);
    prisma.rating.delete.mockResolvedValue(deletedRating);

    const result = await ratingService.deleteRating(kd_rating);

    expect(prisma.rating.findUnique).toHaveBeenCalledWith({
      where: { kd_rating },
    });
    expect(prisma.rating.delete).toHaveBeenCalledWith({
      where: { kd_rating },
      include: {
        pengumpulanTugas: {
          include: {
            tugas: true,
            user: true,
          },
        },
      },
    });
    expect(result).toEqual(deletedRating);
  });

  // Test untuk deleteRating ketika rating tidak ditemukan
  test("deleteRating harus melempar error ketika rating tidak ditemukan", async () => {
    const kd_rating = "rating-tidak-ada";

    prisma.rating.findUnique.mockResolvedValue(null);

    await expect(ratingService.deleteRating(kd_rating)).rejects.toThrow(
      "Rating tidak ditemukan"
    );

    expect(prisma.rating.findUnique).toHaveBeenCalledWith({
      where: { kd_rating },
    });
    expect(prisma.rating.delete).not.toHaveBeenCalled();
  });

  // Test untuk getRatingByPengumpulanTugasId
  test("getRatingByPengumpulanTugasId harus mengembalikan rating berdasarkan kode pengumpulan tugas", async () => {
    const mockRating = {
      kd_rating: "rating-1",
      kd_pengumpulan_tugas: "pengumpulan-1",
      nilai: 90,
      komentar: "Bagus sekali",
      pengumpulanTugas: {
        kd_pengumpulan_tugas: "pengumpulan-1",
        tugas: { kd_tugas: "tugas-1", judul: "Tugas Test" },
        user: { nip: "123456789012345678", nama: "John Doe" },
      },
    };

    prisma.rating.findFirst.mockResolvedValue(mockRating);

    const result = await ratingService.getRatingByPengumpulanTugasId("pengumpulan-1");

    expect(prisma.rating.findFirst).toHaveBeenCalledWith({
      where: { kd_pengumpulan_tugas: "pengumpulan-1" },
      include: {
        pengumpulanTugas: {
          include: {
            tugas: true,
            user: true,
          },
        },
      },
    });
    expect(result).toEqual(mockRating);
  });

  // Test untuk getRatingByPengumpulanTugasId ketika rating tidak ditemukan
  test("getRatingByPengumpulanTugasId harus melempar error ketika rating tidak ditemukan", async () => {
    prisma.rating.findFirst.mockResolvedValue(null);

    await expect(ratingService.getRatingByPengumpulanTugasId("pengumpulan-tidak-ada")).rejects.toThrow(
      "Rating tidak ditemukan"
    );

    expect(prisma.rating.findFirst).toHaveBeenCalledWith({
      where: { kd_pengumpulan_tugas: "pengumpulan-tidak-ada" },
      include: {
        pengumpulanTugas: {
          include: {
            tugas: true,
            user: true,
          },
        },
      },
    });
  });
});