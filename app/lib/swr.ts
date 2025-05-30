import { SWRConfiguration } from "swr";
import { api } from "@/utils/api";

// Custom fetcher yang menggunakan axios instance
export const fetcher = async (url: string) => {
  try {
    const response = await api.get(url);
    return response.data.data; // Mengambil data dari response API
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Terjadi kesalahan");
  }
};

// Konfigurasi default SWR
export const swrConfig: SWRConfiguration = {
  fetcher,
  revalidateOnFocus: true,
  revalidateOnReconnect: true,
  shouldRetryOnError: true,
  errorRetryCount: 3,
  dedupingInterval: 2000,
};
