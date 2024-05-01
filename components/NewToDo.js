import React, { useState } from "react";
import Animated, { ZoomIn, ZoomOut } from "react-native-reanimated";
import { TextInput, StyleSheet, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default NewToDo = (props) => {
  const [text, setText] = useState("");
  const styles = StyleSheet.create({
    input: {
      height: 50,
      backgroundColor: "#EDEDED",
      borderRadius: 10,
      marginHorizontal: 5,
      padding: 15,
      color: "black",
    },
    inputView: {
      flex: 1,
    },
    submitButton: {
      borderRadius: 50,
      height: 30,
      backgroundColor: "black",
      paddingLeft: 3,
      paddingTop: 3,
      width: 30,
    },
    submitButtonView: {
      marginTop: -40,
      marginLeft: "auto",
      marginRight: 15,
    },
  });

  onCreateNewTodo = () => {
    props.onCreateNewTodo(text);
    setText("");
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          onSubmitEditing={() => onCreateNewTodo()}
          value={text}
          placeholder="Type a new reminder..."
          placeholderTextColor="#939292"
        />
        {text ? (
          <Animated.View
            style={styles.submitButtonView}
            entering={ZoomIn.springify(300)}
            exiting={ZoomOut.springify(300)}
          >
            <Pressable
              style={styles.submitButton}
              onPress={() => onCreateNewTodo()}
            >
              <AntDesign name="arrowright" size={24} color="#EDEDED" />
            </Pressable>
          </Animated.View>
        ) : null}
      </View>
    </View>
  );
};
