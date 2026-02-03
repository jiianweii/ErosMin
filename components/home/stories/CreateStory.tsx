import Colors from "@/util/colors";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CreateStory = () => {
  const colors = Colors();
  return (
    <View style={styles.view}>
      <View style={[styles.createStoryView, { borderColor: colors.primary }]}>
        <AntDesign name="plus" size={24} color={colors.primary} />
      </View>
      <Text style={{ color: "#fff", fontWeight: 500, fontSize: 9 }}>
        Create a Story
      </Text>
    </View>
  );
};

export default CreateStory;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
  },
  createStoryView: {
    height: 60,
    width: 60,
    borderRadius: 30,
    overflow: "hidden",

    justifyContent: "center",
    alignItems: "center",

    borderWidth: 1,
  },
});
