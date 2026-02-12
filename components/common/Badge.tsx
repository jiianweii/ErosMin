import React from "react";
import { StyleSheet, View } from "react-native";

type BadgeProps = {
  children: React.ReactNode;
  colors?: "Black" | "Gray";
};

const Badge = ({ children, colors = "Black" }: BadgeProps) => {
  const Colors = {
    Black: "#000",
    Gray: "#303030",
  };
  return (
    <View style={[styles.view, { backgroundColor: Colors[colors] }]}>
      {children}
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  view: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,

    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
