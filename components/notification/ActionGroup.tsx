import useColors from "@/util/colors";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Divider from "../common/Divider";
import Action, { ActionProps } from "./Action";

export type ActionGroupProps = {
  date: string;
  actionList: ActionProps[];
};

const ActionGroup = ({ date, actionList }: ActionGroupProps) => {
  const colors = useColors();
  return (
    <View>
      {/* Date -> Accordion */}
      <Text style={{ color: colors.text, fontWeight: 500, fontSize: 18 }}>
        {date}
      </Text>
      <Divider thickness={0} marginVertical={8} />
      <View style={{ paddingHorizontal: 1 }}>
        <FlatList
          data={actionList}
          renderItem={({ item }) => <Action {...item} />}
          ItemSeparatorComponent={() => (
            <Divider thickness={0} marginVertical={3} />
          )}
          keyExtractor={(item) => item.id + ""}
        />
      </View>
    </View>
  );
};

export default ActionGroup;

const styles = StyleSheet.create({});
