import Colors from "@/util/colors";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ThemeSafeView = ({
  style,
  children,
}: {
  style?: object;
  children: React.ReactNode;
}) => {
  const colors = Colors();
  return (
    <SafeAreaView style={[style, { backgroundColor: colors.background }]}>
      {children}
    </SafeAreaView>
  );
};

export default ThemeSafeView;

const styles = StyleSheet.create({});
