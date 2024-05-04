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
  const [currentPage, setCurrentPage] = useState(0);

  const [lists, setLists] = useState([
    { id: 1, title: "Work", items: ["Devin", "Dan", "Dominic"] },
    { id: 2, title: "Personal", items: ["Devin", "Dan", "Dominic"] },
  ]);


  const onCreateNewTodo = (text) => {
    let newLists = lists;
    let updatedList = newLists.find((item) => item.id == currentPage);
    updatedList.items.push(text);
    setLists(newLists);
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
    return <ListView list={item} />;
  };

  const onChangePage = (changedPage) => {
    if (changedPage.length === 1) {
      setCurrentPage(changedPage[0].key);
    }
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
            onViewableItemsChanged={({ viewableItems }) =>
              onChangePage(viewableItems)
            }
            pagingEnabled
          />
        </TouchableWithoutFeedback>
        <NewToDo onCreateNewTodo={onCreateNewTodo} />
        <StatusBar style="auto" />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
