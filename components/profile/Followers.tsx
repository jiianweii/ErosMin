import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import ThemeText from "../common/ThemeText";

type ButtonProps = {
  type: string;
  value: number;
  style?: object;
};

const Button = ({ type, value, style }: ButtonProps) => {
  return (
    <TouchableOpacity style={[style || {}, styles.button]}>
      <ThemeText style={{ fontWeight: 500, fontSize: 18 }}>{value}</ThemeText>
      <ThemeText style={{ fontSize: 12 }}>{type}</ThemeText>
    </TouchableOpacity>
  );
};

const Followers = () => {
  return (
    <View style={styles.view}>
      <Button type="Matches" value={203} />
      <Button type="Likes" value={182} />
      <Button type="Profile Views" value={851} />
    </View>
  );
};

export default Followers;

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
