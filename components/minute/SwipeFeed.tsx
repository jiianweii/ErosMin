import React, { useRef, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import FullProfile from "./FullProfile";
import Helper from "./Helper";
import Swipeable from "./Swipeable";

const SAMPLE_DATA = [
  {
    videoSrc:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    subtitle: "By Blender Foundation",
    thumb:
      "https://i.pinimg.com/736x/2b/67/58/2b6758f6db222917c1c822182dd13a7c.jpg",
    title: "Anahita Bahrami",
    imageSrc: "",
  },
  {
    videoSrc: "https://www.pexels.com/download/video/31740846/",

    subtitle: "By Blender Foundation",
    thumb:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIQQsfDUW7WDm250sdTOf0fQsUp_GYSI7Y6Q&s",
    title: "Jing Yi",
    imageSrc: "",
  },
  {
    subtitle: "By Google",
    videoSrc: "",
    thumb:
      "https://i.pinimg.com/736x/96/c1/46/96c146d85768edf567549a2b093fb42c.jpg",
    title: "Zennifer",
    imageSrc:
      "https://otago.shorthandstories.com/girl-trends-on-tiktok/assets/coiVvWE72q/v0f044gc0000cjlir4rc77ufl6lo23a0_frame-0ms-576x1024.jpg",
  },
  {
    subtitle: "By Google",
    videoSrc: "https://www.pexels.com/download/video/35088512/",
    thumb: "images/ForBiggerEscapes.jpg",
    title: "Floyd",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkufEXX_k59Ps6vWn7jGWhVne6K4QsYIBjnA&s",
  },
  {
    videoSrc:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",

    subtitle: "By Google",
    thumb: "images/ForBiggerFun.jpg",
    title: "Biggie",
    imageSrc: "",
  },
  {
    videoSrc:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",

    subtitle: "By Google",
    thumb: "images/ForBiggerJoyrides.jpg",
    title: "Bigger",
    imageSrc: "",
  },
  {
    videoSrc:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",

    subtitle: "By Google",
    thumb: "images/ForBiggerMeltdowns.jpg",
    title: "Meltdowns",
    imageSrc: "",
  },
  {
    subtitle: "By Blender Foundation",
    videoSrc: "",
    thumb: "images/Sintel.jpg",
    title: "Sintel",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYXieBDO8NHBml9IVqwdvXMvZtaTgJ3v7Vxw&s",
  },
  {
    videoSrc:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",

    subtitle: "By Garage419",
    thumb: "images/SubaruOutbackOnStreetAndDirt.jpg",
    title: "Subaru",
    imageSrc: "",
  },
  {
    videoSrc:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",

    subtitle: "By Blender Foundation",
    thumb: "images/TearsOfSteel.jpg",
    title: "Tears",
    imageSrc: "",
  },
  {
    videoSrc:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",

    subtitle: "By Garage419",
    thumb: "images/VolkswagenGTIReview.jpg",
    title: "Volkswagen",
    imageSrc: "",
  },
  {
    subtitle: "By Garage419",
    thumb: "images/WeAreGoingOnBullrun.jpg",
    title: "Bullrun",
    videoSrc: "",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQji604mHEXqI9L-1SugWdZ2wEkbGIQBLlZ8A&s",
  },
  {
    videoSrc:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",

    subtitle: "By Garage419",
    thumb: "images/WhatCarCanYouGetForAGrand.jpg",
    title: "Grand?",
    imageSrc: "",
  },
];

const SwipeFeed = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isShowFullProfile, setIsShowFullProfile] = useState(false);
  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: any[] }) => {
      console.log("changed: ", viewableItems);
      if (viewableItems.length > 0 && viewableItems[0].index != null) {
        setActiveIndex(viewableItems[0].index);
      }
    },
  ).current;

  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 80,
  }).current;

  return (
    <View style={styles.container}>
      <Helper handleStopMedia={() => setActiveIndex(-1)} />
      <FlatList
        data={SAMPLE_DATA}
        renderItem={({ item, index }) => (
          <Swipeable
            {...item}
            isActive={index === activeIndex}
            showFullProfile={() => setIsShowFullProfile(true)}
          />
        )}
        keyExtractor={(item) => item.title}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      {isShowFullProfile && (
        <FullProfile hideFullProfile={() => setIsShowFullProfile(false)} />
      )}
    </View>
  );
};

export default SwipeFeed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
