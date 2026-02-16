import useColors from "@/util/colors";
import React from "react";
import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";

type ButtonTypes = {
  children: React.ReactNode;
  onPress?: () => void;
  styles?: StyleProp<ViewStyle>;
};

const Button = ({ children, onPress, styles: custom }: ButtonTypes) => {
  const colors = useColors();
  return (
    <Pressable
      onPress={onPress}
      style={[styles.btn, { backgroundColor: colors.button }, custom || {}]}
    >
      {children}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    height: 50,
    borderRadius: 10,

    justifyContent: "center",
    alignItems: "center",

    flexDirection: "row",
    gap: 10,
  },
});
