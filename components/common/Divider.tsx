import Colors from "@/util/colors";
import { View } from "react-native";

type DividerProps = {
  color?: string;
  thickness?: number;
  marginVertical?: number;
};

const Divider = ({
  color,
  thickness = 1,
  marginVertical = 12,
}: DividerProps) => {
  const colors = Colors();

  const bgColor = color || colors.text + "15";

  return (
    <View
      style={{
        height: thickness,
        backgroundColor: bgColor,
        width: "100%",
        marginVertical,
      }}
    />
  );
};

export default Divider;
