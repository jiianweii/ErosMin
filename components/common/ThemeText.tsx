import useColors from "@/util/colors";
import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

const ThemeText = ({
  style,
  children,
}: {
  style?: StyleProp<TextStyle>;

  children: React.ReactNode;
}) => {
  const colors = useColors();

  return <Text style={[{ color: colors.text }, style]}>{children}</Text>;
};

export default ThemeText;

const styles = StyleSheet.create({});
