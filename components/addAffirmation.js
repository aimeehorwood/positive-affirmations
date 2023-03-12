import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Button } from "react-native-elements";

export default function AddAffirmation({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (value) => {
    setText(value);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new affirmation.."
        onChangeText={changeHandler}
        value={text}
      />
      <Button
        title="add affirmation"
        onPress={() => submitHandler(text)}
        buttonStyle={{ backgroundColor: "#76AFBC"}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#adbabd",
  },
});
