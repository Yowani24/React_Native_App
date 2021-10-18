import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
const bg = require('../assets/nature.jpg');
const globeima = require('../assets/globe.gif');

export default function StartPage() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={bg} style={styles.wrapper}>
        <View style={styles.logo_box}>
          <Image style={styles.logo} source={globeima}/>
        </View>
        <Text style={styles.text}>Contribua para o {"\n"} meio ambiente agora</Text>
        <Words style={styles.texts_box}>
          <Text style={styles.text2}>Calcule e compense sua pegada de carbono.</Text>
          <Text style={styles.text3}>Tome medidas climáticas imediats.</Text>
        </Words>
        <View style={styles.continuar_btn_box}>
          <TouchableOpacity style={styles.continuar_touch_box}>
            <Text style={styles.continuar_btn}>Continuar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.pular_btn_box}>
          <Text style={styles.pular_btn_text}>Pular etapa e efetuar login</Text>
        </TouchableOpacity>
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
    marginTop: 240
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
    marginTop:10
  },
  pular_btn_text:{
    color:'#FFFFFF',
    textAlign:'center'
  }
});

const Words = styled.View`
  text2:{
    color:'red'
  }
`

