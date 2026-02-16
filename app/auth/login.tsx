import Input from "@/components/auth/Input";
import OAuth from "@/components/auth/login/OAuth";
import PasswordInput from "@/components/auth/PasswordInput";
import Button from "@/components/common/Button";
import ThemeSafeView from "@/components/common/ThemeSafeView";
import ThemeText from "@/components/common/ThemeText";
import useColors from "@/util/colors";
import { router } from "expo-router";
import React, { useState } from "react";
import { Keyboard, Pressable, StyleSheet, Text, View } from "react-native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const colors = useColors();
  return (
    <ThemeSafeView style={styles.view}>
      <Pressable
        onPress={Keyboard.dismiss}
        accessible={false}
        style={styles.pressView}
      >
        <ThemeText style={{ fontSize: 25, fontWeight: 600 }}>EROSMIN</ThemeText>
        <View style={styles.inputView}>
          <Input value={email} setValue={setEmail} placeholder="Email" />
          <PasswordInput
            value={password}
            setValue={setPassword}
            placeholder="Password"
          />
          <Button>
            <ThemeText>Sign In</ThemeText>
          </Button>
        </View>
        <View
          style={{ flexDirection: "column", gap: 15, alignItems: "center" }}
        >
          <ThemeText>Or continue with</ThemeText>
          <OAuth />
          <View style={{ flexDirection: "row", gap: 5 }}>
            <ThemeText>Dont have an account?</ThemeText>
            <Pressable onPress={() => router.push("/auth/register")}>
              <Text style={{ color: colors.primary }}> Sign up</Text>
            </Pressable>
          </View>
        </View>
      </Pressable>
    </ThemeSafeView>
  );
};

export default Login;

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  pressView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 40,
    paddingHorizontal: 20,
  },

  inputView: {
    gap: 15,
    width: "100%",
  },
});
