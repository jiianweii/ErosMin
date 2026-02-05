import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Divider from "../common/Divider";
import ActionGroup, { ActionGroupProps } from "./ActionGroup";

const SAMPLE_DATA = [
  {
    date: "Today",
    actionList: [
      {
        id: 1,
        type: "offer",
        action: "Get 30% off Super Membership today",
      },
      {
        id: 2,
        type: "like",
        action: "Alex liked your photo",
      },
      {
        id: 3,
        type: "comment",
        action: "Jamie commented on your photo",
      },
    ],
  },
  {
    date: "Yesterday",
    actionList: [
      {
        id: 4,
        type: "like",
        action: "Chris liked your photo",
      },
    ],
  },
  {
    date: "3 February",
    actionList: [
      {
        id: 5,
        type: "comment",
        action: "Sam commented on your photo",
      },
      {
        id: 6,
        type: "like",
        action: "Taylor liked your photo",
      },
    ],
  },
  {
    date: "2 February",
    actionList: [
      {
        id: 7,
        type: "comment",
        action: "Morgan commented on your photo",
      },
    ],
  },
  {
    date: "1 February",
    actionList: [
      {
        id: 8,
        type: "offer",
        action: "Limited-time discount on Super Membership",
      },
      {
        id: 9,
        type: "like",
        action: "Casey liked your photo",
      },
    ],
  },
  {
    date: "31 January",
    actionList: [
      {
        id: 10,
        type: "game",
        action: "You won a game against Riley",
      },
    ],
  },
  {
    date: "30 January",
    actionList: [
      {
        id: 11,
        type: "comment",
        action: "Avery commented on your photo",
      },
    ],
  },
];

const ActionList = () => {
  return (
    <View style={styles.view}>
      <FlatList
        data={SAMPLE_DATA}
        renderItem={({ item }: { item: ActionGroupProps }) => (
          <ActionGroup {...item} />
        )}
        ItemSeparatorComponent={() => (
          <Divider thickness={0} marginVertical={16} />
        )}
        keyExtractor={(item) => item.date}
      />
    </View>
  );
};

export default ActionList;

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 3,
  },
});
