import Divider from "@/components/common/Divider";
import ThemeSafeView from "@/components/common/ThemeSafeView";
import ThemeText from "@/components/common/ThemeText";
import SocialMedia from "@/components/minute/profile/SocialMedia";
import Summary from "@/components/minute/profile/Summary";
import Archive from "@/components/profile/Archive";
import BasicInfo from "@/components/profile/BasicInfo";
import Followers from "@/components/profile/Followers";
import useColors from "@/util/colors";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

const Profile = () => {
  const colors = useColors();
  return (
    <ThemeSafeView style={styles.view}>
      {/* Settings */}
      <View style={styles.settingView}>
        <ThemeText style={{ fontWeight: 500, fontSize: 16 }}>
          @itsjianweii
        </ThemeText>
        <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
          <TouchableOpacity onPress={() => router.push("/profile/qrcode")}>
            <FontAwesome name="qrcode" size={24} color={colors.text} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/profile/settings")}>
            <Ionicons name="settings-outline" size={24} color={colors.text} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Image */}
        <View style={styles.profileView}>
          <Image
            source={"https://www.famousbirthdays.com/headshots/-nash-dc-4.jpg"}
            style={styles.profileImg}
            blurRadius={20}
          />
          <ThemeText style={styles.name}>Jian Wei</ThemeText>
        </View>
        <Divider thickness={0} marginVertical={6} />

        <BasicInfo />

        {/* Matches , You liked, They liked */}
        <Divider thickness={0} />
        <Followers />

        <Divider thickness={0} />
        <Summary
          list={[
            "Confident, ambitious, a little competitive.",
            "But I’ll still open doors, plan the date, and make sure you get home safe.",
          ]}
        />
        <Divider thickness={0} />
        <SocialMedia />

        <Divider thickness={0} />
        <Archive type="PREVIEW" />
      </ScrollView>
    </ThemeSafeView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginBottom: 56,
    paddingHorizontal: 20,
  },
  settingView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  scrollView: {
    paddingVertical: 20,
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
});
