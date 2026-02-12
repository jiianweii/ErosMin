import Divider from "@/components/common/Divider";
import React from "react";
import { FlatList, View } from "react-native";
import Post from "./Post";

const TEST_DATA = [
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCMP3I-xe_rhuJpKxNfdLnl7Ut2mdAD7ft-A&s",
    name: "Morgan",
    isLiked: false,
    likesCount: 108,
    commentsCount: 6,
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8wJnXd4KycPBRnToZ13FGGHMQOqMkIxMOug&s",
    name: "Jing Yi",
    isLiked: false,
    likesCount: 203,
    commentsCount: 6,
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnTWnCxRVcMHrHWzTdOnkHnRXkIxcovsuh4A&s",
    name: "Jia Hui",
    isLiked: false,
    likesCount: 198,
    commentsCount: 6,
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5JGKtgyLR1bSVFatDp4PITOB9XkTaevzhjg&s",
    name: "Ting Ting",
    isLiked: false,
    likesCount: 200,
    commentsCount: 6,
  },
  {
    imageUrl:
      "https://cdn2.stylecraze.com/wp-content/uploads/2013/06/Sham-Yen-Yi.jpg.webp",
    name: "Joanne",
    isLiked: false,
    likesCount: 165,
    commentsCount: 6,
  },
];

const PostList = () => {
  return (
    <View>
      <FlatList
        data={TEST_DATA}
        renderItem={({ item }) => <Post {...item} />}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Divider thickness={0} />}
      />
    </View>
  );
};

export default PostList;
