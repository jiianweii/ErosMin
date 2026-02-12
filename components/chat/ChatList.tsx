import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Divider from "../common/Divider";
import ThemeText from "../common/ThemeText";
import ChatConversation from "./ChatConversation";

const SAMPLE_DATA = [
  {
    name: "Morgan",
    source:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCMP3I-xe_rhuJpKxNfdLnl7Ut2mdAD7ft-A&s",
    date: "03:54",
    message: "Yo, fine shyt",
  },
  {
    name: "Jing Yi",
    source:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8wJnXd4KycPBRnToZ13FGGHMQOqMkIxMOug&s",
    date: "02:41",
    message: "You still up?",
  },
  {
    name: "Jia Hui",
    source:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnTWnCxRVcMHrHWzTdOnkHnRXkIxcovsuh4A&s",
    date: "01:18",
    message: "That pic you posted 😮‍🔥",
  },
  {
    name: "Ting Ting",
    source:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5JGKtgyLR1bSVFatDp4PITOB9XkTaevzhjg&s",
    date: "23:09",
    message: "I’m outside",
  },
  {
    name: "Lena",
    source:
      "https://cdn.prod.website-files.com/5fdb2fcbe8cb905cd95d758f/67b46b62dcc1370b0703c52c_Lena%20Mahfouf.png",
    date: "21:37",
    message: "Goodnight 💕",
  },
  {
    name: "Joanne",
    source:
      "https://cdn2.stylecraze.com/wp-content/uploads/2013/06/Sham-Yen-Yi.jpg.webp",
    date: "Yesterday",
    message: "Did you get home safe?",
  },
  {
    name: "Ari",
    source:
      "https://static.wikia.nocookie.net/kpop/images/a/ad/Ari_profile_photo_%281%29.png/revision/latest?cb=20201002083740",
    date: "Yesterday",
    message: "We should do that again",
  },
];

const ChatList = () => {
  return (
    <View style={styles.view}>
      <View style={styles.titleView}>
        <ThemeText style={styles.title}>
          All Conversation ({SAMPLE_DATA.length})
        </ThemeText>
      </View>

      <FlatList
        data={SAMPLE_DATA}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <ChatConversation {...item} />}
        ItemSeparatorComponent={() => (
          <Divider thickness={0} marginVertical={8} />
        )}
      />
    </View>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    gap: 10,
  },
  titleView: {
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: 600,
  },
});
