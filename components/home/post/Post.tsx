import React from "react";
import { StyleSheet, View } from "react-native";
import PostImages from "./postItems/PostImages";
import PostInteractive from "./postItems/PostInteractive";
import PostUserInfo from "./postItems/PostUserInfo";

type PostProps = {
  name: string;
  imageUrl: string;
  isLiked: boolean;
  likesCount: number;
  commentsCount: number;
};

const Post = ({
  name,
  imageUrl,
  isLiked,
  likesCount,
  commentsCount,
}: PostProps) => {
  return (
    <View style={styles.view}>
      {/* Image -> Name -> Report */}
      <PostUserInfo name={name} imageUrl={imageUrl} />
      {/* Image */}
      <PostImages imageUrl={imageUrl} />
      {/* Interactive Buttons */}
      <PostInteractive
        isLiked={isLiked}
        likeCount={likesCount}
        commentCount={commentsCount}
      />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  view: {
    height: 400,
    width: "100%",
    gap: 5,
  },
});
