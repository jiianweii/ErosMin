import useColors from "@/util/colors";
import React, { Dispatch, SetStateAction } from "react";
import { StyleSheet, TextInput, View } from "react-native";

type InputType = {
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

const Input = ({ placeholder, value, setValue }: InputType) => {
  const colors = useColors();
  return (
    <View style={styles.view}>
      {/* Placeholder */}
      <View></View>
      {/* Text Input */}
      <TextInput
        value={value}
        onChangeText={(text) => setValue(text)}
        placeholder={placeholder}
        style={[
          styles.input,
          {
            borderColor: colors.text,
            color: colors.text,
          },
        ]}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  view: {
    flexDirection: "column",
    width: "100%",
  },
  input: { borderWidth: 1, padding: 15, borderRadius: 10 },
});
