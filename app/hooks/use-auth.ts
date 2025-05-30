import useSWR from "swr";
import { api } from "@/utils/api";
import {
  login as authLogin,
  logout as authLogout,
  autoLogin as authAutoLogin,
} from "@/lib/auth";
import { useAuthStore } from "@/stores/auth";

interface LoginResponse {
  success: boolean;
  user?: any;
  message?: string;
}

interface AutoLoginResponse {
  success: boolean;
  user?: any;
  token?: string;
}

export function useAuth() {
  const { user, token, setAuth, clearAuth } = useAuthStore();

  // Hook untuk auto login
  const {
    data: autoLoginData,
    error: autoLoginError,
    mutate: mutateAutoLogin,
  } = useSWR<AutoLoginResponse>(
    "auth/auto-login",
    async () => {
      const result = await authAutoLogin();
      if (result.success && result.user) {
        setAuth(result.user, result.token);
      }
      return result;
    },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      shouldRetryOnError: false,
    }
  );

  // Fungsi login
  const login = async (
    nip: string,
    password: string
  ): Promise<LoginResponse> => {
    try {
      const result = await authLogin(nip, password);
      if (result.success) {
        mutateAutoLogin(); // Revalidate auto login data
      }
      return result;
    } catch (error: any) {
      return {
        success: false,
        message: error.message || "Gagal login",
      };
    }
  };

  // Fungsi logout
  const logout = async () => {
    await authLogout();
    mutateAutoLogin(); // Revalidate auto login data
  };

  return {
    user,
    token,
    isAuthenticated: !!user && !!token,
    isLoading: !autoLoginData && !autoLoginError,
    isError: !!autoLoginError,
    login,
    logout,
  };
}
