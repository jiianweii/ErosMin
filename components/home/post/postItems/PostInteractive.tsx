import Colors from "@/util/colors";
import { EvilIcons, FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type PostInteractiveProps = {
  isLiked: boolean;
  likeCount: number;
  commentCount: number;
};

const PostInteractive = ({
  isLiked,
  likeCount,
  commentCount,
}: PostInteractiveProps) => {
  const colors = Colors();
  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.btn}>
        {isLiked ? (
          <FontAwesome name="heart" size={26} color={colors.text} />
        ) : (
          <FontAwesome name="heart-o" size={26} color={colors.text} />
        )}
        <Text style={{ color: colors.text, fontSize: 16 }}>{likeCount}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <EvilIcons
          name="comment"
          size={34}
          color={colors.text}
          style={{ marginBottom: 1 }}
        />
        <Text style={{ color: colors.text, fontSize: 16 }}>{commentCount}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostInteractive;

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  btn: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
});
