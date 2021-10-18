import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView, TouchableOpacity } from 'react-native';
const bgIma = require('./images/globe.gif');
const logo = require('./images/globe2.gif')

export default function AverageEmission({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={bgIma} style={styles.wrapper}>
            <View>
                <View style={styles.logo_box}>
                    <Image style={styles.logo} source={logo}/>
                </View>

                <View>
                    <Text>2,80</Text>
                    <Text>Toneladas de C02</Text>
                </View>

                <View>
                    <Text>O valor acima representa a média de emissões de carbono por pessoa no Brasil. Agora vamos fazer uma estimativa das suas emissões de carbono!</Text>
                </View>

                <View>
                    <Text>%</Text>
                </View>

                <Text>Utilize a média brasileira como referência e responda as próximas perguntas para calcular suas emissões.</Text>
          </View>
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


