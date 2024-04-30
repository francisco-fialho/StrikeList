import React, { useState } from "react";
import Animated, {
  ZoomIn,
  ZoomOut,
} from "react-native-reanimated";
import { TextInput, StyleSheet, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default NewToDo = (props) => {
  const [text, setText] = useState("");
  const style = StyleSheet.create({
    input: {
      height: 50,
      backgroundColor: "#EDEDED",
      borderRadius: 10,
      marginHorizontal: 5,
      padding: 15,
      color: "black",
    },
    button: {
      borderRadius: 50,
      height: 30,
      backgroundColor: "black",
      paddingLeft: 3,
      paddingTop: 3,
      width: 30,
    },
    buttonView: {
      marginTop: -40,
      marginLeft: "auto",
      marginRight: 15,
    },
  });

  onCreateNewTodo = () =>{
    props.onCreateNewTodo(text);
    setText("");
  }


  return (
    <View>
      <View>
        <TextInput
          style={style.input}
          onChangeText={setText}
          value={text}
          placeholder="Type a new reminder..."
          placeholderTextColor="#939292"
        />
      </View>
      {text ? (
        <Animated.View
          style={style.buttonView}
          entering={ZoomIn.springify(200)}
          exiting={ZoomOut.springify(200)}
          
        >
          <Pressable
            style={style.button}
            onPress={()=>onCreateNewTodo()}
          >
            <AntDesign name="arrowright" size={24} color="#EDEDED" />
          </Pressable>
        </Animated.View>
      ) : null}
    </View>
  );
};
