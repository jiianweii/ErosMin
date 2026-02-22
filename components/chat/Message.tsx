import useColors from "@/util/colors";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import ThemeText from "../common/ThemeText";

interface MessageProps {
  message: string;
  dateTime: string;
  isMe: boolean;
}

const Message = ({ message, dateTime, isMe }: MessageProps) => {
  const { width } = Dimensions.get("window");
  const colors = useColors();

  return (
    <View
      style={[
        styles.view,
        {
          maxWidth: width - 100,
          alignSelf: isMe ? "flex-end" : "flex-start",
          backgroundColor: colors.primary,
          justifyContent: "flex-end",
        },
      ]}
    >
      {/* Message */}
      <ThemeText style={{ fontSize: 16, fontWeight: 500 }}>{message}</ThemeText>
      {/* DateTime */}
      <ThemeText
        style={{ alignSelf: "flex-end", fontSize: 9, textAlign: "right" }}
      >
        {dateTime}
      </ThemeText>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    gap: 5,
    flexWrap: "wrap",

    flexDirection: "row",
  },
});
