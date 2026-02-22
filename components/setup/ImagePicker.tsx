import { Image } from "expo-image";
import * as RNImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Alert, Dimensions, Pressable, StyleSheet } from "react-native";
import ThemeText from "../common/ThemeText";

type ImagePickerType = {
  image: string;
  setImage: (value: string) => void;
};

const ImagePicker = ({ image, setImage }: ImagePickerType) => {
  const pickImage = async () => {
    const { status } =
      await RNImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission required",
        "Permission to access the media library is required.",
      );
      return;
    }

    let result = await RNImagePicker.launchImageLibraryAsync({
      mediaTypes: RNImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <Pressable
      style={[styles.imageView, { width: "100%", height: 100 }]}
      onPress={pickImage}
    >
      {image ? (
        <Image
          source={{ uri: image }}
          style={{ width: "100%", height: "100%" }}
          contentFit="cover"
        />
      ) : (
        <ThemeText>Add Image</ThemeText>
      )}
    </Pressable>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  imageView: {
    height: 150,
    borderColor: "#fff",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});
