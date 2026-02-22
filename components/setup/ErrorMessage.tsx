import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type ErrorMessageType = {
  text: string;
};

const ErrorMessage = ({ text }: ErrorMessageType) => {
  return (
    <View style={styles.rqmTag}>
      <FontAwesome6 name="face-sad-cry" size={18} color="#f53737" />
      <Text style={[styles.alertMsg, styles.errorMsg]}>{text}</Text>
    </View>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({
  alertMsg: {
    fontSize: 12,
  },
  errorMsg: {
    color: "#f53737",
  },
  rqmTag: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
