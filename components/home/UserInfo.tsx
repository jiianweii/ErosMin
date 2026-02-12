import useColors from "@/util/colors";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const UserInfo = () => {
  const colors = useColors();
  return (
    <View style={styles.view}>
      <View style={styles.profileImgView}>
        <Image
          source={"https://www.famousbirthdays.com/headshots/-nash-dc-4.jpg"}
          contentFit="cover"
          style={styles.profileImg}
        />
      </View>
      <View style={styles.userInfo}>
        <Text style={{ color: colors.text }}>Jian Wei</Text>
        <Text style={{ color: colors.text, fontWeight: 700 }}>
          Woodlands, Singapore
        </Text>
      </View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  userInfo: {
    gap: 2,
  },
  profileImgView: {
    height: 40,
    width: 40,
    borderRadius: 9999,
    overflow: "hidden",
  },
  profileImg: {
    flex: 1,
  },
});
