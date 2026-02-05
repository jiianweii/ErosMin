import Divider from "@/components/common/Divider";
import ActionList from "@/components/notification/ActionList";
import Colors from "@/util/colors";
import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Notification = () => {
  const colors = Colors();

  return (
    <SafeAreaView style={[styles.view, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={router.back}>
          <Entypo name="chevron-left" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.heading, { color: colors.text }]}>
          Notification
        </Text>
        <Text></Text>
      </View>
      <Divider />

      <ActionList />
    </SafeAreaView>
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
    fontSize: 23,
    fontWeight: 700,
    marginHorizontal: 25,
    marginVertical: 15,
  },
});
