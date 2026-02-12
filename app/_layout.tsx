import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";
import NavbarProvider from "@/providers/NavbarProvider";
import SelectUserProvider from "@/providers/SelectUserProvider";

export const unstable_settings = {
  anchor: "(tabs)",
};

// {colorScheme === "dark" ? DarkTheme : DefaultTheme}

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <NavbarProvider>
      <SelectUserProvider>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="archive/archive"
              options={{ headerShown: false }}
            />
            <Stack.Screen name="auth/login" options={{ headerShown: false }} />
            <Stack.Screen name="settings" options={{ headerShown: false }} />
            <Stack.Screen
              name="auth/register"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="notification"
              options={{ headerShown: false }}
            />
          </Stack>
          <StatusBar style="auto" />
        </ThemeProvider>
      </SelectUserProvider>
    </NavbarProvider>
  );
}
