const prisma = require("../../lib/prisma");
const userService = require("../../services/user.service");

jest.mock("../../lib/prisma", () => ({
  user: {
    create: jest.fn(),
    findUnique: jest.fn(),
    findMany: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
}));

const data = {
  nip: 82981811,
  nama: "Ridho",
  password: "mposmpoampo",
  role: "user",
  kd_jabatan: "001",
  nip_atasan: ["123"],
  created_at: "2023-05-03T05:50:00.000Z",
  updated_at: "2023-05-03T05:50:00.000Z",
};

describe("User Service", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("createUser should create a new user", async () => {
    prisma.user.create.mockResolvedValue(data);

    const result = await userService.createUser(data);

    expect(prisma.user.create).toHaveBeenCalledWith({ data });
    expect(result).toEqual(data);
  });

  it("getUser should return user by nip", async () => {
    const { nip } = data;
    prisma.user.findUnique.mockResolvedValue(data);

    const result = await userService.getUser(nip);

    expect(prisma.user.findUnique).toHaveBeenCalledWith({
      where: { nip },
    });
    expect(result).toEqual(data);
  });

  it("getAllUser should return all user", async () => {
    prisma.user.findMany.mockResolvedValue(data);

    const result = await userService.getAllUser();

    expect(prisma.user.findMany).toHaveBeenCalled();
    expect(result).toEqual(data);
  });

  it("updateUser should update user by nip", async () => {
    const { nip } = data;
    prisma.user.update.mockResolvedValue(data);

    const result = await userService.updateUser(nip, data);

    expect(prisma.user.update).toHaveBeenCalledWith({
      where: { nip },
      data,
    });
    expect(result).toEqual(data);
  });

  it("deleteUser should delete a user by nip", async () => {
    const { nip } = data;
    prisma.user.delete.mockResolvedValue(data);

    const result = await userService.deleteUser(nip);

    expect(prisma.user.delete).toHaveBeenCalledWith({ where: { nip } });
    expect(result).toEqual(data);
  });
});
