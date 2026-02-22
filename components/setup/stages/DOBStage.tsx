import Button from "@/components/common/Button";
import ThemeText from "@/components/common/ThemeText";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useEffect, useState } from "react";
import { Platform, Pressable, StyleSheet, View } from "react-native";
import SetupInput from "../SetupInput";

type DOBStageType = {
  value: string;
  setValue: (type: string, value: string) => void;
  handleNextStep: () => void;
};

const DOBStage = ({ value, setValue, handleNextStep }: DOBStageType) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [age, setAge] = useState(0);

  function dateConverter(dob: string) {
    if (!dob) return 0;

    const [day, month, year] = dob.split("/").map(Number);

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const hasHadBirthdayThisYear =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate());

    if (!hasHadBirthdayThisYear) {
      age--;
    }

    return age;
  }

  useEffect(() => {
    setAge(dateConverter(value));
  }, [value]);

  const AGE_REQUIREMENT = age >= 18 && age <= 80;

  return (
    <View style={styles.view}>
      <View style={styles.inputView}>
        <ThemeText style={[styles.text, { fontWeight: 600, fontSize: 20 }]}>
          Enter your birthday
        </ThemeText>
        <ThemeText style={styles.text}>
          Your profile will show your age, not your date of birth.
        </ThemeText>
        <Pressable onPress={() => setShowDatePicker(true)}>
          <View pointerEvents="none">
            <SetupInput
              value={value || new Date().toLocaleDateString()}
              setValue={setValue}
              placeholder="Date of Birth"
              inputType="dob"
            />
          </View>
        </Pressable>
        {age > 0 &&
          (AGE_REQUIREMENT ? (
            <ThemeText>You are {dateConverter(value)} years old.</ThemeText>
          ) : (
            <ThemeText style={{ color: "#ff0000" }}>
              Sorry, you did not match our age requirement.
            </ThemeText>
          ))}
        {AGE_REQUIREMENT && (
          <Button onPress={handleNextStep}>
            <ThemeText>Next</ThemeText>
          </Button>
        )}
      </View>

      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          is24Hour
          display={Platform.OS === "ios" ? "spinner" : "default"}
          mode="date"
          onChange={(_, date) => {
            if (Platform.OS === "android") {
              setShowDatePicker(false);
            }
            setValue("dob", date?.toLocaleDateString("en-GB") || "");
          }}
          style={{ alignSelf: "center" }}
        />
      )}
    </View>
  );
};

export default DOBStage;

const styles = StyleSheet.create({
  view: {
    justifyContent: "space-between",
    flex: 1,
  },
  text: {
    textAlign: "center",
  },
  inputView: {
    gap: 10,
  },
});
