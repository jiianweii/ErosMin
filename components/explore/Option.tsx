import useColors from "@/util/colors";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import ThemeText from "../common/ThemeText";

type OptionProps = {
  text: string;
  isSelected: boolean;
  handleSelect: () => void;
};

const Option = ({ text, isSelected, handleSelect }: OptionProps) => {
  const colors = useColors();
  return (
    <Pressable
      style={[
        styles.btn,
        { borderColor: "#fff", borderWidth: 1 },
        isSelected ? { backgroundColor: colors.accent } : {},
      ]}
      onPress={handleSelect}
    >
      <ThemeText
        style={[
          { fontSize: 12 },
          isSelected ? { color: colors.background } : {},
        ]}
      >
        {text}
      </ThemeText>
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
