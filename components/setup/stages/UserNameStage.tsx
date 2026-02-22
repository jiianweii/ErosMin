import Button from "@/components/common/Button";
import ThemeText from "@/components/common/ThemeText";
import useColors from "@/util/colors";
import React from "react";
import { StyleSheet, View } from "react-native";
import ErrorMessage from "../ErrorMessage";
import SetupInput from "../SetupInput";
import SuccessMessage from "../SuccessMessage";

export type SetupProcessStageType = {
  value: string;
  setValue: (type: string, value: string) => void;
  handleNextStep: () => void;
};

const UserNameStage = ({
  value,
  setValue,
  handleNextStep,
}: SetupProcessStageType) => {
  const colors = useColors();
  const showLengthError = value.length < 8 || value.length > 24;
  const showTakenError = value === "itsjianweii";

  return (
    <View style={styles.view}>
      <ThemeText style={[styles.text, { fontWeight: 600, fontSize: 20 }]}>
        Create a username
      </ThemeText>
      <ThemeText style={styles.text}>
        Your username will appear on your profile and will be used across the
        platform.
      </ThemeText>
      <View style={styles.inputView}>
        <SetupInput
          value={value}
          setValue={setValue}
          inputType="username"
          placeholder="Username"
        />
        {value.length !== 0 && (
          <View style={styles.rqmView}>
            {!showLengthError && !showTakenError && (
              <SuccessMessage text="Username is available." />
            )}
            {showLengthError && (
              <ErrorMessage text="Must be around 8 - 24 letters" />
            )}
            {showTakenError && <ErrorMessage text="Username is taken" />}
          </View>
        )}
      </View>
      <Button
        onPress={() => !showLengthError && !showTakenError && handleNextStep()}
      >
        <ThemeText>Next</ThemeText>
      </Button>
    </View>
  );
};

export default UserNameStage;

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    gap: 15,
  },
  text: {
    textAlign: "center",
  },
  inputView: {
    width: "100%",
    gap: 10,
  },

  rqmView: {},
});
