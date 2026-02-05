import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Divider from "../common/Divider";
import ChatConversation from "./ChatConversation";

const SAMPLE_DATA = [
  {
    name: "Nash",
    source: "https://www.famousbirthdays.com/headshots/-nash-dc-4.jpg",
    date: "03:54",
    message: "Yo, fine shyt",
  },
  {
    name: "Alex",
    source:
      "https://recordstore.co.uk/cdn/shop/files/channels4_profile.jpg?v=1755080910&width=900",
    date: "02:41",
    message: "You still up?",
  },
  {
    name: "Jade",
    source:
      "https://m.media-amazon.com/images/M/MV5BYzJjMmQ4YTctYWM2Zi00YzVmLWFmZmItMDA0ZmVhOGNhMjA3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    date: "01:18",
    message: "That pic you posted 😮‍🔥",
  },
  {
    name: "Marcus",
    source:
      "https://lkcnhm.nus.edu.sg/wp-content/uploads/sites/11/2024/02/2025-Marcus-Chua.jpg",
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
    name: "Chris",
    source:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHVSu_iyZ8XW87QPYQy_RrgzNNEilfeege1w&s",
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
  },
});
