import React, { useState } from "react";
import { View, SectionList, Text, StyleSheet, FlatList } from "react-native";
import NewToDo from "./NewToDo";

export default ToDoList = ({list}) => {
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
    },
    sectionHeader: {
      fontSize: 14,
      fontWeight: "bold",
      backgroundColor: "rgba(247,247,247,1.0)",
    },
    item: {
      fontSize: 18,
      height: 44,
      padding: 10,
      marginVertical: 5,
    },
    list: {
      flex: 15,
      marginBottom: 20,
    },
    input: {
      flex: 1,
      marginBottom: 30,
    },
  });

  onCreateNewTodo = (newToDo) => {
    setSections([
      ...sections,
      {
        title: "newTodo",
        data: [newToDo],
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={list}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item) => `basicListEntry-${item}`}
        />
      </View>
      <View style={styles.input}>
        {
          //<NewToDo onCreateNewTodo={onCreateNewTodo} />
        }
      </View>
    </View>
  );
};
