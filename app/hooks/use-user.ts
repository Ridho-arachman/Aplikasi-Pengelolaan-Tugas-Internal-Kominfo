import useSWR from "swr";
import { api } from "@/utils/api";

interface User {
  nip: string;
  nama: string;
  role: "user" | "admin";
  kd_jabatan: string;
  nip_atasan?: string;
  jabatan?: {
    kd_jabatan: string;
    nama_jabatan: string;
  };
}

export function useUsers() {
  const { data, error, isLoading, mutate } = useSWR<User[]>(
    "/users",
    async () => {
      try {
        const response = await api.get("/users");
        return response.data.data;
      } catch (error: any) {
        throw new Error(
          error.response?.data?.message || "Gagal mengambil data users"
        );
      }
    }
  );

  return {
    users: data || [],
    isLoading,
    isError: !!error,
    errorMessage: error?.message,
    mutate,
  };
}

export function useUser(nip: string) {
  const { data, error, isLoading, mutate } = useSWR<User>(
    nip ? `/users/${nip}` : null,
    async () => {
      try {
        const response = await api.get(`/users/${nip}`);
        return response.data.data;
      } catch (error: any) {
        throw new Error(
          error.response?.data?.message || "Gagal mengambil data user"
        );
      }
    }
  );

  return {
    user: data,
    isLoading,
    isError: !!error,
    errorMessage: error?.message,
    mutate,
  };
}
