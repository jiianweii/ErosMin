import { ResizeMode, Video } from "expo-av";
import * as ImagePicker from "expo-image-picker";
import React, { useRef, useState } from "react";
import { Alert, Pressable } from "react-native";
import ThemeText from "../common/ThemeText";

type IntroVideoPickerTypes = {
  video: string;
  setVideo: (value: string) => void;
};

const IntroVideoPicker = ({ video, setVideo }: IntroVideoPickerTypes) => {
  const videoRef = useRef<Video>(null);

  const pickVideo = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission required",
        "Permission to access the media library is required.",
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setVideo(result.assets[0].uri);
    }
  };

  return (
    <Pressable
      style={{
        width: "100%",
        height: 320,
        borderWidth: 1,
        borderColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={pickVideo}
    >
      {!video ? (
        <ThemeText>Add Intro Video</ThemeText>
      ) : (
        <Video
          ref={videoRef}
          source={{ uri: video }}
          style={{ width: "100%", height: "100%" }}
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay={false}
          isLooping
        />
      )}
    </Pressable>
  );
};

export default IntroVideoPicker;
