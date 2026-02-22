import Divider from "@/components/common/Divider";
import ThemeSafeView from "@/components/common/ThemeSafeView";
import Progression from "@/components/setup/Progression";
import DOBStage from "@/components/setup/stages/DOBStage";
import GenderStage from "@/components/setup/stages/GenderStage";
import NameStage from "@/components/setup/stages/NameStage";
import UploadMediaStage from "@/components/setup/stages/UploadMediaStage";
import UserNameStage from "@/components/setup/stages/UserNameStage";
import useColors from "@/util/colors";
import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

export type MediaType = {
  type: "videos" | "images";
  src: string;
};

type UserProfileType = {
  username: string;
  name: string;
  dob: string;
  gender: string;
  orientation: string;
  interests: string[];
  media: MediaType[];
};

const initialData = {
  username: "",
  name: "",
  dob: "",
  gender: "",
  orientation: "",
  interests: [],
  media: [],
};

const Setup = () => {
  const MAX_STAGE = 5;
  const [setupProcess, setSetupProcess] = useState(1);
  const [userProfile, setUserProfile] = useState<UserProfileType>(initialData);

  const colors = useColors();

  const widthPercentage = (setupProcess / MAX_STAGE) * 100 + "%";

  function handleUserProfileInput(type: string, value: string) {
    setUserProfile((prev) => {
      if (type === "interests") {
        const exists = prev.interests.includes(value);

        return {
          ...prev,
          interests: exists
            ? prev.interests.filter((item) => item !== value)
            : [...prev.interests, value],
        };
      }

      if (type.startsWith("media.")) {
        const [, mediaType] = type.split(".");

        const currentMedia = [...prev.media];

        const videos = currentMedia.filter((item) => item.type === "videos");
        const images = currentMedia.filter((item) => item.type === "images");

        if (mediaType === "videos") {
          const updatedMedia = [...images, { type: "videos", src: value }];

          return { ...prev, media: updatedMedia };
        }

        if (mediaType === "images") {
          if (images.length < 3) {
            // Add new image
            return {
              ...prev,
              media: [...currentMedia, { type: "images", src: value }],
            };
          } else {
            // Replace oldest image (or last one)
            const updatedImages = [...images];
            updatedImages.shift(); // removes first image
            updatedImages.push({ type: "images", src: value });

            return {
              ...prev,
              media: [...videos, ...updatedImages],
            };
          }
        }
      }
      return { ...prev, [type]: value };
    });
  }

  function handleNextStep() {
    setSetupProcess((prev) => (prev < MAX_STAGE ? prev + 1 : prev));
  }

  function handlePrevStep() {
    setSetupProcess((prev) => (prev > 1 ? prev - 1 : prev));
  }

  return (
    <ThemeSafeView style={styles.view}>
      <Progression widthPercentage={widthPercentage} />
      <Divider thickness={0} />
      {setupProcess > 1 && (
        <Entypo
          name="chevron-left"
          size={24}
          color={colors.text}
          onPress={handlePrevStep}
        />
      )}

      <Divider thickness={0} marginVertical={16} />
      {setupProcess === 1 && (
        <UserNameStage
          value={userProfile.username}
          setValue={handleUserProfileInput}
          handleNextStep={handleNextStep}
        />
      )}
      {setupProcess === 2 && (
        <NameStage
          value={userProfile.name}
          setValue={handleUserProfileInput}
          handleNextStep={handleNextStep}
        />
      )}
      {setupProcess === 3 && (
        <DOBStage
          value={userProfile.dob}
          setValue={handleUserProfileInput}
          handleNextStep={handleNextStep}
        />
      )}
      {setupProcess === 4 && (
        <GenderStage
          gender={userProfile.gender}
          orientation={userProfile.orientation}
          setValue={handleUserProfileInput}
          handleNextStep={handleNextStep}
          interests={userProfile.interests}
        />
      )}
      {setupProcess === 5 && (
        <UploadMediaStage
          media={userProfile.media}
          setValue={handleUserProfileInput}
        />
      )}
    </ThemeSafeView>
  );
};

export default Setup;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
