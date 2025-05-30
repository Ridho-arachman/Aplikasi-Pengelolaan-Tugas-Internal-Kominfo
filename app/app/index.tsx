import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { useToast } from "@/components/ui/toast";
import { useAuthStore } from "@/stores/auth";
import { login, autoLogin } from "@/lib/auth";
import { router } from "expo-router";

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

export default function LoginScreen() {
  const [nip, setNip] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const { user, token } = useAuthStore();

  // Redirect jika sudah login
  useEffect(() => {
    if (token && user) {
      if (user.role === "admin") {
        router.replace("/(admin)/dashboard");
      } else {
        router.replace("/(user)");
      }
    }
  }, [token, user]);

  useEffect(() => {
    autoLogin().then((res) => {
      if (res.success) {
        toast.show({
          render: () => (
            <AlertToast>
              Auto-login berhasil! Selamat datang kembali,{" "}
              {res.user?.nama || "User"}
            </AlertToast>
          ),
          placement: "top left",
          duration: 3000,
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = async () => {
    setLoading(true);
    const res = await login(nip, password);
    if (res.success) {
      toast.show({
        render: () => (
          <AlertToast type="success">
            Login Berhasil! Selamat datang, {res.user?.nama || "User"}
          </AlertToast>
        ),
        placement: "top left",
        duration: 3000,
      });
    } else {
      toast.show({
        render: () => (
          <AlertToast type="error">{res.message || "Login gagal"}</AlertToast>
        ),
        placement: "top left",
        duration: 3000,
      });
    }
    setLoading(false);
  };

  // Tidak perlu render UI login jika sudah login (karena akan redirect)
  if (token && user) {
    return null;
  }

  return (
    <View className="flex-1 justify-center items-center bg-gradient-to-b from-blue-100 to-blue-300">
      <View className="w-80 bg-white rounded-2xl shadow-lg p-8">
        <Text className="text-2xl font-bold text-center text-primary-700 mb-8">
          Login
        </Text>
        <Input className="mb-4 border-2 border-primary-500 rounded-lg bg-white shadow-sm h-12">
          <InputField
            placeholder="NIP"
            value={nip}
            onChangeText={setNip}
            keyboardType="numeric"
            className="flex-1 text-base px-3 py-2 text-gray-900"
          />
        </Input>
        <Input className="mb-6 border-2 border-primary-500 rounded-lg bg-white shadow-sm h-12">
          <InputField
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            className="flex-1 text-base px-3 py-2 text-gray-900"
          />
        </Input>
        <Button
          className="w-full bg-primary-700 rounded-lg p-1"
          onPress={handleLogin}
          isDisabled={loading}
        >
          <ButtonText className="text-base font-bold">
            {loading ? "Loading..." : "Login"}
          </ButtonText>
        </Button>
      </View>
    </View>
  );
}
