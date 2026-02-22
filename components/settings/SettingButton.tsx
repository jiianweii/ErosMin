import useColors from "@/util/colors";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import ThemeText from "../common/ThemeText";

export interface SettingButtonProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
}

const SettingButton = ({ icon, title, description }: SettingButtonProps) => {
  const colors = useColors();
  return (
    <TouchableOpacity style={[styles.btn]}>
      <View style={styles.info}>
        {icon}
        <View style={{ gap: 3 }}>
          <ThemeText style={{ fontWeight: 700, fontSize: 15 }}>
            {title}
          </ThemeText>
          {description && (
            <ThemeText style={{ fontSize: 12, color: colors.text + "95" }}>
              {description}
            </ThemeText>
          )}
        </View>
      </View>
      <Entypo name="chevron-right" size={18} color={colors.text} />
    </TouchableOpacity>
  );
};

export default SettingButton;

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    width: "100%",
    borderRadius: 5,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
});
