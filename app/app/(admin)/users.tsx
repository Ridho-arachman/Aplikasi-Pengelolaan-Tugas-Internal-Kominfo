import { View, Modal as RNModal } from "react-native";
import { Text } from "@/components/ui/text";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableData,
} from "@/components/ui/table";
import { Input, InputField } from "@/components/ui/input";
import { userService, User } from "@/services/user";

// Helper komponen alert toast
function AlertToast({
  type = "success",
  children,
}: {
  type?: string;
  children: React.ReactNode;
}) {
  const bg =
    type === "success"
      ? "bg-green-100 border-green-500"
      : type === "error"
      ? "bg-red-100 border-red-500"
      : "bg-blue-100 border-blue-500";
  const text =
    type === "success"
      ? "text-green-800"
      : type === "error"
      ? "text-red-800"
      : "text-blue-800";
  const icon = type === "success" ? "✔️" : type === "error" ? "❌" : "ℹ️";

  return (
    <View
      className={`flex-row items-center border-l-4 rounded-md px-4 py-3 shadow-md mt-[50px] ml-[20px] ${bg}`}
      style={{ minWidth: 220, maxWidth: 320 }}
    >
      <Text className={`mr-2 text-lg ${text}`}>{icon}</Text>
      <Text className={`flex-1 ${text}`}>{children}</Text>
    </View>
  );
}

export default function UsersAdmin() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"add" | "edit">("add");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [formData, setFormData] = useState<
    Partial<User> & { password?: string }
  >({
    nip: "",
    nama: "",
    role: "user",
    kd_jabatan: "",
    nip_atasan: "",
    password: "",
  });
  const toast = useToast();

  const fetchUsers = async () => {
    try {
      const data = await userService.getAllUsers();
      setUsers(data);
    } catch (error: any) {
      toast.show({
        render: () => <AlertToast type="error">{error.message}</AlertToast>,
        placement: "top left",
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleOpenModal = (type: "add" | "edit", user?: User) => {
    setModalType(type);
    if (type === "edit" && user) {
      setSelectedUser(user);
      setFormData({
        nip: user.nip,
        nama: user.nama,
        role: user.role,
        kd_jabatan: user.kd_jabatan,
        nip_atasan: user.nip_atasan,
      });
    } else {
      setSelectedUser(null);
      setFormData({
        nip: "",
        nama: "",
        role: "user",
        kd_jabatan: "",
        nip_atasan: "",
        password: "",
      });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
    setFormData({
      nip: "",
      nama: "",
      role: "user",
      kd_jabatan: "",
      nip_atasan: "",
      password: "",
    });
  };

  const handleSubmit = async () => {
    try {
      if (modalType === "add") {
        await userService.createUser(formData as User & { password: string });
        toast.show({
          render: () => (
            <AlertToast type="success">User berhasil ditambahkan</AlertToast>
          ),
          placement: "top left",
          duration: 3000,
        });
      } else {
        await userService.updateUser(selectedUser!.nip, formData);
        toast.show({
          render: () => (
            <AlertToast type="success">User berhasil diperbarui</AlertToast>
          ),
          placement: "top left",
          duration: 3000,
        });
      }
      handleCloseModal();
      fetchUsers();
    } catch (error: any) {
      toast.show({
        render: () => <AlertToast type="error">{error.message}</AlertToast>,
        placement: "top left",
        duration: 3000,
      });
    }
  };

  const handleDelete = async (nip: string) => {
    try {
      await userService.deleteUser(nip);
      toast.show({
        render: () => (
          <AlertToast type="success">User berhasil dihapus</AlertToast>
        ),
        placement: "top left",
        duration: 3000,
      });
      fetchUsers();
    } catch (error: any) {
      toast.show({
        render: () => <AlertToast type="error">{error.message}</AlertToast>,
        placement: "top left",
        duration: 3000,
      });
    }
  };

  return (
    <View className="flex-1 p-4">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-2xl font-bold">Manajemen User</Text>
        <Button onPress={() => handleOpenModal("add")}>
          <Text>Tambah User</Text>
        </Button>
      </View>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <Text>NIP</Text>
            </TableHead>
            <TableHead>
              <Text>Nama</Text>
            </TableHead>
            <TableHead>
              <Text>Jabatan</Text>
            </TableHead>
            <TableHead>
              <Text>Role</Text>
            </TableHead>
            <TableHead>
              <Text>Aksi</Text>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.nip}>
              <TableData>
                <Text>{user.nip}</Text>
              </TableData>
              <TableData>
                <Text>{user.nama}</Text>
              </TableData>
              <TableData>
                <Text>{user.jabatan?.nama_jabatan || "-"}</Text>
              </TableData>
              <TableData>
                <Text>{user.role}</Text>
              </TableData>
              <TableData>
                <View className="flex-row gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onPress={() => handleOpenModal("edit", user)}
                  >
                    <Text>Edit</Text>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-red-500"
                    onPress={() => handleDelete(user.nip)}
                  >
                    <Text>Hapus</Text>
                  </Button>
                </View>
              </TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <RNModal
        visible={showModal}
        transparent
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-white p-4 rounded-lg w-[90%] max-w-[500px]">
            <Text className="text-xl font-bold mb-4">
              {modalType === "add" ? "Tambah User" : "Edit User"}
            </Text>

            <View className="space-y-4">
              <View>
                <Text className="mb-1">NIP</Text>
                <Input>
                  <InputField
                    value={formData.nip}
                    onChangeText={(text) =>
                      setFormData({ ...formData, nip: text })
                    }
                    placeholder="Masukkan NIP"
                    editable={modalType === "add"}
                  />
                </Input>
              </View>

              <View>
                <Text className="mb-1">Nama</Text>
                <Input>
                  <InputField
                    value={formData.nama}
                    onChangeText={(text) =>
                      setFormData({ ...formData, nama: text })
                    }
                    placeholder="Masukkan nama"
                  />
                </Input>
              </View>

              <View>
                <Text className="mb-1">Kode Jabatan</Text>
                <Input>
                  <InputField
                    value={formData.kd_jabatan}
                    onChangeText={(text) =>
                      setFormData({ ...formData, kd_jabatan: text })
                    }
                    placeholder="Masukkan kode jabatan"
                  />
                </Input>
              </View>

              <View>
                <Text className="mb-1">NIP Atasan</Text>
                <Input>
                  <InputField
                    value={formData.nip_atasan}
                    onChangeText={(text) =>
                      setFormData({ ...formData, nip_atasan: text })
                    }
                    placeholder="Masukkan NIP atasan (opsional)"
                  />
                </Input>
              </View>

              <View>
                <Text className="mb-1">Role</Text>
                <Input>
                  <InputField
                    value={formData.role}
                    onChangeText={(text) =>
                      setFormData({
                        ...formData,
                        role: text as "user" | "admin",
                      })
                    }
                    placeholder="Pilih role (user/admin)"
                  />
                </Input>
              </View>

              {modalType === "add" && (
                <View>
                  <Text className="mb-1">Password</Text>
                  <Input>
                    <InputField
                      value={formData.password}
                      onChangeText={(text) =>
                        setFormData({ ...formData, password: text })
                      }
                      placeholder="Masukkan password"
                      secureTextEntry
                    />
                  </Input>
                </View>
              )}

              <View className="flex-row justify-end gap-2 mt-4">
                <Button variant="outline" onPress={handleCloseModal}>
                  <Text>Batal</Text>
                </Button>
                <Button onPress={handleSubmit}>
                  <Text>{modalType === "add" ? "Tambah" : "Simpan"}</Text>
                </Button>
              </View>
            </View>
          </View>
        </View>
      </RNModal>
    </View>
  );
}
