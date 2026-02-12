import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CreateStory from "./CreateStory";
import Story from "./Story";

const TEST_DATA = [
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCMP3I-xe_rhuJpKxNfdLnl7Ut2mdAD7ft-A&s",
    name: "Morgan",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8wJnXd4KycPBRnToZ13FGGHMQOqMkIxMOug&s",
    name: "Jing Yi",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnTWnCxRVcMHrHWzTdOnkHnRXkIxcovsuh4A&s",
    name: "Jia Hui",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5JGKtgyLR1bSVFatDp4PITOB9XkTaevzhjg&s",
    name: "Ting Ting",
  },
  {
    imageUrl:
      "https://cdn2.stylecraze.com/wp-content/uploads/2013/06/Sham-Yen-Yi.jpg.webp",
    name: "Joanne",
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
