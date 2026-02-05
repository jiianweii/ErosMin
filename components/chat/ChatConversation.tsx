import React from "react";
import { StyleSheet, View } from "react-native";
import ThemeText from "../common/ThemeText";
import ChatImage from "./ChatImage";

export type ChatConversationProps = {
  source: string;
  name: string;
  message: string;
  date: string;
  imagePreview?: string;
};

const ChatConversation = ({
  source,
  name,
  message,
  date,
  imagePreview,
}: ChatConversationProps) => {
  return (
    <View style={styles.view}>
      <View style={styles.userInfo}>
        <ChatImage source={source} />

        <View style={styles.conversation}>
          <ThemeText style={styles.name}>{name}</ThemeText>
          <ThemeText style={styles.message}>{message}</ThemeText>
        </View>
      </View>
      <View>
        <ThemeText style={styles.date}>{date}</ThemeText>
      </View>
    </View>
  );
};

export default ChatConversation;

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  infoMessage: {
    gap: 4,
  },
  conversation: {
    gap: 2,
  },
  name: {
    fontWeight: 500,
    fontSize: 18,
  },
  message: {
    fontSize: 15,
  },
  date: {
    fontSize: 12,
    marginTop: 10,
  },
});
