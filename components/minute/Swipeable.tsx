import useColors from "@/util/colors";
import { Image } from "expo-image";
import { useVideoPlayer, VideoView } from "expo-video";
import React, { useEffect } from "react";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import Profile from "./Profile";

type SwipeableProps = {
  videoSrc: string;
  imageSrc: string;
  title: string;
  thumb: string;
  subtitle: string;

  isActive: boolean;
  showFullProfile: () => void;
};

const blurhash = "Afke020i02mck2ewjkfojc3ocrjo2";

const Swipeable = ({
  videoSrc,
  imageSrc,
  title,
  thumb,
  subtitle,
  isActive,
  showFullProfile,
}: SwipeableProps) => {
  const { width, height } = Dimensions.get("window");
  const colors = useColors();

  const handleToggleablePlayVideo = () =>
    player.playing ? player.pause() : player.play();

  const player = useVideoPlayer(videoSrc, (player) => {
    if (!player) return;
    player.loop = true;
    player.play();
  });

  useEffect(() => {
    if (!player) return;

    if (isActive) {
      player.loop = true;
      player.play();
    } else {
      player.replay();
      player.pause();
    }

    // return () => player && player.release();
  }, [isActive, player]);

  return (
    <View style={[styles.view, { width, height }]}>
      {!videoSrc ? (
        <Image
          style={styles.video}
          source={imageSrc}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
      ) : (
        <Pressable style={styles.video} onPress={handleToggleablePlayVideo}>
          <VideoView
            style={[StyleSheet.absoluteFill]}
            player={player}
            nativeControls={false}
            contentFit="cover"
          />
        </Pressable>
      )}
      <View
        style={[
          styles.interactive,
          { backgroundColor: colors.background + "90" },
        ]}
      >
        {/* Profile */}
        <Profile
          source={thumb}
          name={title}
          showFullProfile={showFullProfile}
        />
      </View>
    </View>
  );
};

export default Swipeable;

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  video: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#0553",
  },
  interactive: {
    position: "absolute",
    bottom: 25,

    right: 10,

    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",

    borderRadius: 20,
  },
  interactiveBtns: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  btn: {
    padding: 15,
    borderRadius: 50,
    backgroundColor: "#000",
  },
});
