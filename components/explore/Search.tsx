import useColors from "@/util/colors";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const Search = () => {
  const colors = useColors();
  return (
    <View style={styles.view}>
      <Feather
        name="search"
        size={18}
        color={colors.text}
        style={styles.searchIcon}
      />
      <TextInput placeholder="Search" style={styles.input} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,

    paddingLeft: 30,
  },
  view: {
    flex: 1,
  },
  searchIcon: {
    position: "absolute",
    top: 9,
    left: 8,
  },
});
