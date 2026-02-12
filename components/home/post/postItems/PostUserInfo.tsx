import useColors from "@/util/colors";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type PostUserInfoProps = {
  name: string;
  imageUrl: string;
};

const PostUserInfo = ({ name, imageUrl }: PostUserInfoProps) => {
  const colors = useColors();
  return (
    <View style={styles.view}>
      <View style={styles.userInfo}>
        <View style={styles.imageProfile}>
          <Image style={styles.image} source={imageUrl} />
        </View>
        <Text style={{ color: colors.text, fontWeight: 500 }}>{name}</Text>
      </View>
      <TouchableOpacity>
        <Ionicons name="options" size={20} color={colors.text} />
      </TouchableOpacity>
    </View>
  );
};

export default PostUserInfo;

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
  },
  userInfo: { flexDirection: "row", alignItems: "center", gap: 5 },
  imageProfile: {
    height: 30,
    width: 30,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
