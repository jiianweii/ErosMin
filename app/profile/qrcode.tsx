import ThemeSafeView from "@/components/common/ThemeSafeView";
import ThemeText from "@/components/common/ThemeText";
import useColors from "@/util/colors";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import {
  Dimensions,
  Pressable,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

import qrCodeImage from "@/assets/images/qr-code.png";

const QrButton = ({
  onPress,
  style,
  children,
}: {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}) => {
  return (
    <TouchableOpacity style={[styles.qrButton, style]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

const Qrcode = () => {
  const colors = useColors();
  const { width } = Dimensions.get("window");
  return (
    <ThemeSafeView style={styles.view}>
      <Pressable style={styles.navigation} onPress={router.back}>
        <Entypo name="chevron-left" size={24} color={colors.text} />
        <ThemeText style={{ fontWeight: 600, fontSize: 18 }}>Profile</ThemeText>
      </Pressable>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Image
          source={qrCodeImage}
          style={{ height: width - 40, width: width - 40 }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
            marginTop: 10,
          }}
        >
          <View style={{ alignItems: "center", gap: 5 }}>
            <QrButton
              onPress={() => {}}
              style={{ backgroundColor: colors.settingButton }}
            >
              <AntDesign name="camera" size={20} color={colors.text} />
            </QrButton>
            <ThemeText style={{ fontWeight: 500 }}>Scan</ThemeText>
          </View>
          <View style={{ alignItems: "center", gap: 5 }}>
            <QrButton
              onPress={() => {}}
              style={{ backgroundColor: colors.settingButton }}
            >
              <Feather name="copy" size={20} color={colors.text} />
            </QrButton>
            <ThemeText style={{ fontWeight: 500 }}>Copy URL</ThemeText>
          </View>
          <View style={{ alignItems: "center", gap: 5 }}>
            <QrButton
              onPress={() => {}}
              style={{ backgroundColor: colors.settingButton }}
            >
              <Entypo name="share-alternative" size={20} color={colors.text} />
            </QrButton>
            <ThemeText style={{ fontWeight: 500 }}>Share</ThemeText>
          </View>
        </View>
      </View>
    </ThemeSafeView>
  );
};

export default Qrcode;

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  navigation: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    gap: 10,

    flexDirection: "row",
  },
  qrButton: {
    padding: 20,
    borderRadius: 50,
  },
});
