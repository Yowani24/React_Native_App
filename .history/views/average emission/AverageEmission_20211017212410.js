import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView, TouchableOpacity } from 'react-native';
const bg = require('./images/naturebg2.jpg');
const globeima = require('./images/globe.gif');

export default function AverageEmission({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={bg} style={styles.wrapper}>
        
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
  text:{
    color:'white',
    fontSize: 28,
    fontWeight: 'bold'
  },
  texts_box:{
  },
  text2:{
    color:'white',
    fontSize: 15,
    marginTop: 20
  },
  text3:{
    color:'white',
    fontSize: 15,
    marginTop: 10
  },
  
  continuar_btn_box:{
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
    marginTop: 250
  },
  continuar_touch_box:{
    width:160,
    backgroundColor:'#8cc63e',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems:'center',
  },
  continuar_btn:{
    color:'#FFFFFF',
    padding: 15,
    fontSize: 18,
  },
  pular_btn_box:{
    marginTop:15
  },
  pular_btn_text:{
    color:'#FFFFFF',
    textAlign:'center'
  }
});


