import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Image, SafeAreaView, TouchableHighlight } from 'react-native';
const bg = require('./assets/nature.jpg');
const globeima = require('./assets/globe.gif');

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={bg} style={styles.wrapper}>
        <View style={styles.logo_box}>
          <Image style={styles.logo} source={globeima}/>
        </View>
        <Text style={styles.text}>Contribua para o meio ambiente agora</Text>
        <View style={styles.texts_box}>
          <Text style={styles.text2}>Calcule e compense sua pegada de carbono.</Text>
          <Text style={styles.text3}>Tome medidas climáticas imediats.</Text>
        </View>
        <View style={styles.continuar_btn_box}>
          <TouchableHighlight style={styles.continuar_touch_box}>
            <Text style={styles.continuar_btn}>Continuar</Text>
          </TouchableHighlight>
        </View>
        <TouchableHighlight>
          <Text>Pular etapas</Text>
        </TouchableHighlight>
        <StatusBar style="auto" />
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
    fontSize: 33,
    fontWeight: 'bold'
  },
  texts_box:{
  },
  text2:{
    color:'white',
    fontSize: 16,
    marginTop: 20
  },
  text3:{
    color:'white',
    fontSize: 16,
    marginTop: 10
  },
  
  continuar_btn_box:{
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
    marginTop: 50
  },
  continuar_touch_box:{
    width:160,
    backgroundColor:'green',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems:'center',
  },
  continuar_btn:{
    color:'#FFFFFF',
    padding: 15,
    fontSize: 18,
  }
});
