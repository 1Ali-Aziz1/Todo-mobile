import { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { Text, View } from '../../components/Themed'; 

export default function TabOneScreen() {

  //Below todo means the text
  const [todo, setTodo] = useState("")
  //this state contains all the todoos
  const [todoData, setTodoData] = useState([{id: 1, title: "Whow"}, {id: 2, title: "nanan"}])

  function ShowAddtext() {
    return(
      <View>
        <TextInput style={styles.input} placeholder="Type what todo..." value={todo} onChangeText={setTodo} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ShowAddtext/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    width: "75%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
