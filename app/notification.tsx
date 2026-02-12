import Divider from "@/components/common/Divider";
import ThemeSafeView from "@/components/common/ThemeSafeView";
import ThemeText from "@/components/common/ThemeText";
import ActionList from "@/components/notification/ActionList";
import useColors from "@/util/colors";
import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Notification = () => {
  const colors = useColors();

  return (
    <ThemeSafeView style={styles.view}>
      <View style={styles.header}>
        <TouchableOpacity onPress={router.back}>
          <Entypo name="chevron-left" size={24} color={colors.text} />
        </TouchableOpacity>
        <ThemeText style={styles.heading}>Notification</ThemeText>
        <Text></Text>
      </View>
      <Divider />

      <ActionList />
    </ThemeSafeView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  heading: {
    fontWeight: 700,
    marginHorizontal: 25,
    marginVertical: 15,
  },
});
