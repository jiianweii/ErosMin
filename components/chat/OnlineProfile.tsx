import React from "react";
import { StyleSheet, View } from "react-native";
import ThemeText from "../common/ThemeText";
import ChatImage from "./ChatImage";

type OnlineProfileType = {
  imageSrc: string;
  name: string;
};

const OnlineProfile = ({ imageSrc, name }: OnlineProfileType) => {
  return (
    <View style={styles.view}>
      <ChatImage source={imageSrc} />
      <View
        style={{
          backgroundColor: "#18ff18",
          height: 12,
          width: 12,
          borderRadius: 30,
          position: "absolute",
          top: 5,
          right: 0,
        }}
      ></View>
      <ThemeText style={styles.name}>{name}</ThemeText>
    </View>
  );
};

export default OnlineProfile;

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
  },
  name: {
    fontWeight: 600,
  },
});
