import ThemeText from "@/components/common/ThemeText";
import useColors from "@/util/colors";
import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

const Interactive = () => {
  const colors = useColors();
  return (
    <View style={styles.btnsView}>
      <Pressable style={styles.btn}>
        <LinearGradient
          colors={["#ff4d4d", "#cc0000"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          <FontAwesome6 name="user-xmark" size={12} color={colors.text} />
          <ThemeText style={styles.btnText}>DISLIKE</ThemeText>
        </LinearGradient>
      </Pressable>
      <Pressable style={styles.btn}>
        <LinearGradient
          colors={["#4da6ff", "#005ce6"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          <FontAwesome5 name="user-check" size={12} color={colors.text} />
          <ThemeText style={styles.btnText}>LIKE</ThemeText>
        </LinearGradient>
      </Pressable>
    </View>
  );
};

export default Interactive;

const styles = StyleSheet.create({
  btnsView: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  btn: {
    width: "50%",
    height: 40,
    borderRadius: 10,
    overflow: "hidden",
  },
  btnText: {
    fontWeight: 700,
    fontSize: 14,
  },
  gradient: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",

    flexDirection: "row",
    gap: 10,
  },
});
