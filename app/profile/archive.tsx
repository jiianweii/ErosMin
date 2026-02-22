import Divider from "@/components/common/Divider";
import ThemeSafeView from "@/components/common/ThemeSafeView";
import ThemeText from "@/components/common/ThemeText";
import ArchiveList from "@/components/profile/Archive";
import useColors from "@/util/colors";
import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const Archive = () => {
  const colors = useColors();
  return (
    <ThemeSafeView style={styles.view}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        <TouchableOpacity onPress={router.back}>
          <Entypo name="chevron-left" size={24} color={colors.text} />
        </TouchableOpacity>
        <ThemeText style={{ fontWeight: 700 }}>Archive List</ThemeText>
      </View>
      <Divider />
      <View style={{ padding: 20, flex: 1 }}>
        <ArchiveList type="FULL" />
      </View>
    </ThemeSafeView>
  );
};

export default Archive;

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});
