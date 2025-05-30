import useSWR from "swr";
import { api } from "@/utils/api";

interface Jabatan {
  kd_jabatan: string;
  nama_jabatan: string;
}

export function useJabatan() {
  const { data, error, isLoading, mutate } = useSWR<Jabatan[]>(
    "/jabatan",
    async () => {
      try {
        const response = await api.get("/jabatan");
        return response.data.data;
      } catch (error: any) {
        throw new Error(
          error.response?.data?.message || "Gagal mengambil data jabatan"
        );
      }
    }
  );

  return {
    jabatans: data || [],
    isLoading,
    isError: !!error,
    errorMessage: error?.message,
    mutate,
  };
}
