import { useWindowDimensions } from "react-native";
import { Pressable, Text, View, Modal } from "react-native";
import { useState } from "react";
import EmojiPicker from "react-native-emoji-picker-staltz";
import ToDoList from "../components/ToDoList";
import { AntDesign } from "@expo/vector-icons";

export default ListView = ({ item }) => {
  const { width } = useWindowDimensions();
  const [emoji, setEmoji] = useState("📝");
  const [openModal, setOpenModal] = useState(false);

  const styles = {
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
    title: {
      textAlign: "center",
      fontSize: 30,
    },
    emoji: {
      fontSize: 50,
      textAlign: "center",
    },
    chooseEmoji: {
      backgroundColor: "lightgrey",
      borderRadius: 50,
      width: 100,
      height: 100,
      justifyContent: "center",
      alignSelf: "center",
    },
  };

  const selectEmoji = (emoji) => {
    setEmoji(emoji);
    setOpenModal(false);
  };

  return (
    <View key={item.id} style={{ width }}>
      <Pressable
        onPress={() => setOpenModal(!openModal)}
        style={styles.chooseEmoji}
      >
        <Text style={styles.emoji}>{emoji}</Text>
        <Modal visible={openModal} transparent={true} animationType="fade">
          <EmojiPicker
            onEmojiSelected={selectEmoji}
            rows={5}
            onPressOutside={() => setOpenModal(false)}
            emojiSize={35}
            hideClearButton
            modalStyle={{
              flexGrow: 1,
              justifyContent: "flex-end",
              marginBottom: 15,
            }}
            containerStyle={{ horizontal: false }}
          />
        </Modal>
      </Pressable>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.titleView}>
          <Text style={styles.title}>{item.title}</Text>
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
        <ToDoList list={item.data} />
      </View>
    </View>
  );
};
