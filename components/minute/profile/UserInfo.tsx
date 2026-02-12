import Badge from "@/components/common/Badge";
import ThemeText from "@/components/common/ThemeText";
import useColors from "@/util/colors";
import {
  FontAwesome6,
  Foundation,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";

const UserInfo = () => {
  const colors = useColors();
  return (
    <View style={styles.userInfoView}>
      <Image
        source="https://i.pinimg.com/736x/2b/67/58/2b6758f6db222917c1c822182dd13a7c.jpg"
        style={styles.userInfoImage}
      />
      <View>
        <ThemeText style={{ fontWeight: 500, fontSize: 22 }}>
          Anahita Bahrami
        </ThemeText>
        <ThemeText style={{ fontWeight: 400, fontSize: 16 }}>
          Software Engineer
        </ThemeText>
        <View style={{ flexDirection: "row", gap: 5, marginTop: 5 }}>
          <Badge>
            <Foundation name="female-symbol" size={16} color={colors.text} />
            <ThemeText>Female</ThemeText>
          </Badge>
          <Badge>
            <FontAwesome6 name="scale-balanced" size={12} color={colors.text} />
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
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  userInfoView: {
    flexDirection: "row",
    gap: 15,
  },
  userInfoImage: {
    height: 80,
    width: 80,
    borderRadius: 20,
  },
});
