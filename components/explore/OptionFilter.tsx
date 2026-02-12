import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Option from "./Option";

const OptionFilter = () => {
  return (
    <View style={styles.view}>
      <ScrollView horizontal contentContainerStyle={styles.options}>
        <Option text="Your Matches" />
        <Option text="Following" />
        <Option text="New" />
        <Option text="Verified" />
      </ScrollView>
    </View>
  );
};

export default OptionFilter;

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    height: 40,
    paddingHorizontal: 10,
  },
  options: {
    gap: 7,
  },
  filter: {
    width: "10%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
