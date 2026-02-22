import useColors from "@/util/colors";
import React from "react";
import { Dimensions, View } from "react-native";

type ProgressionType = {
  widthPercentage: string;
};

const Progression = ({ widthPercentage }: ProgressionType) => {
  const { width } = Dimensions.get("window");
  const colors = useColors();
  return (
    <View
      style={{ width: width - 40, height: 5, backgroundColor: colors.tint }}
    >
      <View
        style={{
          width: widthPercentage,
          backgroundColor: colors.primary,
          height: "100%",
        }}
      ></View>
    </View>
  );
};

export default Progression;
