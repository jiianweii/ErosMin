import React from "react";
import { StyleSheet, View } from "react-native";
import Category from "./Category";

const PostCategories = () => {
  return (
    <View style={styles.view}>
      <Category name="All" />
      <Category name="Questions" />
      <Category name="Posts" />
    </View>
  );
};

export default PostCategories;

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    gap: 5,
  },
});
