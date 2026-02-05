import React from "react";
import { StyleSheet, View } from "react-native";
import Toggleable from "./Toggleable";

const Filter = () => {
  return (
    <View style={styles.view}>
      <Toggleable title="All" />
      <Toggleable title="Unread" />
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    gap: 10,
  },
});
