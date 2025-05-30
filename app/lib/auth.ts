import { api, setAuthToken } from "@/utils/api";
import {
  saveToken,
  saveUser,
  getToken,
  getUser,
  removeToken,
  removeUser,
} from "@/utils/storage";
import { useAuthStore } from "@/stores/auth";

interface AuthResponse {
  success: boolean;
  user?: any;
  token?: string;
  message?: string;
}

export const login = async (
  nip: string,
  password: string
): Promise<AuthResponse> => {
  try {
    const res = await api.post("/auth/login", { nip, password });
    if (res.data.status === "success") {
      const { accessToken, user } = res.data.data;
      await saveToken(accessToken);
      await saveUser(user);
      setAuthToken(accessToken);
      useAuthStore.getState().setAuth(user, accessToken);
      return { success: true, user, token: accessToken };
    } else {
      return { success: false, message: res.data.message };
    }
  } catch (err: any) {
    return {
      success: false,
      message: err?.response?.data?.message || err.message,
    };
  }
};

export const autoLogin = async (): Promise<AuthResponse> => {
  const token = await getToken();
  const user = await getUser();
  if (token && user) {
    setAuthToken(token);
    useAuthStore.getState().setAuth(user, token);
    return { success: true, user, token };
  }
  return { success: false };
};

export const logout = async () => {
  await removeToken();
  await removeUser();
  setAuthToken();
  useAuthStore.getState().clearAuth();
};
