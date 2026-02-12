import useColors from "@/util/colors";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type StoryProps = {
  imageUrl: string;
  name: string;
};

const Story = ({ imageUrl, name }: StoryProps) => {
  const colors = useColors();
  return (
    <View style={styles.view}>
      {/* Story */}
      <View style={styles.storyView}>
        <Image source={imageUrl} contentFit="cover" style={styles.image} />
      </View>
      {/* Name */}
      <Text style={{ color: colors.text, fontWeight: 500, fontSize: 9 }}>
        {name}
      </Text>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
  },
  storyView: {
    height: 60,
    width: 60,
    borderRadius: 30,
    overflow: "hidden",

    borderColor: "#d30c0c",
    borderWidth: 2,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});
