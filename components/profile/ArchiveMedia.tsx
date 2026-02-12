import { Image } from "expo-image";
import React from "react";
import { Dimensions } from "react-native";

type ArchiveMediaProps = {
  source: string;
};

const ArchiveMedia = ({ source }: ArchiveMediaProps) => {
  const { width } = Dimensions.get("window");
  return (
    <Image
      source={source}
      style={{
        width: (width - 50) / 2,
        height: 200,
      }}
    />
  );
};

export default ArchiveMedia;
