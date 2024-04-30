import React, { useState } from "react";
import { TextInput, StyleSheet, Button, View } from "react-native";

export default NewReminder = () => {
  const [text, changeText] = useState("");
  const style = StyleSheet.create({
    input: {
      height: 50,
      backgroundColor: "#EDEDED",
      borderRadius: 10,
      marginHorizontal: 5,
      padding: 15,
      color: 'black',
    },
  });

  return (
    <View>
    <TextInput
      style={style.input}
      onChangeText={changeText}
      value={text}
      placeholder="Type a new reminder..."
      placeholderTextColor="#939292"
    />
    <Button />
    </View>
  );
};
