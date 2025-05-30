const prisma = require("../../libs/prisma");
const userService = require("../../services/user.service");

jest.mock("../../libs/prisma", () => ({
  user: {
    create: jest.fn(),
    findUnique: jest.fn(),
    findMany: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
}));

const userData = {
  nip: "82981811",
  nama: "Ridho",
  password: "mposmpoampo",
  role: "user",
  kd_jabatan: "001",
  nip_atasan: "123",
};

// Expected return data (without password)
const returnedData = {
  nip: "82981811",
  nama: "Ridho",
  role: "user",
  kd_jabatan: "001",
  nip_atasan: "123",
  jabatan: {
    kd_jabatan: "001",
    nama_jabatan: "Staff",
  },
};

describe("User Service", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("createUser should create a new user", async () => {
    // Mock the service to return data without password
    prisma.user.create.mockResolvedValue(returnedData);

    const result = await userService.createUser(userData);

    expect(prisma.user.create).toHaveBeenCalledWith({
      data: {
        nip: userData.nip,
        nama: userData.nama,
        password: userData.password,
        role: userData.role,
        kd_jabatan: userData.kd_jabatan,
        nip_atasan: userData.nip_atasan,
      },
      include: {
        jabatan: true,
      },
    });
    expect(result).toEqual(returnedData);
  });

  it("getUser should return user by nip", async () => {
    const { nip } = userData;
    prisma.user.findUnique.mockResolvedValue(returnedData);

    const result = await userService.getUser(nip);

    expect(prisma.user.findUnique).toHaveBeenCalledWith({
      where: { nip },
      include: {
        jabatan: true,
      },
    });
    expect(result).toEqual(returnedData);
  });

  it("getAllUser should return all users", async () => {
    const users = [returnedData];
    const { nip, role, nama, kd_jabatan, nip_atasan } = userData;
    prisma.user.findMany.mockResolvedValue(users);

    // Pass empty object to avoid undefined variable error
    const result = await userService.getAllUser(
      nip,
      role,
      nama,
      kd_jabatan,
      nip_atasan
    );

    expect(prisma.user.findMany).toHaveBeenCalled();
    expect(result).toEqual(users);
  });

  it("updateUser should update user by nip", async () => {
    const { nip } = userData;
    const updateData = { nama: "Updated Name" };
    prisma.user.update.mockResolvedValue({ ...returnedData, ...updateData });

    const result = await userService.updateUser(nip, updateData);

    expect(prisma.user.update).toHaveBeenCalledWith({
      where: { nip },
      data: updateData,
      include: {
        jabatan: true,
      },
    });
    expect(result).toEqual({ ...returnedData, ...updateData });
  });

  it("deleteUser should delete a user by nip", async () => {
    const { nip } = userData;
    prisma.user.delete.mockResolvedValue(returnedData);

    const result = await userService.deleteUser(nip);

    expect(prisma.user.delete).toHaveBeenCalledWith({
      where: { nip },
      include: {
        jabatan: true,
      },
    });
    expect(result).toEqual(returnedData);
  });
});
