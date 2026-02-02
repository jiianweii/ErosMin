import { useNavbarContext } from "@/providers/NavbarProvider";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const NavBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const { colors } = useTheme();
  const { isNavbarShown, setIsNavbarShown } = useNavbarContext();

  if (!isNavbarShown) return null;

  return (
    <View style={styles.view}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          route.name == "minute"
            ? setIsNavbarShown(false)
            : setIsNavbarShown(true);

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const icon =
          typeof options.tabBarIcon === "function"
            ? options.tabBarIcon({
                focused: isFocused,
                color: isFocused ? colors.primary : colors.text,
                size: 28,
              })
            : null;

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            onLongPress={onLongPress}
            accessibilityState={isFocused ? { selected: true } : {}}
            style={styles.pressable}
          >
            {icon}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    position: "absolute",
    flexDirection: "row",
    bottom: 60,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: 5,
    paddingVertical: 7,
    gap: 1,
  },
  pressable: {
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
});

export default NavBar;
