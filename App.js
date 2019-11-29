import React, { useState } from 'react';
import { StyleSheet, Text, View,ScrollView} from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'shaun', id: '1' },
    { name: 'yoshi', id: '2' },
    { name: 'mario', id: '3' },
    { name: 'luigi', id: '4' },
    { name: 'peach', id: '5' },
    { name: 'toad', id: '6' },
    { name: 'bowser', id: '7' },
  ]);

  return (
    
      <ScrollView>
        <View style={styles.container}>
        {people.map((users)=>{
          return(
            <View key={users.id}>
              <Text style={styles.item}>{users.name}</Text>
            </View>
          )})}
        </View>
      </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  item:{
    marginTop:24,
    padding:30,
    backgroundColor:'teal',
    fontSize:24
  }
});
