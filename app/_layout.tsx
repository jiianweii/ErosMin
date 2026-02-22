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
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const unstable_settings = {
  anchor: "(tabs)",
};

// {colorScheme === "dark" ? DarkTheme : DefaultTheme}

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView>
      <NavbarProvider>
        <SelectUserProvider>
          <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
          >
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              {/* Profile */}
              <Stack.Screen
                name="profile/archive"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="profile/qrcode"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="profile/settings"
                options={{ headerShown: false }}
              />

              {/* Auth */}
              <Stack.Screen
                name="auth/login"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="auth/register"
                options={{ headerShown: false }}
              />
              {/* Notification */}
              <Stack.Screen
                name="notification"
                options={{ headerShown: false }}
              />

              {/* Onboarding */}
              <Stack.Screen
                name="introduction"
                options={{ headerShown: false }}
              />
              <Stack.Screen name="setup" options={{ headerShown: false }} />
              <Stack.Screen name="chatroom" options={{ headerShown: false }} />
            </Stack>
            <StatusBar style="auto" />
          </ThemeProvider>
        </SelectUserProvider>
      </NavbarProvider>
    </GestureHandlerRootView>
  );
}
