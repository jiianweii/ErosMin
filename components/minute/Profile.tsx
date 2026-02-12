import useColors from "@/util/colors";
import {
  FontAwesome6,
  Foundation,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Badge from "../common/Badge";
import ThemeText from "../common/ThemeText";
import Interactive from "./profile/Interactive";

type ProfileProps = {
  source: string;
  name: string;

  showFullProfile: () => void;
};

const Profile = ({
  source,
  name,

  showFullProfile,
}: ProfileProps) => {
  const colors = useColors();
  return (
    <Pressable style={styles.view} onPress={showFullProfile}>
      <View style={styles.userInfoView}>
        <Image source={source} style={styles.userInfoImage} />
        <View>
          <ThemeText style={{ fontWeight: 500, fontSize: 18 }}>
            {name}
          </ThemeText>
          <ThemeText style={{ fontWeight: 400, fontSize: 12 }}>
            Woodlands, Singapore
          </ThemeText>
          <View style={{ flexDirection: "row", gap: 5, marginTop: 5 }}>
            <Badge>
              <Foundation name="female-symbol" size={16} color={colors.text} />
              <ThemeText>Female</ThemeText>
            </Badge>
            <Badge>
              <FontAwesome6
                name="scale-balanced"
                size={12}
                color={colors.text}
              />
              <ThemeText>55kg</ThemeText>
            </Badge>
            <Badge>
              <MaterialCommunityIcons
                name="human-male-height-variant"
                size={16}
                color={colors.text}
              />
              <ThemeText>1.66m</ThemeText>
            </Badge>
          </View>
        </View>
      </View>
      <Interactive />
    </Pressable>
  );
};

export default Profile;

const styles = StyleSheet.create({
  view: {
    padding: 15,
    gap: 10,
  },
  text: {
    fontWeight: 600,
  },
  userInfoView: {
    flexDirection: "row",
    gap: 15,
  },
  userInfoImage: {
    height: 60,
    width: 60,
    borderRadius: 10,
  },
});
