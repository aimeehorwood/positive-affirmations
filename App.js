import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/header";
import AffirmationItem from "./components/affirmationItem";

export default function App() {
  const [affirmations, setAffirmations] = useState([
    { text: "I am strong", key: "1" },
    { text: "I am smart", key: "2" },
    { text: "I am kind", key: "3" },
  ]);

  const pressHandler = (key) => {
    setAffirmations((prevAffirmations)=> {
      return prevAffirmations.filter(affirmations => affirmations.key != key);
    })
  }

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        {/*/affirmform */}
        <View style={styles.list}>
          <FlatList
            data={affirmations}
            renderItem={({ item }) => (
              <AffirmationItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
