import Divider from "@/components/common/Divider";
import Notification from "@/components/home/Notification";
import PostCategories from "@/components/home/post/PostCategories";
import PostList from "@/components/home/post/PostList";
import StoryList from "@/components/home/stories/StoryList";
import UserInfo from "@/components/home/UserInfo";
import Colors from "@/util/colors";
import { StyleSheet, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const colors = Colors();
  return (
    <SafeAreaView style={[styles.view, { backgroundColor: colors.background }]}>
      {/* User Info -> Notifications */}
      <View style={styles.topNav}>
        <UserInfo />
        <Notification notifCount={3} />
      </View>
      <Divider />
      {/* Stories (People you liked and liked you back) */}
      <View style={styles.storiesView}>
        <StoryList />
      </View>
      <Divider thickness={0} />
      {/* Posts */}
      <View style={styles.postView}>
        <PostCategories />
        <Divider thickness={0} />
        <PostList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 0.5,
    paddingHorizontal: 20,
  },
  storiesView: {
    flex: 1,
    paddingHorizontal: 10,
  },
  postView: {
    flex: 8,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});
