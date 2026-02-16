import useColors from "@/util/colors";
import React, { Dispatch, SetStateAction } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type PasswordInputType = {
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

const PasswordInput = ({ placeholder, value, setValue }: PasswordInputType) => {
  const colors = useColors();
  return (
    <View style={styles.view}>
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
        secureTextEntry={true}
      />
      <Pressable style={styles.forgotPassword}>
        <Text style={{ color: colors.tint }}>Forgot?</Text>
      </Pressable>
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  view: {
    flexDirection: "column",
    width: "100%",
  },
  input: { borderWidth: 1, padding: 15, borderRadius: 10 },
  forgotPassword: {
    position: "absolute",
    top: "50%",
    right: 15,
    transform: [
      {
        translateY: "-50%",
      },
    ],
  },
});
