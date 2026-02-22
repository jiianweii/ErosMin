import Button from "@/components/common/Button";
import Divider from "@/components/common/Divider";
import ThemeSafeView from "@/components/common/ThemeSafeView";
import ThemeText from "@/components/common/ThemeText";
import Compartment from "@/components/settings/Compartment";
import useColors from "@/util/colors";
import {
  AntDesign,
  Entypo,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { Alert, Pressable, ScrollView, StyleSheet, View } from "react-native";

const SETTING_SELECTION = [
  {
    title: "Account",
    list: [
      {
        icon: (color: string) => (
          <AntDesign name="user" size={20} color={color} />
        ),
        title: "Personal Details",
        description: "Manage your profile details",
      },
      {
        icon: (color: string) => (
          <MaterialIcons name="security" size={20} color={color} />
        ),
        title: "Password and Security",
      },
      {
        icon: (color: string) => (
          <AntDesign name="heart" size={20} color={color} />
        ),
        title: "Match Preferences",
      },
      {
        icon: (color: string) => (
          <MaterialIcons name="verified" size={20} color={color} />
        ),
        title: "Verification",
      },
      {
        icon: (color: string) => (
          <AntDesign name="star" size={20} color={color} />
        ),
        title: "Subscription",
      },
    ],
  },
  {
    title: "General",
    list: [
      {
        icon: (color: string) => (
          <Ionicons name="notifications-sharp" size={20} color={color} />
        ),
        title: "Notification",
      },
      {
        icon: (color: string) => (
          <MaterialCommunityIcons
            name="theme-light-dark"
            size={20}
            color={color}
          />
        ),
        title: "Theme Preference",
      },
      {
        icon: (color: string) => (
          <Ionicons name="help-circle-sharp" size={20} color={color} />
        ),
        title: "Help Center",
      },
      {
        icon: (color: string) => (
          <AntDesign name="exclamation-circle" size={20} color={color} />
        ),
        title: "Terms and conditions",
      },
    ],
  },
];

const Settings = () => {
  const colors = useColors();

  function handleSignOut() {
    Alert.alert(
      "Sign out",
      "Are you sure you want to sign out from this account?",
      [
        {
          text: "Sign Out",
          style: "destructive",
          onPress: () => router.replace("/auth/login"),
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ],
    );
  }

  return (
    <ThemeSafeView style={styles.view}>
      {/* Navigation */}
      <Pressable style={styles.navigation} onPress={router.back}>
        <Entypo name="chevron-left" size={24} color={colors.text} />
        <ThemeText style={{ fontWeight: 600, fontSize: 18 }}>Profile</ThemeText>
      </Pressable>
      <Divider thickness={0} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileView}>
          <View>
            <Image
              source={
                "https://www.famousbirthdays.com/headshots/-nash-dc-4.jpg"
              }
              style={styles.profileImg}
              blurRadius={20}
            />
            <Pressable
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                backgroundColor: colors.settingButton,
                padding: 10,
                borderRadius: 20,
              }}
            >
              <Feather name="edit" size={18} color={colors.text} />
            </Pressable>
          </View>
          <ThemeText style={styles.name}>Jian Wei</ThemeText>
          <ThemeText style={styles.email}>itsjianweii@gmail.com</ThemeText>
        </View>
        <Divider thickness={0} />
        <View style={{ gap: 20, flex: 1 }}>
          {SETTING_SELECTION.map((item) => (
            <Compartment {...item} key={item.title} />
          ))}
        </View>
        <Divider thickness={0} />
        <View style={{ paddingHorizontal: 20 }}>
          <Button
            styles={{ backgroundColor: colors.primary }}
            onPress={handleSignOut}
          >
            <MaterialIcons name="logout" size={20} color={colors.text} />
            <ThemeText style={{ color: colors.text, fontWeight: 600 }}>
              Log Out
            </ThemeText>
          </Button>
        </View>
      </ScrollView>
    </ThemeSafeView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  navigation: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    gap: 10,

    flexDirection: "row",
  },
  profileView: {
    alignItems: "center",
    gap: 10,
  },
  profileImg: {
    height: 120,
    width: 120,
    borderRadius: 60,
    overflow: "hidden",
  },
  name: {
    fontWeight: 500,
    fontSize: 20,
  },
  email: {
    fontSize: 15,
  },
});
