import Colors from "@/util/colors";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type CategoryProps = {
  name: string;
};

const Category = ({ name }: CategoryProps) => {
  const colors = Colors();
  return (
    <TouchableOpacity style={[styles.btn, { borderColor: colors.primary }]}>
      <Text style={{ color: colors.text }}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,

    borderRadius: 10,
  },
});
