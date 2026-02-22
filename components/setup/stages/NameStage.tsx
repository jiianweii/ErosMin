import Button from "@/components/common/Button";
import ThemeText from "@/components/common/ThemeText";
import React from "react";
import { StyleSheet, View } from "react-native";
import SetupInput from "../SetupInput";
import { SetupProcessStageType } from "./UserNameStage";

const NameStage = ({
  value,
  setValue,
  handleNextStep,
}: SetupProcessStageType) => {
  return (
    <View style={styles.view}>
      <ThemeText style={[styles.text, { fontWeight: 600, fontSize: 20 }]}>
        What is your name?
      </ThemeText>
      <ThemeText style={styles.text}>So people know who you are.</ThemeText>
      <SetupInput
        value={value}
        setValue={setValue}
        inputType="name"
        placeholder="Name"
      />

      <Button onPress={handleNextStep}>
        <ThemeText>Next</ThemeText>
      </Button>
    </View>
  );
};

export default NameStage;

const styles = StyleSheet.create({
  view: {
    gap: 15,
  },
  text: {
    textAlign: "center",
  },
});
