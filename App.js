import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import Header from "./components/header";
import AffirmationItem from "./components/affirmationItem";
import AddAffirmation from "./components/addAffirmation";

export default function App() {
  const [affirmations, setAffirmations] = useState([
    { text: "I am strong", key: "1" },
    { text: "I am smart", key: "2" },
    { text: "I am kind", key: "3" },
    { text: "I am confident", key: "4" },
    { text: "I am motivated", key: "5" },
    { text: "I am capable of achieving my goals", key: "6" },
    { text: "I am grateful for all that I have", key: "7" },
    { text: "I am deserving of happiness and success", key: "8" },
    { text: "I am surrounded by love and positivity", key: "9" },
    { text: "I am always improving and growing", key: "10" }
  ]);

  const pressHandler = (key) => {
    setAffirmations((prevAffirmations)=> {
      return prevAffirmations.filter(affirmations => affirmations.key != key);
    })
  }

  const submitHandler = (text) => {

    if(text.length > 3) {
      setAffirmations((prevAffirmations)=> {
        return [
          {text: text,key: Math.random().toString()},
          ...prevAffirmations
        ];
      })
    } else {
      Alert.alert('Try again', 'Affirmation must be over 3 characters long', [
        {text: 'Ok', onPress: () => console.log('alert closed') }
      ]);
    }
    
  }

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddAffirmation submitHandler={submitHandler}/>
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
