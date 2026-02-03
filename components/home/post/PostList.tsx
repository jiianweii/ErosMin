import Divider from "@/components/common/Divider";
import React from "react";
import { FlatList, View } from "react-native";
import Post from "./Post";

const TEST_DATA = [
  {
    imageUrl:
      "https://i.pinimg.com/474x/c3/b0/62/c3b062198d95026d4e8c211f9e6d8922.jpg",
    name: "@Axellynnax",
    isLiked: false,
    likesCount: 10,
    commentsCount: 6,
  },
  {
    imageUrl:
      "https://i.pinimg.com/originals/60/59/db/6059db2d934d5925625fe1d7acb9dc5e.jpg",
    name: "@Cameron2xy",
    isLiked: true,
    likesCount: 38,
    commentsCount: 8,
  },
  {
    imageUrl:
      "https://i.pinimg.com/736x/10/f4/e5/10f4e5b38748d3a8edcf781156643c8e.jpg",
    name: "@Kylevasilyn",
    isLiked: false,
    likesCount: 24,
    commentsCount: 2,
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQolnbeMqs63y5hIjmDWFVGBY0-Xoa1YZXTFg&s",
    name: "@Royce2max",
    isLiked: false,
    likesCount: 17,
    commentsCount: 4,
  },
  {
    imageUrl:
      "https://i.pinimg.com/236x/43/d5/f4/43d5f48a4f6a5e1d9d738a257c06f979.jpg",
    name: "@Ralphmatt",
    isLiked: false,
    likesCount: 19,
    commentsCount: 3,
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
