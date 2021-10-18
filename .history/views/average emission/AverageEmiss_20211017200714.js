import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView, TouchableOpacity, TextInput,ScrollView } from 'react-native';

import logo from './images/globe.gif'
import natureIma from './images/naturebg2.jpg'

export default function AverageEmiss(){
    return(
      <SafeAreaView>
          <ImageBackground>
            <View>
                <Image source={}/>
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
          </ImageBackground>
          
      </SafeAreaView>  
    )
}