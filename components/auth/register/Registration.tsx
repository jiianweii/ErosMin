import Button from "@/components/common/Button";
import ThemeSafeView from "@/components/common/ThemeSafeView";
import ThemeText from "@/components/common/ThemeText";
import useColors from "@/util/colors";
import { AntDesign } from "@expo/vector-icons";
import React, { Dispatch, SetStateAction } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Input from "../Input";

type RegistrationTypes = {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  nextStep: () => void;
};

const Registration = ({ email, setEmail, nextStep }: RegistrationTypes) => {
  const colors = useColors();
  return (
    <ThemeSafeView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.view}>
            <View style={{ gap: 10, alignItems: "center" }}>
              <ThemeText style={{ fontWeight: 600, fontSize: 20 }}>
                ErosMin Dating
              </ThemeText>
              <ThemeText>
                Create an account and join the dating experience
              </ThemeText>
            </View>

            <View style={styles.oAuthView}>
              <Button
                styles={{
                  backgroundColor: colors.google,
                }}
              >
                <AntDesign name="google" size={24} color={colors.text} />
                <ThemeText>Google</ThemeText>
              </Button>
              <Button
                styles={{
                  backgroundColor: colors.apple,
                }}
              >
                <AntDesign name="apple" size={24} color={colors.text} />
                <ThemeText>Apple</ThemeText>
              </Button>
            </View>
            <View
              style={{ height: 40, justifyContent: "center", width: "100%" }}
            >
              <View
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  right: 0,
                  height: 2,
                  backgroundColor: colors.accent,
                }}
              />

              <View
                style={{
                  alignSelf: "center",
                  backgroundColor: colors.background,
                  paddingHorizontal: 10,
                }}
              >
                <ThemeText>OR USING WITH</ThemeText>
              </View>
            </View>
            <Input
              placeholder="Phone, Email or Username"
              value={email}
              setValue={setEmail}
            />
            <Button onPress={nextStep}>
              <ThemeText>Next</ThemeText>
            </Button>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ThemeSafeView>
  );
};

export default Registration;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 20,
  },
  oAuthView: {
    width: "100%",
    gap: 10,
  },
});
