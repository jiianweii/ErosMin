import { Entypo, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import ThemeText from "../common/ThemeText";
import useColors from "@/util/colors";

const Helper = () => {
  const colors = useColors();
  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={() => router.push("/(tabs)")}>
        <Entypo name="chevron-left" size={24} color={colors.text} />
      </TouchableOpacity>
      <ThemeText style={styles.title}>Chat Messages</ThemeText>
      <TouchableOpacity>
        <Feather name="search" size={24} color={colors.text} />
      </TouchableOpacity>
    </View>
  );
};

export default Helper;

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 20,
    paddingVertical: 10,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontWeight: 600,
  },
});
