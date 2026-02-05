import Colors from "@/util/colors";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import ThemeText from "../common/ThemeText";

type ToggleableProps = {
  title: string;
};

const Toggleable = ({ title }: ToggleableProps) => {
  const colors = Colors();
  return (
    <TouchableOpacity style={[styles.btn, { borderColor: colors.text }]}>
      <ThemeText>{title}</ThemeText>
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
