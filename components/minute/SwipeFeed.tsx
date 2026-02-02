import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";
import Helper from "./Helper";
import Selection from "./Selection";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const SwipeFeed = () => {
  return (
    <View style={styles.view}>
      <Helper />
      <Image
        style={styles.image}
        source="https://i.pinimg.com/474x/f2/cd/76/f2cd764a0db5a8ea2c46ab6f88566bad.jpg"
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      <Selection />
    </View>
  );
};

export default SwipeFeed;

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  image: { flex: 1, width: "100%", backgroundColor: "#0553" },
});
