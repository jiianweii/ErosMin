import { Tabs } from "expo-router";
import React from "react";

import NavBar from "@/components/common/NavBar";
import { Colors as Colours } from "@/constants/theme";
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
        tabBarActiveTintColor: Colours[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: {
          display: "none",
        },
      }}
      tabBar={(props) => <NavBar {...props} />}
    >
      <Tabs.Screen
        name="minute"
        options={{
          title: "Minute",
          tabBarIcon: ({ color }) => (
            <Minute width={26} height={26} fill={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <Partner width={26} height={26} fill={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Home width={26} height={26} fill={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: ({ color }) => (
            <Chat width={26} height={26} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Profile width={26} height={26} fill={color} />
          ),
        }}
      />
    </Tabs>
  );
}
