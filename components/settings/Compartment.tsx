import useColors from "@/util/colors";
import React from "react";
import { StyleSheet, View } from "react-native";
import ThemeText from "../common/ThemeText";
import SettingButton, { SettingButtonProps } from "./SettingButton";

interface CompartmentProps {
  title: string;
  list: SettingButtonProps[];
}

const Compartment = ({ title, list }: CompartmentProps) => {
  const colors = useColors();
  return (
    <View style={styles.view}>
      <ThemeText style={styles.title}>{title}</ThemeText>
      <View style={[styles.list, { backgroundColor: colors.settingButton }]}>
        {list.map((item: SettingButtonProps) => (
          <SettingButton
            {...item}
            icon={item.icon(colors.text)}
            key={item.title}
          />
        ))}
      </View>
    </View>
  );
};

export default Compartment;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 10,
  },
  title: {
    fontWeight: 600,
    fontSize: 18,
  },
  list: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
  },
});
