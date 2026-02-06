import React from "react";
import { StyleSheet, View } from "react-native";
import Toggleable from "./Toggleable";

const Filter = () => {
  return (
    <View style={styles.view}>
      <Toggleable title="All" isSelected={true} />
      <Toggleable title="Archived" />
      <Toggleable title="Today" />
      <Toggleable title="Unread" />
      <Toggleable title="Muted" />
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
