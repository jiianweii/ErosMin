import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";

const PostImages = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <View style={styles.view}>
      <Image source={imageUrl} style={{ flex: 1 }} contentFit="cover" />
    </View>
  );
};

export default PostImages;

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});
