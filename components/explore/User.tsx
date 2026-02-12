import { Image } from "expo-image";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import ThemeText from "../common/ThemeText";

type UserProps = {
  source: string;
  name: string;
  id: number;
};

const User = ({ source, name, id }: UserProps) => {
  const { width } = Dimensions.get("screen");
  return (
    <View style={[styles.view, { width: (width - 26) / 2 }]}>
      <Image source={source} contentFit="cover" style={styles.image} />
      <View style={styles.info}>
        <ThemeText style={[styles.name, { fontWeight: 500 }]}>{name}</ThemeText>
        <ThemeText style={[styles.name, { fontSize: 12 }]}>
          Woodlands, Singapore
        </ThemeText>
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  view: {
    height: 200,

    overflow: "hidden",
    borderRadius: 10,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  info: {
    position: "absolute",
    bottom: 10,
    left: 5,
  },
  name: {
    textShadowOffset: {
      width: 2,
      height: 1,
    },
  },
});
