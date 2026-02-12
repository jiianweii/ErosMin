import Divider from "@/components/common/Divider";
import ThemeSafeView from "@/components/common/ThemeSafeView";
import Notification from "@/components/home/Notification";
import PostList from "@/components/home/post/PostList";
import StoryList from "@/components/home/stories/StoryList";
import UserInfo from "@/components/home/UserInfo";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <ThemeSafeView style={styles.view}>
      {/* User Info -> Notifications */}
      <View style={styles.topNav}>
        <UserInfo />
        <Notification notifCount={3} />
      </View>
      <Divider thickness={0} />
      {/* Stories (People you liked and liked you back) */}
      <View style={styles.storiesView}>
        <StoryList />
      </View>
      <Divider thickness={0} />
      {/* Posts */}
      <View style={styles.postView}>
        {/* <PostCategories /> */}
        {/* <Divider thickness={0} /> */}
        <PostList />
      </View>
    </ThemeSafeView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginBottom: 56,
  },
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 0.5,
    paddingHorizontal: 20,
  },
  storiesView: {
    flex: 1.2,
    paddingHorizontal: 10,
  },
  postView: {
    flex: 8,
    paddingHorizontal: 10,
  },
});
