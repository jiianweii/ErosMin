import Button from "@/components/common/Button";
import ThemeSafeView from "@/components/common/ThemeSafeView";
import ThemeText from "@/components/common/ThemeText";
import useColors from "@/util/colors";
import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { FlatList, Keyboard, StyleSheet, TextInput, View } from "react-native";

type OTPType = {
  prevStep: () => void;
};

const OTP = ({ prevStep }: OTPType) => {
  const colors = useColors();
  const OTP_LENGTH = 6;
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const inputs = useRef<TextInput[]>([]);
  const [isOtpEntered, setIsOtpEntered] = useState(false);

  function handleOTP(value: string, index: number) {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index === 5) {
      Keyboard.dismiss();
      return;
    }

    if (value && index < OTP_LENGTH - 1) {
      inputs.current[index + 1].focus();
    } else if (!value && index > 0) {
      inputs.current[index - 1].focus();
    }
  }

  useEffect(() => {
    setIsOtpEntered(otp.every((digit) => digit !== ""));
  }, [otp]);

  return (
    <ThemeSafeView style={styles.view}>
      <Entypo
        name="chevron-left"
        size={24}
        color={colors.text}
        onPress={prevStep}
      />

      <View style={styles.otpView}>
        <ThemeText style={{ fontWeight: "600", fontSize: 20 }}>
          Enter your 6 digits OTP
        </ThemeText>
        <ThemeText style={{ textAlign: "center" }}>
          We have sent an OTP message to your registered email or phone number.
        </ThemeText>
      </View>
      <View style={{ height: 60, width: "100%" }}>
        <FlatList
          data={otp}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          scrollEnabled={false}
          contentContainerStyle={styles.otpContainer}
          renderItem={({ item, index }) => (
            <TextInput
              ref={(ref) => (inputs.current[index] = ref!)}
              value={otp[index]}
              onChangeText={(value) => handleOTP(value, index)}
              keyboardType="number-pad"
              maxLength={1}
              style={[styles.input, { color: colors.text }]}
            />
          )}
        />
      </View>

      {isOtpEntered && (
        <Button onPress={() => router.replace("/setup")}>
          <ThemeText>Next</ThemeText>
        </Button>
      )}
    </ThemeSafeView>
  );
};

export default OTP;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 20,
  },
  otpView: {
    alignItems: "center",
    gap: 10,
    paddingVertical: 20,
  },
  otpContainer: {
    justifyContent: "center",
    gap: 10,
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 18,
  },
});
