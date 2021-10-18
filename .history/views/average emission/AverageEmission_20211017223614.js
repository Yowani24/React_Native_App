import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image, SafeAreaView, TouchableOpacity } from 'react-native';
const bgIma = require('./images/nature.jpg');
const logo = require('./images/globe2.gif')

export default function AverageEmission({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={bgIma} style={styles.wrapper}>
            <ScrollView style={styles.overlay}>
                <View style={styles.logo_box}>
                    <Image style={styles.logo} source={logo}/>
                </View>

                <View style={styles.average_box}>
                    <Text style={styles.average_text1}>2,80</Text>
                    <Text style={styles.average_text2}>Toneladas de C02</Text>
                </View>

                <View style={styles.average_info_box}>
                    <Text style={styles.average_info_tex}>O valor acima representa a média de emissões de carbono por pessoa no Brasil. Agora vamos fazer uma estimativa das suas emissões de carbono!</Text>
                </View>

                <View style={styles.average_percent_box}>
                    <Text style={styles.average_percent_text}>%</Text>
                </View>

                <Text style={styles.average_advise_text}>Utilize a média brasileira como referência e responda as próximas perguntas para calcular suas emissões.</Text>

                <TouchableOpacity style={styles.btn_box}>
                    <Text style={styles.btn_text}>COMEÇAR</Text>
                </TouchableOpacity>
          </ScrollView>
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
       
  },
  logo_box:{
    height: 80,
  marginTop: 30,
  marginBottom:10,
  alignItems:'center',
},
logo:{
  width: 60,
  height: 60
},
overlay: {
    flex:1,
    backgroundColor:'rgba(0,0,255,.2)',
    paddingLeft:20,
    paddingRight:20, 
},

average_box:{
    marginTop:30,
},
average_text1:{
    fontSize:35,
    textAlign:'center',
    fontWeight:'bold',
    color: '#FFFFFF'
},
average_text2:{
    textAlign:'center',
    marginTop: 10,
    color: '#FFFFFF'
},
average_info_tex:{
    textAlign:'center',
    marginVertical:50,
    color: '#FFFFFF'
},

average_percent_box:{
    borderColor:'#FFFFFF',
    borderWidth: 1,
    borderRadius:100,
    width: 50,
    height:50,
    justifyContent:'center',
    alignItems: 'center',
    alignSelf:'center',
},
average_percent_text:{
    fontSize: 20,
    color: '#FFFFFF'
},
average_advise_text:{
    marginVertical: 30,
    textAlign:'center',
    color: '#FFFFFF'
},

btn_box:{
    backgroundColor:'#8cc63e',
    width:120,
    borderRadius:100,
    alignSelf:'center',
    marginTop:200
},
btn_text:{
    textAlign:'center',
    color:'#FFFFFF',
    fontWeight:'bold',
    padding:16
},
});


