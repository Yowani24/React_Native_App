import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
const bg = require('./assets/nature.jpg')

export default function App() {
  return (
    <ImageBackground source={bg} style={styles.container}>
      <Text style={styles.text}>Contribua para o meio ambiente agora</Text>
      <Text>Calcule e compense sua pegada de carbono.</Text>
      <Text>Tome medidas climáticas imediats.</Text>
      <View>
        <TextInput style={styles.input} type="text" placeholder="Write something here..."/>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text:{
    color:'white',
    fontSize: 30
  },
  
});
