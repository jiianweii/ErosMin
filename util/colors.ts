import { Colors as Colours } from "@/constants/theme";
import { useColorScheme } from "react-native";

export default function useColors() {
  const scheme = useColorScheme();
  const appColors = Colours[scheme ?? "light"];

  return appColors;
}
