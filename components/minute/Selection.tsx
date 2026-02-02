import { Entypo, EvilIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const Selection = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.view}>
      <View style={styles.innerView}>
        <TouchableOpacity style={styles.button}>
          <LinearGradient
            colors={["#eb0071", "#88007d"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
          >
            <Entypo name="cross" size={36} color={colors.text} />
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.keepButton}>
          <LinearGradient
            colors={["#00c6ff", "#0072ff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
          >
            <MaterialCommunityIcons
              name="window-restore"
              size={48}
              color={colors.text}
            />
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <LinearGradient
            colors={["#ff6a00", "#ee0979"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
          >
            <EvilIcons name="heart" size={36} color={colors.text} />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Selection;

const styles = StyleSheet.create({
  view: {
    position: "absolute",
    bottom: 75,
    flexDirection: "row",
    justifyContent: "center",
    zIndex: 10,
    alignSelf: "center",
    width: 250,
  },
  innerView: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 9999,
    overflow: "hidden",
  },
  keepButton: {
    width: 80,
    height: 80,
    borderRadius: 9999,
    overflow: "hidden",
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
