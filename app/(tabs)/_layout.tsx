import { Tabs } from "expo-router";
import React from "react";

import NavBar from "@/components/common/NavBar";
import { HapticTab } from "@/components/haptic-tab";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

import Chat from "@/assets/icons/Chat.svg";
import Home from "@/assets/icons/HomeOutline.svg";
import Minute from "@/assets/icons/Minute.svg";
import Partner from "@/assets/icons/Partner.svg";
import Profile from "@/assets/icons/Profile.svg";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
      tabBar={(props) => <NavBar {...props} />}
    >
      <Tabs.Screen
        name="minute"
        options={{
          title: "Minute",
          tabBarIcon: ({ color }) => (
            <Minute width={28} height={28} fill={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="partner"
        options={{
          title: "Partner",
          tabBarIcon: ({ color }) => (
            <Partner width={28} height={28} fill={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Home width={28} height={28} fill={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: ({ color }) => (
            <Chat width={28} height={28} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Profile width={28} height={28} fill={color} />
          ),
        }}
      />
    </Tabs>
  );
}
