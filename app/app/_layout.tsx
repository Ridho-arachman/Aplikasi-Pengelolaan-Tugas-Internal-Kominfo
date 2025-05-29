import React, { useEffect } from "react";
import { Slot, SplashScreen, useRouter, useSegments } from "expo-router";
import { useAuthStore } from "@/store/authStore";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

import "../global.css";

SplashScreen.preventAutoHideAsync();

function InitialLayout() {
  const { token, role, loading, loadAuthData } = useAuthStore();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    loadAuthData();
  }, [loadAuthData]);

  useEffect(() => {
    if (loading) return;

    const currentSegment = segments[0] as string | undefined; // Biarkan ini jika masih membantu
    const inAuthGroup = currentSegment === "(auth)";

    if (token && role) {
      SplashScreen.hideAsync();
      if (role === "admin") {
        if (currentSegment !== "(admin)") {
          // Coba tanpa assertion dulu, jika error, kembalikan
          router.replace("/(admin)/dashboard");
          // router.replace('/(admin)/dashboard' as Href<string>);
        }
      } else if (role === "user") {
        if (currentSegment !== "(user)") {
          // Coba tanpa assertion dulu, jika error, kembalikan
          router.replace("/(user)/home");
          // router.replace('/(user)/home' as Href<string>);
        }
      }
    } else if (!token) {
      SplashScreen.hideAsync();
      if (!inAuthGroup) {
        // Coba tanpa assertion dulu, jika error, kembalikan
        router.replace("/(auth)/login");
        // router.replace('/(auth)/login' as Href<string>);
      }
    }
  }, [token, role, loading, segments, router]);

  if (loading) {
    return null;
  }

  return <Slot />;
}

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="dark">
      <InitialLayout />
    </GluestackUIProvider>
  );
}
