import {
  SafeAreaView,
  StyleSheet,
  Platform,
  Pressable,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import NewToDo from "../components/NewToDo";
import ListView from "./ListView";

export default ScrollableListView = () => {

  const [lists, setLists] = useState([
    {id: 1,  title: "Work", data: ["Devin", "Dan", "Dominic"] },
    {id: 2, title: "Personal", data: ["Devin", "Dan", "Dominic"] },
  ]);


  const onCreateNewSection = () => {
    setLists([
      ...lists,
      { id: lists.length + 1, title: "Title" + (lists.length + 1) },
    ]);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      flexDirection: "column",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      padding: 10,
    },
  });

  const renderList = ({ item }) => {
    return (
      <ListView item={item} />
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.select({
        ios: () => 0,
        android: () => -200,
      })()}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <FlatList
            horizontal
            data={lists}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
            renderItem={renderList}
            keyExtractor={(item) => item.id}
            snapToAlignment={"start"}
            decelerationRate={0}
            pagingEnabled
            
          />
        </TouchableWithoutFeedback>
        <NewToDo />
        <StatusBar style="auto" />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
