import Colors from "@/util/colors";
import { Entypo, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../themed-text";

const Helper = () => {
  const colors = Colors();
  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={() => router.push("/(tabs)")}>
        <Entypo name="chevron-left" size={24} color={colors.text} />
      </TouchableOpacity>
      <ThemedText style={styles.title}>Chat Messages</ThemedText>
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
