import useColors from "@/util/colors";
import React from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ThemeSafeView = ({
  style,
  children,
}: {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}) => {
  const colors = useColors();
  return (
    <SafeAreaView style={[style, { backgroundColor: colors.background }]}>
      {children}
    </SafeAreaView>
  );
};

export default ThemeSafeView;

const styles = StyleSheet.create({});
