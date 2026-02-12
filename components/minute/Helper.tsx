import { useNavbarContext } from "@/providers/NavbarProvider";
import { MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type HelperProps = {
  handleStopMedia: () => void;
};

const Helper = ({ handleStopMedia }: HelperProps) => {
  const { colors } = useTheme();

  const { setIsNavbarShown } = useNavbarContext();

  function handleBackBtn() {
    setIsNavbarShown(true);
    handleStopMedia();
    router.push("/(tabs)");
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
        <TouchableOpacity>
          <Text style={[styles.text, styles.selected]}>BEST MATCHES</Text>
        </TouchableOpacity>
        <TouchableOpacity>
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
    gap: 20,
  },
  text: {
    color: "#a3a3a3",
    fontSize: 12,
    textShadowOffset: {
      width: 2,
      height: 1,
    },
  },
  selected: {
    color: "#fff",
    fontWeight: 500,
  },
});
