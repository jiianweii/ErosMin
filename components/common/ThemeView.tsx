import useColors from "@/util/colors";
import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

const ThemeView = ({
  style,
  children,
}: {
  style?: StyleProp<ViewStyle>;
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
