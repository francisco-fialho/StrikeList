import {
  SafeAreaView,
  StyleSheet,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";
import ToDoList from "../components/ToDoList";
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default ListView = () => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      flex: 1,
      backgroundColor: "white",
      flexDirection: "column",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      padding: 10,
    },
    addSectionButton: {
      backgroundColor: "#EDEDED",
      borderRadius: 10,
      padding: 5,
    },
    addSectionButtonView: {
      alignContent: "flex-start",
      marginTop: 25,
    },
    titleView: {
      backgroundColor: "pink",
      flexGrow: 1,
      flexDirection: "column",
      padding: 2,
    },
  });

  const [lists, setLists] = useState([{ id: 1, title: "Title1" },{ id: 2, title: "Title2" }]);

  const onCreateNewSection = ()=>{
    setLists([...lists, {id: lists.length+1, title: 'Title' + (lists.length + 1)}])
  }

  const renderList = () => {
    return lists.map((elem) => {
      return (
        <View style={{ width: Dimensions.get('screen').width}} key={elem.id}>
          <View style={{ flexDirection: "row"}}>
            <View style={styles.titleView}>
              <Text style={{ fontSize: 30 }}>{elem.title}</Text>
            </View>
            <View style={styles.submitButtonView}>
              <Pressable
                style={styles.addSectionButton}
                onPress={() => onCreateNewSection()}
              >
                <AntDesign name="plus" size={30} color="black" />
              </Pressable>
            </View>
          </View>
          <View style={{ flexDirection: "column", flex: 1 }}>
            <ToDoList />
            <StatusBar style="auto" />
          </View>
        </View>
      );
    });
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
          <ScrollView
            horizontal
            contentContainerStyle={{ flexGrow: 1, flexDirection: "row"}}
          >
            {renderList()}
          </ScrollView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
