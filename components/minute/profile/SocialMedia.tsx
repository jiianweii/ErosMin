import ThemeText from "@/components/common/ThemeText";
import useColors from "@/util/colors";
import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";

const SocialMedia = () => {
  const colors = useColors();
  return (
    <View style={styles.view}>
      <ThemeText style={styles.viewTitle}>Follow Me On:</ThemeText>
      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <FontAwesome6 name="tiktok" size={24} color={colors.text} />
        <FontAwesome6 name="instagram" size={24} color={colors.text} />
        <FontAwesome6 name="snapchat" size={24} color={colors.text} />
      </View>
    </View>
  );
};

export default SocialMedia;

const styles = StyleSheet.create({
  view: { gap: 10 },
  viewTitle: {
    fontWeight: 600,
    fontSize: 20,
  },
  text: {
    fontSize: 16,
  },
});
