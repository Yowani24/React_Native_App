import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
const bg = require('./assets/nature.jpg')

export default function App() {
  return (
    <ImageBackground source={bg} style={styles.container}>
      <Text style={styles.text}>Hollo from Yowani</Text>
      <View>
        <TextInput type="text" placeholder="Write something here..."/>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'blue' 
  },
  text:{
    color:'red',
    fontSize
  }
});
