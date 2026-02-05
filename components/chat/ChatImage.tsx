import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";

type ChatImageProps = {
  source: string;
};

const ChatImage = ({ source }: ChatImageProps) => {
  return (
    <View style={styles.view}>
      <Image source={source} contentFit="cover" style={styles.image} />
    </View>
  );
};

export default ChatImage;

const styles = StyleSheet.create({
  view: {
    height: 60,
    width: 60,
    borderRadius: 30,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
