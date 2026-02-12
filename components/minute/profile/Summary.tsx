import ThemeText from "@/components/common/ThemeText";
import React from "react";
import { StyleSheet, View } from "react-native";

type SummaryProps = {
  list: string[];
};

const Summary = ({ list }: SummaryProps) => {
  return (
    <View style={styles.aboutView}>
      <ThemeText style={styles.viewTitle}>About Me</ThemeText>
      {list.map((item, key) => (
        <ThemeText style={styles.text} key={key}>
          {item}
        </ThemeText>
      ))}
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  aboutView: {
    gap: 10,
  },
  viewTitle: {
    fontWeight: 600,
    fontSize: 20,
  },
  text: {
    fontSize: 16,
  },
});
