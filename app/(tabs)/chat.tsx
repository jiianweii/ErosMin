import ChatList from "@/components/chat/ChatList";
import Filter from "@/components/chat/Filter";
import Helper from "@/components/chat/Helper";
import Divider from "@/components/common/Divider";
import ThemeSafeView from "@/components/common/ThemeSafeView";
import React from "react";
import { StyleSheet } from "react-native";

const Chat = () => {
  return (
    <ThemeSafeView style={styles.view}>
      <Helper />
      <Divider />
      <Filter />
      <Divider thickness={0} marginVertical={6} />
      <ChatList />
    </ThemeSafeView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});
