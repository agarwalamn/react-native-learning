import React, { useState } from 'react';
import { StyleSheet, Text, View,FlatList, TouchableOpacity} from 'react-native';



export default function App() {
  const [people, setPeople] = useState([
    { name: 'kira', id: '1' },
    { name: 'alkatraz', id: '2' },
    { name: 'snakeeyes', id: '3' },
    { name: 'kirito', id: '4' },
    { name: 'python', id: '5' },
    { name: 'price', id: '6' },
    { name: 'panda', id: '7' },
  ]);
const pressHandler=(id)=>{
  setPeople( (prevPeople)=> {
    return prevPeople.filter(person=>person.id != id)
  })
}

  return (
    <View style={styles.container}>
      <FlatList
      numColumns={2}
        keyExtractor={(item)=>item.id}
        data={people}
        renderItem={({item})=>(
          <TouchableOpacity onPress={()=>pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#000',
  },
  item:{
    marginTop:24,
    padding:30,
    backgroundColor:'white',
    fontSize:24,
    color:"#000",
    textAlign:'center',
    marginHorizontal:10,
    marginTop:10
  },

});
