import Button from "@/components/common/Button";
import ThemeText from "@/components/common/ThemeText";
import useColors from "@/util/colors";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

const OAuth = () => {
  const colors = useColors();
  const { width } = Dimensions.get("window");
  return (
    <View style={styles.oAuthView}>
      <Button
        styles={{
          backgroundColor: colors.google,
          width: (width - 50) / 2,
        }}
      >
        <AntDesign name="google" size={24} color={colors.text} />
        <ThemeText>Google</ThemeText>
      </Button>
      <Button
        styles={{
          backgroundColor: colors.apple,
          width: (width - 50) / 2,
        }}
      >
        <AntDesign name="apple" size={24} color={colors.text} />
        <ThemeText>Apple</ThemeText>
      </Button>
    </View>
  );
};

export default OAuth;

const styles = StyleSheet.create({
  oAuthView: {
    flexDirection: "row",
    gap: 10,
  },
});
