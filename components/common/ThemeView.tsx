import useColors from "@/util/colors";
import React from "react";
import { StyleSheet, View } from "react-native";

const ThemeView = ({
  style,
  children,
}: {
  style?: object;
  children: React.ReactNode;
}) => {
  const colors = useColors();
  return (
    <View style={[style, { backgroundColor: colors.background }]}>
      {children}
    </View>
  );
};

export default ThemeView;

const styles = StyleSheet.create({});
