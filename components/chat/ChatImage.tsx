import { Image } from "expo-image";
import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type ChatImageProps = {
  style?: StyleProp<ViewStyle>;
  source: string;
};

const ChatImage = ({ style, source }: ChatImageProps) => {
  return (
    <View style={[styles.view, style]}>
      <Image
        source={source}
        contentFit="cover"
        style={styles.image}
        blurRadius={20}
      />
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
