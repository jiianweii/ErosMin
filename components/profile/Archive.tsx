import { router } from "expo-router";
import React from "react";
import {
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import ThemeText from "../common/ThemeText";
import ArchiveMedia from "./ArchiveMedia";

type ArchiveProps = {
  type: "PREVIEW" | "FULL";
};

const SAMPLE_DATA = [
  {
    source:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuz7No_nvv3mZfQztamyNbuf9bDgQ5JPbfrg&s",
  },
  {
    source:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMTuH_eBN3R7REZYYkir6muI79ngeZp3bGbw&s",
  },
  {
    source:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd5nyb81VMRGzbK7JAGQ7kchOfylLNIdutNQ&s",
  },
];

const Archive = ({ type }: ArchiveProps) => {
  const { width } = Dimensions.get("window");

  return type === "PREVIEW" ? (
    <View style={{ flex: 1, gap: 10 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ThemeText style={styles.viewTitle}>Archive</ThemeText>
        <Pressable onPress={() => router.push("/archive/archive")}>
          <ThemeText>See All</ThemeText>
        </Pressable>
      </View>

      {/* Images */}
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
        {SAMPLE_DATA.slice(0, 6).map((data, key) => (
          <ArchiveMedia {...data} key={key} />
        ))}
      </View>
    </View>
  ) : (
    <FlatList
      data={SAMPLE_DATA}
      renderItem={({ item }) => <ArchiveMedia {...item} />}
      keyExtractor={(item) => item.source}
      horizontal={false}
      numColumns={2}
      style={{ flex: 1, width: width }}
      columnWrapperStyle={{ columnGap: 10 }}
      ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
    />
  );
};
export default Archive;

const styles = StyleSheet.create({
  viewTitle: {
    fontWeight: 600,
    fontSize: 20,
  },
});
