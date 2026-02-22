import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type SuccessMessageType = {
  text: string;
};

const SuccessMessage = ({ text }: SuccessMessageType) => {
  return (
    <View style={styles.rqmTag}>
      <FontAwesome6 name="face-smile-beam" size={18} color="#37db17" />
      <Text style={[styles.alertMsg, styles.successMsg]}>{text}</Text>
    </View>
  );
};

export default SuccessMessage;

const styles = StyleSheet.create({
  alertMsg: {
    fontSize: 12,
  },
  successMsg: {
    color: "#37db17",
  },
  rqmTag: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
