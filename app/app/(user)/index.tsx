import { useAuthStore } from "@/stores/auth";
import { View } from "react-native";
import { Text } from "@/components/ui/text";

export default function UserDashboard() {
  const { user } = useAuthStore();
  return (
    <View className="flex-1 justify-center items-center bg-background-0">
      <Text className="text-2xl font-bold mb-2 text-primary-700">
        Dashboard User
      </Text>
      <Text className="mb-4 text-secondary-700">
        Selamat datang, {user?.nama || "User"}!
      </Text>
      <Text className="text-base">NIP: {user?.nip}</Text>
      <Text className="text-base">Role: {user?.role}</Text>
    </View>
  );
}
