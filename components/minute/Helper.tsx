import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const Helper = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.view}>
      <TouchableOpacity>
        <MaterialIcons size={24} name="home" color={colors.text} />
      </TouchableOpacity>
    </View>
  );
};

export default Helper;

const styles = StyleSheet.create({
  view: {
    position: "absolute",
    top: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 10,
    width: "80%",
    alignSelf: "center",
    marginVertical: 15,
  },
});
