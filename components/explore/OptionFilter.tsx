import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Option from "./Option";

type OptionType = {
  matches: boolean;
  following: boolean;
  isNew: boolean;
  verified: boolean;
};

const initial = {
  matches: false,
  following: false,
  isNew: false,
  verified: false,
};

const OptionFilter = () => {
  const [optionSelection, setOptionSelection] = useState<OptionType>(initial);

  return (
    <View style={styles.view}>
      <ScrollView horizontal contentContainerStyle={styles.options}>
        <Option
          text="Your Matches"
          isSelected={optionSelection.matches}
          handleSelect={() =>
            setOptionSelection((prev) => {
              return { ...prev, matches: !prev.matches };
            })
          }
        />
        <Option
          text="Following"
          isSelected={optionSelection.following}
          handleSelect={() =>
            setOptionSelection((prev) => {
              return { ...prev, following: !prev.following };
            })
          }
        />
        <Option
          text="New"
          isSelected={optionSelection.isNew}
          handleSelect={() =>
            setOptionSelection((prev) => {
              return { ...prev, isNew: !prev.isNew };
            })
          }
        />
        <Option
          text="Verified"
          isSelected={optionSelection.verified}
          handleSelect={() =>
            setOptionSelection((prev) => {
              return { ...prev, verified: !prev.verified };
            })
          }
        />
      </ScrollView>
    </View>
  );
};

export default OptionFilter;

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    height: 40,
    paddingHorizontal: 10,
  },
  options: {
    gap: 7,
  },
  filter: {
    width: "10%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
