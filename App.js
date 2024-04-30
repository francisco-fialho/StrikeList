import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import TaskList from './components/TaskList';
import NewReminder from './components/NewReminder';

export default function App() {
  return (
    <View style={styles.container}>
      <TaskList/>
      <NewReminder/>
      <StatusBar style="auto"  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
