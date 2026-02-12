import ChatList from "@/components/chat/ChatList";
import Filter from "@/components/chat/Filter";
import Helper from "@/components/chat/Helper";
import OnlineList from "@/components/chat/OnlineList";
import Divider from "@/components/common/Divider";
import ThemeSafeView from "@/components/common/ThemeSafeView";
import React from "react";
import { StyleSheet } from "react-native";

const Chat = () => {
  return (
    <ThemeSafeView style={styles.view}>
      <Helper />
      <Divider />
      <OnlineList />
      <Divider thickness={0} marginVertical={8} />
      <Filter />
      <Divider thickness={0} marginVertical={10} />
      <ChatList />
    </ThemeSafeView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginBottom: 56,
  },
});
