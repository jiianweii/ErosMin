import Divider from "@/components/common/Divider";
import ThemeSafeView from "@/components/common/ThemeSafeView";
import Filter from "@/components/explore/Filter";
import OptionFilter from "@/components/explore/OptionFilter";
import Search from "@/components/explore/Search";
import Users from "@/components/explore/Users";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

const Explore = () => {
  const [search, setSearch] = useState("");
  return (
    <ThemeSafeView style={styles.view}>
      {/* <Helper /> */}
      <Divider thickness={0} />
      <View style={{ flexDirection: "row", paddingHorizontal: 10, gap: 7 }}>
        <Search />
        <Filter />
      </View>

      <Divider thickness={0} marginVertical={6} />
      <OptionFilter />
      <Divider thickness={0} marginVertical={6} />

      {/* People that matched you */}
      {/* Popular Users */}
      <Users />
    </ThemeSafeView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginBottom: 56,
  },
});
