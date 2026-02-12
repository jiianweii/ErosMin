import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

type MediaLengthProps = {
  length: number;
  index: number;
};

const MediaLength = ({ length, index }: MediaLengthProps) => {
  const array = Array.from({ length });
  const { width } = Dimensions.get("window");
  const customStyle = { width: width / length };
  return (
    <View style={styles.view}>
      {array.map((_, key) => (
        <View
          style={[
            styles.indices,
            customStyle,
            { backgroundColor: key === index ? "#fff" : "#ffffff80" },
          ]}
          key={key}
        ></View>
      ))}
    </View>
  );
};

export default MediaLength;

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    gap: 5,
    height: 3,
    overflow: "hidden",
    justifyContent: "space-between",
  },
  indices: {
    height: "100%",
    backgroundColor: "#fff",
  },
});
