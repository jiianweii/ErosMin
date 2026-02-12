import Badge from "@/components/common/Badge";
import ThemeText from "@/components/common/ThemeText";
import React from "react";
import { View } from "react-native";

const Preference = () => {
  return (
    <View style={{ flexDirection: "row", gap: 5, flexWrap: "wrap" }}>
      <Badge colors="Gray">
        <ThemeText>Looking for Friends</ThemeText>
      </Badge>
      <Badge colors="Gray">
        <ThemeText>Looking for Date</ThemeText>
      </Badge>
      <Badge colors="Gray">
        <ThemeText>Looking for Sex</ThemeText>
      </Badge>
    </View>
  );
};

export default Preference;
