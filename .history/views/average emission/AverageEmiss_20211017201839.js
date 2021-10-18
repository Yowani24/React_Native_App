import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView, TouchableOpacity, TextInput,ScrollView } from 'react-native';

import logo from './images/globe.gif'
import natureIma from './images/naturebg2.jpg'

export default function AverageEmiss(){
    return(
      <SafeAreaView>
          <ImageBackground source={natureIma}>

          </ImageBackground>
          
      </SafeAreaView>  
    )
}