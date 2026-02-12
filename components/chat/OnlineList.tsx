import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ThemeText from "../common/ThemeText";
import OnlineProfile from "./OnlineProfile";

const SAMPLE_DATA = [
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCMP3I-xe_rhuJpKxNfdLnl7Ut2mdAD7ft-A&s",
    name: "Morgan",
  },
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8wJnXd4KycPBRnToZ13FGGHMQOqMkIxMOug&s",
    name: "Jing Yi",
  },
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnTWnCxRVcMHrHWzTdOnkHnRXkIxcovsuh4A&s",
    name: "Jia Hui",
  },
];

const OnlineList = () => {
  return (
    <View style={styles.view}>
      <ThemeText style={styles.title}>Online ({SAMPLE_DATA.length})</ThemeText>
      <FlatList
        data={SAMPLE_DATA}
        renderItem={({ item }) => <OnlineProfile {...item} />}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={() => <View style={{ width: 16 }}></View>}
        horizontal
      />
    </View>
  );
};

export default OnlineList;

const styles = StyleSheet.create({
  view: {
    gap: 5,
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: 600,
  },
});
