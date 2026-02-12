import { Image } from "expo-image";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";

type GalleryMediaProps = {
  source: string;
};

const GalleryMedia = ({ source }: GalleryMediaProps) => {
  const { width } = Dimensions.get("window");
  return <Image source={source} style={[styles.image, { width }]} />;
};

export default GalleryMedia;

const styles = StyleSheet.create({
  image: {
    height: 400,
  },
});
