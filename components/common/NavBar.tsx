import { useNavbarContext } from "@/providers/NavbarProvider";
import Colors from "@/util/colors";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const NavBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const colors = Colors();
  const { isNavbarShown, setIsNavbarShown } = useNavbarContext();

  if (!isNavbarShown) return null;

  return (
    <View style={[styles.view, { backgroundColor: colors.navbar }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (route.name !== "minute") setIsNavbarShown(true);

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
