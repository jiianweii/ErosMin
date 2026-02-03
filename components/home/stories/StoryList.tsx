import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CreateStory from "./CreateStory";
import Story from "./Story";

const TEST_DATA = [
  {
    imageUrl:
      "https://i.pinimg.com/474x/c3/b0/62/c3b062198d95026d4e8c211f9e6d8922.jpg",
    name: "@Axellynnax",
  },
  {
    imageUrl:
      "https://i.pinimg.com/originals/60/59/db/6059db2d934d5925625fe1d7acb9dc5e.jpg",
    name: "@Cameron2xy",
  },
  {
    imageUrl:
      "https://i.pinimg.com/736x/10/f4/e5/10f4e5b38748d3a8edcf781156643c8e.jpg",
    name: "@Kylevasilyn",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQolnbeMqs63y5hIjmDWFVGBY0-Xoa1YZXTFg&s",
    name: "@Royce2max",
  },
  {
    imageUrl:
      "https://i.pinimg.com/236x/43/d5/f4/43d5f48a4f6a5e1d9d738a257c06f979.jpg",
    name: "@Ralphmatt",
  },
];

const StoryList = () => {
  return (
    <View style={styles.list}>
      <View style={{ alignItems: "flex-start" }}>
        <CreateStory />
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={TEST_DATA}
          renderItem={({ item }) => <Story {...item} />}
          keyExtractor={(item) => item.name}
          ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default StoryList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: "row",
    gap: 15,
  },
});
