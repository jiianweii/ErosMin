import useColors from "@/util/colors";
import {
  FontAwesome6,
  Foundation,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import Badge from "../common/Badge";
import ThemeText from "../common/ThemeText";

const BasicInfo = () => {
  const colors = useColors();
  return (
    <View>
      <View style={styles.detailView}>
        <ThemeText>27 Years Old</ThemeText>
        <Badge colors="Gray">
          <ThemeText>Woodlands</ThemeText>
        </Badge>
      </View>
      <View style={styles.secDetailView}>
        <Badge colors="Gray">
          <Foundation name="female-symbol" size={16} color={colors.text} />
          <ThemeText>Male</ThemeText>
        </Badge>
        <Badge colors="Gray">
          <FontAwesome6 name="scale-balanced" size={12} color={colors.text} />
          <ThemeText>73kg</ThemeText>
        </Badge>
        <Badge colors="Gray">
          <MaterialCommunityIcons
            name="human-male-height-variant"
            size={16}
            color={colors.text}
          />
          <ThemeText>1.80m</ThemeText>
        </Badge>
      </View>
    </View>
  );
};

export default BasicInfo;

const styles = StyleSheet.create({
  detailView: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
  },
  secDetailView: {
    flexDirection: "row",
    gap: 5,
    marginTop: 5,
    justifyContent: "center",
  },
});
