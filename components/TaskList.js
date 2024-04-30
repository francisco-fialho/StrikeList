import React, { useState } from "react";
import { View, SectionList, Text, StyleSheet } from "react-native";
import NewToDo from './NewToDo';

export default TaskList = () => {
  const [sections, setSections] = useState([
    { title: "Work", data: ["Devin", "Dan", "Dominic"] },
    { title: "Personal", data: ["Devin", "Dan", "Dominic"] },
    { title: "Hobbies", data: ["Devin", "Dan", "Dominic"] },
  ]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    sectionHeader: {
      fontSize: 14,
      fontWeight: "bold",
      backgroundColor: "rgba(247,247,247,1.0)",
    },
    item: {
      fontSize: 18,
      height: 44,
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
    <View>
      <Text>Scroll me plz</Text>
      <SectionList
        sections={sections}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item) => `basicListEntry-${item}`}
      />
      <NewToDo onCreateNewTodo={onCreateNewTodo} />
    </View>
  );
};
