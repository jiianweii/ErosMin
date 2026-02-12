import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import User from "./User";

const SAMPLE_USERS = [
  {
    id: 0,
    name: "Anisha Oriento",
    source:
      "https://i.pinimg.com/736x/2b/67/58/2b6758f6db222917c1c822182dd13a7c.jpg",
  },
  {
    id: 1,
    name: "Yan Tong Lee",
    source:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIQQsfDUW7WDm250sdTOf0fQsUp_GYSI7Y6Q&s",
  },
  {
    id: 2,
    name: "Zi Qi",
    source:
      "https://i.pinimg.com/736x/96/c1/46/96c146d85768edf567549a2b093fb42c.jpg",
  },
];

const Users = () => {
  return (
    <View style={styles.view}>
      <FlatList
        data={SAMPLE_USERS}
        renderItem={({ item }) => <User {...item} />}
        keyExtractor={(item) => item.id + ""}
        numColumns={2}
        style={{ flex: 1, flexWrap: "wrap", padding: 10 }}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 6 }}></View>}
        columnWrapperStyle={{ columnGap: 6 }}
      />
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});
