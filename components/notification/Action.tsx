import Colors from "@/util/colors";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export type ActionProps = {
  id: number;
  type: "like" | "comment" | "offer" | "game";
  action: string;
};

const ACTION_TYPES = {
  like: <FontAwesome name="heart-o" size={24} color="#fa3737" />,
  comment: <FontAwesome name="comment-o" size={24} color="#0059ff" />,
  game: <Ionicons name="game-controller-outline" size={24} color="#3ae610" />,
  offer: <MaterialIcons name="discount" size={24} color="#e7b019" />,
};

const Action = ({ type, action }: ActionProps) => {
  const colors = Colors();
  return (
    <View style={styles.view}>
      {ACTION_TYPES[type]}
      <View style={styles.actionContent}>
        <Text style={{ color: colors.text }}>{action}</Text>
        <Text style={{ color: colors.text + "50", fontSize: 12 }}>
          X minutes ago
        </Text>
      </View>
    </View>
  );
};

export default Action;

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  actionContent: {
    gap: 5,
  },
});
