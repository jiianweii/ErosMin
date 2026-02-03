import { useNavbarContext } from "@/providers/NavbarProvider";
import { MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Helper = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { setIsNavbarShown } = useNavbarContext();

  function handleBackBtn() {
    setIsNavbarShown(true);
    navigation.navigate("index");
  }

  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={handleBackBtn}>
        <MaterialIcons
          name="keyboard-backspace"
          size={24}
          color={colors.text}
        />
      </TouchableOpacity>
      <View style={styles.toggleableView}>
        <TouchableOpacity style={styles.toggleActive}>
          <Text style={styles.text}>BEST MATCHES</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.toggle}>
          <Text style={styles.text}>NEAR YOU</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <SimpleLineIcons name="settings" size={24} color={colors.text} />
      </TouchableOpacity>
    </View>
  );
};

export default Helper;

const styles = StyleSheet.create({
  view: {
    position: "absolute",
    top: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 10,
    width: "80%",
    alignSelf: "center",
    marginVertical: 15,
  },
  toggleableView: {
    flexDirection: "row",
    padding: 2,
    backgroundColor: "#000",
    borderRadius: 9999,
    overflow: "hidden",
    gap: 10,
  },
  toggleActive: {
    backgroundColor: "#2e2e2e",
    borderRadius: 9999,
    padding: 10,
  },
  toggle: {
    borderRadius: 9999,
    padding: 10,
  },
  text: {
    color: "#fff",
    fontSize: 12,
    fontWeight: 500,
  },
});
