import useColors from "@/util/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet } from "react-native";

const Filter = () => {
  const colors = useColors();
  return (
    <Pressable style={[styles.pressable, { borderColor: colors.text }]}>
      <Ionicons name="options" size={16} color={colors.text} />
    </Pressable>
  );
};

export default Filter;

const styles = StyleSheet.create({
  pressable: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,

    justifyContent: "center",
    alignItems: "center",
    gap: 5,

    flexDirection: "row",
  },
});
