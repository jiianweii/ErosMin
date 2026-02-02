import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";
import Helper from "./Helper";
import Selection from "./Selection";
import Swipeable from "./Swipeable";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const SwipeFeed = () => {
  return (
    <View style={styles.container}>
      <Helper />

      <Image
        style={styles.image}
        source="https://images.pexels.com/photos/4068151/pexels-photo-4068151.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />

      {/* Centered profile container */}
      <View style={styles.centered}>
        <View style={styles.profile}>
          <Swipeable />
        </View>
      </View>

      <Selection />
    </View>
  );
};

export default SwipeFeed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
  },
  centered: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  profile: {
    height: 400,
    width: 300,
    backgroundColor: "#000",
    borderRadius: 30,
    overflow: "hidden",
  },
});
