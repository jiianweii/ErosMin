import Input from "@/components/auth/Input";
import ChatImage from "@/components/chat/ChatImage";
import Message from "@/components/chat/Message";
import Divider from "@/components/common/Divider";
import ThemeSafeView from "@/components/common/ThemeSafeView";
import ThemeText from "@/components/common/ThemeText";
import useColors from "@/util/colors";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface MessageListProps {
  name: string;
  message: string;
  dateTime: string;
  id: number;
}

const SAMPLE_MESSAGE_LIST = [
  {
    id: 1,
    name: "Jing Yi",
    message: "Hello",
    dateTime: "12:33 pm",
  },
  {
    id: 2,
    name: "Jian Wei",
    message: "Hello",
    dateTime: "2:18 pm",
  },
  {
    id: 3,
    name: "Jing Yi",
    message: "Why you take so long to reply?",
    dateTime: "2:19 pm",
  },
  {
    id: 4,
    name: "Jing Yi",
    message: "Are you talking to other girls?",
    dateTime: "2:20 pm",
  },
  {
    id: 5,
    name: "Jing Yi",
    message:
      "How dare you talk to other girls? Who is that b*tch you talking to? I want to know NOW!",
    dateTime: "2:21 pm",
  },
];

const Chatroom = () => {
  const params = useLocalSearchParams<{ selectedChat: string }>();
  const { imageSrc, name } = JSON.parse(params.selectedChat);
  const [currentMessage, setCurrentMessage] = useState<string>("");

  const [messageList, setMessageList] =
    useState<MessageListProps[]>(SAMPLE_MESSAGE_LIST);
  const { width } = Dimensions.get("window");

  const colors = useColors();

  function handleAddMessage() {
    if (currentMessage === "") return;
    setMessageList((prev) => {
      return [
        ...prev,
        {
          name: "Jian Wei",
          message: currentMessage,
          dateTime: new Date()
            .toLocaleTimeString([], {
              hour12: true,
              hour: "2-digit",
              minute: "2-digit",
            })
            .toLowerCase(),
          id: prev.length + 1,
        },
      ];
    });
    setCurrentMessage("");
    Keyboard.dismiss();
  }

  return (
    <ThemeSafeView style={styles.view}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1 }}>
            <View style={styles.chatInfo}>
              <View
                style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
              >
                <Entypo
                  name="chevron-left"
                  size={24}
                  color={colors.text}
                  onPress={router.back}
                />
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <ChatImage
                    source={imageSrc}
                    style={{ height: 40, width: 40 }}
                  />
                  <ThemeText style={{ fontWeight: 500, fontSize: 16 }}>
                    {name}
                  </ThemeText>
                </View>
              </View>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 20 }}
              >
                <Pressable>
                  <Ionicons name="call" size={20} color={colors.text} />
                </Pressable>
                <Pressable>
                  <Entypo
                    name="game-controller"
                    size={20}
                    color={colors.text}
                  />
                </Pressable>
                <Pressable>
                  <Ionicons name="settings" size={20} color={colors.text} />
                </Pressable>
              </View>
            </View>
            <Divider marginVertical={6} />
            {/* Chat Area */}
            <FlatList
              data={messageList}
              renderItem={({ item }) => (
                <Message isMe={item.name === "Jian Wei"} {...item} />
              )}
              keyExtractor={(item) => item.id + ""}
              style={{
                flex: 1,
                paddingVertical: 15,
                paddingHorizontal: 10,
              }}
              ItemSeparatorComponent={() => <View style={{ height: 5 }}></View>}
            />

            {/* Chat Input */}
            <Divider marginVertical={6} />
            <View style={styles.chatInput}>
              <Entypo name="attachment" size={24} color={colors.text} />
              <View style={{ width: width - 110 }}>
                <Input
                  value={currentMessage}
                  setValue={setCurrentMessage}
                  placeholder="Enter your message..."
                />
              </View>

              <AntDesign
                name="send"
                size={24}
                color={colors.text}
                onPress={handleAddMessage}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ThemeSafeView>
  );
};

export default Chatroom;

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  chatInfo: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,

    flexDirection: "row",
  },
  chatInput: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    justifyContent: "center",
  },
});
