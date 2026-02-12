import useColors from "@/util/colors";
import React from "react";
import { StyleSheet, Text } from "react-native";

const ThemeText = ({
  style,
  children,
}: {
  style?: object;
  children: React.ReactNode;
}) => {
  const colors = useColors();

  return <Text style={[{ color: colors.text }, style]}>{children}</Text>;
};

export default ThemeText;

const styles = StyleSheet.create({});
