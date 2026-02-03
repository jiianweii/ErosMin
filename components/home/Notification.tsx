import Colors from "@/util/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type NotificationProps = {
  notifCount?: number;
};

const Notification = ({ notifCount = 0 }: NotificationProps) => {
  const colors = Colors();
  return (
    <TouchableOpacity>
      {notifCount > 0 && (
        <View style={[styles.notifCount, { backgroundColor: colors.primary }]}>
          <Text style={{ color: colors.text, fontSize: 12 }}>{notifCount}</Text>
        </View>
      )}
      <Ionicons name="notifications" size={24} color={colors.text} />
    </TouchableOpacity>
  );
};

export default Notification;

const styles = StyleSheet.create({
  notifCount: {
    height: 20,
    width: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9999,
    position: "absolute",
    zIndex: 10,
    top: -10,
    right: -5,
  },
});
