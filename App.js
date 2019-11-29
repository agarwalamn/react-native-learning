import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('kira');
  const [age , setAge] = useState(40)
  return (
    <View style={styles.container}>
      <Text style={styles.wText}>Enter name:</Text>
      <TextInput 
      style={styles.input}
      placeholder="eg. John Snow" 
      onChangeText={(val) => setName(val)}/>

      <Text style={styles.wText}>Enter Age:</Text>
      <TextInput 
      keyboardType="numeric"
      style={styles.input}
      placeholder="eg. 38" 
      onChangeText={(val) => setAge(val)}/>
      <Text style={styles.wText}>name: {name} , age: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:"#eee",
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wText:{
    color:"white",
    fontSize:30
  },
  buttonContainer:{
    marginTop:20
  },
  input:{
    borderWidth:1,
    borderColor:'#777',
    padding:8,
    margin:10,
    width:200,
    color:'white'
  }
});
