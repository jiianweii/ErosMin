import Colors from "@/util/colors";
import React from "react";
import { StyleSheet, Text } from "react-native";

const ThemeText = ({
  style,
  children,
}: {
  style?: object;
  children: React.ReactNode;
}) => {
  const colors = Colors();

  return <Text style={[style, { color: colors.text }]}>{children}</Text>;
};

export default ThemeText;

const styles = StyleSheet.create({});
