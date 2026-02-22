import { MediaType } from "@/app/setup";
import Button from "@/components/common/Button";
import ThemeText from "@/components/common/ThemeText";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import ImagePicker from "../ImagePicker";
import IntroVideoPicker from "../IntroVideoPicker";

type UploadMediaStageType = {
  media: MediaType[];
  setValue: (type: string, value: string) => void;
};

const UploadMediaStage = ({ media, setValue }: UploadMediaStageType) => {
  const MAX_IMAGES = 3;
  const imageList = media.filter((item) => item.type === "images");
  return (
    <View style={styles.view}>
      <ThemeText style={{ fontWeight: 600, fontSize: 18 }}>
        Upload your images
      </ThemeText>
      <ThemeText style={{ textAlign: "center" }}>
        You can upload a short introduction video and images for your profile.
      </ThemeText>

      <View style={{ flexDirection: "row", gap: 10 }}>
        <View style={{ width: "60%" }}>
          <IntroVideoPicker
            video={media.find((item) => item.type === "videos")?.src || ""}
            setVideo={(value: string) => setValue("media.videos", value)}
          />
        </View>
        <View style={{ gap: 10, width: "40%" }}>
          {Array.from({ length: MAX_IMAGES }).map((_, key) => (
            <ImagePicker
              key={key}
              image={imageList?.[key]?.src || ""}
              setImage={(value: string) => setValue("media.images", value)}
            />
          ))}
        </View>
      </View>
      {imageList.length > 0 && (
        <Button onPress={() => router.replace("/(tabs)")}>
          <ThemeText>Complete</ThemeText>
        </Button>
      )}
    </View>
  );
};

export default UploadMediaStage;

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    flex: 1,
    gap: 20,
    paddingHorizontal: 20,
  },
});
