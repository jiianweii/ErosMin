import { Colors as Colours } from "@/constants/theme";
import { useColorScheme } from "react-native";

export default function Colors() {
  const scheme = useColorScheme();
  const appColors = Colours[scheme ?? "light"];

  return appColors;
}
