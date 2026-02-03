import Colors from "@/util/colors";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const UserInfo = () => {
  const colors = Colors();
  return (
    <View style={styles.view}>
      <View style={styles.profileImgView}>
        <Image
          source={"https://1.vikiplatform.com/pr/24024pr/2029e95675.jpg?x=b"}
          contentFit="cover"
          style={styles.profileImg}
        />
      </View>
      <View style={styles.userInfo}>
        <Text style={{ color: colors.text }}>Jingyi</Text>
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
