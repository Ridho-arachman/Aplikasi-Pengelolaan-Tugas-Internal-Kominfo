import React from "react";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack } from "expo-router";
import { SWRProvider } from "@/providers/swr-provider";

import "../global.css";

export default function RootLayout() {
  return (
    <SWRProvider>
      <GluestackUIProvider mode="light">
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
        </Stack>
      </GluestackUIProvider>
    </SWRProvider>
  );
}
