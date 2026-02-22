import Button from "@/components/common/Button";
import ThemeText from "@/components/common/ThemeText";
import useColors from "@/util/colors";
import {
  Entypo,
  Foundation,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

type GenderStageTypes = {
  gender: string;
  orientation: string;
  interests: string[];
  handleNextStep: () => void;
  setValue: (type: string, value: string) => void;
};

const GenderStage = ({
  gender,
  orientation,
  interests,
  handleNextStep,
  setValue,
}: GenderStageTypes) => {
  const { width } = Dimensions.get("window");
  const colors = useColors();

  const getButtonStyle = (selected: boolean, length: number) => ({
    width: (width - 50) / length,
    backgroundColor: selected ? colors.button : colors.primary,
  });

  const isCompleted = gender && orientation && interests.length > 0;

  return (
    <View style={styles.view}>
      <View style={styles.question}>
        <ThemeText style={{ fontWeight: "600" }}>
          What is your gender?
        </ThemeText>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Button
            styles={getButtonStyle(gender === "Male", 2)}
            onPress={() => setValue("gender", "Male")}
          >
            <Foundation name="male-symbol" size={18} color={colors.text} />
            <ThemeText>Male</ThemeText>
          </Button>

          <Button
            styles={getButtonStyle(gender === "Female", 2)}
            onPress={() => setValue("gender", "Female")}
          >
            <Foundation name="female-symbol" size={18} color={colors.text} />
            <ThemeText>Female</ThemeText>
          </Button>
        </View>
      </View>

      {gender && (
        <View style={styles.question}>
          <ThemeText style={{ fontWeight: "600" }}>
            What is your orientation?
          </ThemeText>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Button
              styles={getButtonStyle(orientation === "Straight", 3)}
              onPress={() => setValue("orientation", "Straight")}
            >
              <MaterialIcons name="straight" size={18} color={colors.text} />
              <ThemeText>Straight</ThemeText>
            </Button>
            <Button
              styles={getButtonStyle(orientation === "Bisexual", 3)}
              onPress={() => setValue("orientation", "Bisexual")}
            >
              <SimpleLineIcons
                name="directions"
                size={18}
                color={colors.text}
              />
              <ThemeText>Bisexual</ThemeText>
            </Button>
            <Button
              styles={getButtonStyle(orientation === "Gay", 3)}
              onPress={() => setValue("orientation", "Gay")}
            >
              <Entypo name="rainbow" size={24} color={colors.text} />
              <ThemeText>Gay</ThemeText>
            </Button>
          </View>
        </View>
      )}
      {orientation && (
        <View style={styles.question}>
          <ThemeText>What are your goals?</ThemeText>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Button
              styles={getButtonStyle(interests?.includes("Long Term"), 2)}
              onPress={() => setValue("interests", "Long Term")}
            >
              <ThemeText>Long Term</ThemeText>
            </Button>
            <Button
              styles={getButtonStyle(interests?.includes("Short Term"), 2)}
              onPress={() => setValue("interests", "Short Term")}
            >
              <ThemeText>Short Term</ThemeText>
            </Button>
          </View>
        </View>
      )}
      {isCompleted && (
        <Button onPress={handleNextStep} styles={{ marginTop: 30 }}>
          <ThemeText>Next</ThemeText>
        </Button>
      )}
    </View>
  );
};

export default GenderStage;

const styles = StyleSheet.create({
  view: {
    gap: 20,
  },
  question: {
    gap: 10,
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
