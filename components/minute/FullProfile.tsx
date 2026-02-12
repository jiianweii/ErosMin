import useColors from "@/util/colors";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import Divider from "../common/Divider";
import ThemeSafeView from "../common/ThemeSafeView";
import Gallery from "./profile/Gallery";
import Interactive from "./profile/Interactive";
import Preference from "./profile/Preference";
import SocialMedia from "./profile/SocialMedia";
import Summary from "./profile/Summary";
import UserInfo from "./profile/UserInfo";

type FullProfileProps = {
  hideFullProfile: () => void;
};

const FullProfile = ({ hideFullProfile }: FullProfileProps) => {
  const colors = useColors();
  return (
    <ThemeSafeView style={styles.view}>
      <ScrollView>
        <Pressable onPress={hideFullProfile} style={styles.btn}>
          <Entypo name="cross" size={28} color={colors.text} />
        </Pressable>

        <Gallery />

        {/* User Information */}
        <View
          style={[styles.profileView, { backgroundColor: colors.background }]}
        >
          <Divider thickness={0} />
          <UserInfo />
          <Interactive />
          <Divider thickness={0} marginVertical={4} />
          <Preference />
          <Divider thickness={0} />
          <Summary
            list={[
              "Full-time student at Curtin University. Curious mind, ambitious energy, and a love for living life fully. I enjoy meaningful connections, good conversations, and people who are confident in who they are, inside and out.",
              "I’m bisexual and open-minded, looking to meet friends or something deeper with the right woman or man. I value chemistry, mutual attraction, and people who are comfortable exploring connection beyond the surface.",
            ]}
          />
          <Divider thickness={0} />
          <SocialMedia />
          <Divider thickness={0} />

          {/* Interests */}
          {/* Posts */}
        </View>
      </ScrollView>
    </ThemeSafeView>
  );
};

export default FullProfile;

const styles = StyleSheet.create({
  view: {
    zIndex: 20,
    height: "105%",
    width: "100%",
    flex: 1,

    position: "absolute",
    top: 0,
    left: 0,
  },
  profileView: {
    paddingHorizontal: 10,
    paddingBottom: 15,
  },
  btn: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 21,
  },
});
