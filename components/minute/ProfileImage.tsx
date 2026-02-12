import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";

type ProfileImageProps = {
  source: string;
};

const ProfileImage = ({ source }: ProfileImageProps) => {
  return (
    <View style={styles.view}>
      <Image source={source} contentFit="cover" style={styles.image} />
    </View>
  );
};

export default ProfileImage;

const styles = StyleSheet.create({
  view: {
    height: 45,
    width: 45,
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
