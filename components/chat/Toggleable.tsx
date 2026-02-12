import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import ThemeText from "../common/ThemeText";
import useColors from "@/util/colors";

type ToggleableProps = {
  title: string;
  isSelected?: boolean;
};

const Toggleable = ({ title, isSelected = false }: ToggleableProps) => {
  const colors = useColors();

  const selectedStyle = isSelected && {
    backgroundColor: colors.tabIconSelected,
    borderColor: "none",
  };

  return (
    <TouchableOpacity
      style={[styles.btn, selectedStyle, { borderColor: colors.text }]}
    >
      <ThemeText style={isSelected ? { color: "#000" } : {}}>{title}</ThemeText>
    </TouchableOpacity>
  );
};

export default Toggleable;

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 30,
    borderWidth: 1,
  },
});
