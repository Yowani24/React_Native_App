import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Image } from 'react-native';
const bg = require('./assets/nature.jpg');
const globeima = require('./assets/globe.gif');

export default function App() {
  return (
    <ImageBackground source={bg} style={styles.container}>
      <View style={styles.logo_box}>
        <Image style={styles.logo} source={globeima}/>
      </View>
      <Text style={styles.text}>Contribua para o meio ambiente agora</Text>
      <View style={styles.texts_box}>
        <Text style={styles.text2}>Calcule e compense sua pegada de carbono.</Text>
        <Text style={styles.text3}>Tome medidas climáticas imediats.</Text>
      </View>
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
    paddingLeft:20,
    paddingRight:20
  },
  logo_box:{
    width:50,
    height:50,
    marginTop: 50,
    marginBottom:40
  },
  logo:{
    width: '100%',
    height: '100%'
  },
  text:{
    color:'white',
    fontSize: 33,
    fontWeight: 'bold'
  },
  texts_box:{
    backgroundColor: 'red'
  },
  text2:{
    color:'white',
    fontSize: 16,
    marginTop: 10
  },
  text3:{
    color:'white',
    fontSize: 16,
    marginTop: 10
  },
});
