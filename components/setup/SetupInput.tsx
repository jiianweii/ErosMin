import useColors from "@/util/colors";
import React from "react";
import { StyleSheet, TextInput } from "react-native";

type SetupInputType = {
  inputType: string;
  value: string;
  setValue: (type: string, value: string) => void;
  placeholder: string;
};

const SetupInput = ({
  inputType,
  value,
  setValue,
  placeholder,
}: SetupInputType) => {
  const colors = useColors();
  return (
    <TextInput
      value={value}
      onChangeText={(text) => setValue(inputType, text)}
      style={[styles.input, { color: colors.text, borderColor: colors.accent }]}
      placeholder={placeholder}
    />
  );
};

export default SetupInput;

const styles = StyleSheet.create({
  input: { borderWidth: 1, padding: 15, borderRadius: 10, width: "100%" },
});
