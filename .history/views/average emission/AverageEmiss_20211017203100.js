import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView, TouchableOpacity, TextInput,ScrollView } from 'react-native';

import logo from './images/globe.gif'
import natureIma from './images/naturebg2.jpg'

export default function AverageEmiss(){
    return(
      <SafeAreaView style={styles.container}>
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
          
      </SafeAreaView>  
    )
};

const styles = StyleSheet.create({
    container:{
        justifyContent:'center'
        paddingHorizontal:20,
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
})