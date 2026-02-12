import React, { useState } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import GalleryMedia from "./GalleryMedia";
import MediaLength from "./MediaLength";

const SAMPLE_MEDIA = [
  {
    source:
      "https://i.pinimg.com/736x/2b/67/58/2b6758f6db222917c1c822182dd13a7c.jpg",
  },
  {
    source:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReFpAINXYVNnj3reEXbDWv0ZXuNftnRtvnNQ&s",
  },
  {
    source:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw8fpt_O4gTyHt3K1Ro8d-2HYOed0nlhHWGQ&s",
  },
];

const Gallery = () => {
  const { width } = Dimensions.get("window");
  const [currentMediaIndex, setCurrentMediaIndex] = useState<number>(0);

  return (
    <View style={styles.view}>
      <MediaLength length={SAMPLE_MEDIA.length} index={currentMediaIndex} />
      <FlatList
        data={SAMPLE_MEDIA}
        keyExtractor={(item) => item.source}
        renderItem={({ item }) => <GalleryMedia {...item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={[styles.view, { width }]}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentMediaIndex(index);
        }}
      />
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});
