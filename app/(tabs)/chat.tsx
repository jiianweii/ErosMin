import ChatList from "@/components/chat/ChatList";
import Filter from "@/components/chat/Filter";
import Helper from "@/components/chat/Helper";
import OnlineList from "@/components/chat/OnlineList";
import Divider from "@/components/common/Divider";
import ThemeSafeView from "@/components/common/ThemeSafeView";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

export interface SelectedChatProps {
  imageSrc: string;
  name: string;
}

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState<SelectedChatProps | null>(
    null,
  );

  useEffect(() => {
    if (!selectedChat) return;

    router.push({
      pathname: "/chatroom",
      params: { selectedChat: JSON.stringify(selectedChat) },
    });
  }, [selectedChat]);

  return (
    <ThemeSafeView style={styles.view}>
      <Helper />
      <Divider />
      <OnlineList setSelectedChat={setSelectedChat} />
      <Divider thickness={0} marginVertical={8} />
      <Filter />
      <Divider thickness={0} marginVertical={10} />
      <ChatList setSelectedChat={setSelectedChat} />
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
