import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView, TouchableOpacity } from 'react-native';
const bg = require('./images/naturebg2.jpg');
const globeima = require('./images/globe.gif');

export default function AverageEmission({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={bg} style={styles.wrapper}>
        <Text>AQUI VAMOS NÓS</Text>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // marginHorizontal: 16,
    
  },
  wrapper:{
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft:20,
    paddingRight:20
    
  },
  logo_box:{
    width:80,
    height:80,
    marginTop: 50,
    marginBottom:40
  },
  logo:{
    width: '100%',
    height: '100%'
  },
});


