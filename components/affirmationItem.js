import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AffirmationItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 16,
    marginTop: 16,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: "#DBDBE6",
  },
  itemText: {
    textAlign: "center",
    fontSize: 17,
    color: "black",
  },
});
