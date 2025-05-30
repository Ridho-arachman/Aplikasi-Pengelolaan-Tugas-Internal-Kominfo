import { Tabs, router } from "expo-router";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { View } from "react-native";
import { Button, ButtonText } from "@/components/ui/button";
import { useAuthStore } from "@/stores/auth";
import { useToast } from "@/components/ui/toast";
import { logout } from "@/lib/auth";
import { Text } from "@/components/ui/text";

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

export default function AdminLayout() {
  const { clearAuth } = useAuthStore();
  const toast = useToast();

  const handleLogout = async () => {
    await logout();
    clearAuth();
    toast.show({
      render: () => <AlertToast type="success">Logout berhasil!</AlertToast>,
      placement: "top left",
      duration: 3000,
    });
    router.replace("/");
  };

  return (
    <View className="flex-1">
      <View className="absolute top-12 right-4 z-50">
        <Button
          className="bg-red-500 rounded-lg px-4 py-2"
          onPress={handleLogout}
        >
          <ButtonText className="text-white font-bold">Logout</ButtonText>
        </Button>
      </View>
      <Tabs
        screenOptions={{
          tabBarShowLabel: true,
          tabBarActiveTintColor: "#2563eb",
          tabBarInactiveTintColor: "#64748b",
          tabBarStyle: {
            position: "absolute",
            bottom: 24,
            left: 24,
            right: 24,
            borderRadius: 24,
            height: 64,
            backgroundColor: "#fff",
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 8,
          },
          tabBarLabelStyle: {
            fontWeight: "bold",
            fontSize: 12,
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="dashboard"
          options={{
            title: "Dashboard",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="users"
          options={{
            title: "User",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="people" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="jabatan"
          options={{
            title: "Jabatan",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="work" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="tugas"
          options={{
            title: "Tugas",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="tasks" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="laporan"
          options={{
            title: "Laporan",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="document-text" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
