import React from "react";
import { Pressable, StyleSheet } from "react-native";
import ThemeText from "../common/ThemeText";

type OptionProps = {
  text: string;
};

const Option = ({ text }: OptionProps) => {
  return (
    <Pressable style={[styles.btn, { borderColor: "#fff", borderWidth: 1 }]}>
      <ThemeText style={{ fontSize: 12 }}>{text}</ThemeText>
    </Pressable>
  );
};

export default Option;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,

    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
