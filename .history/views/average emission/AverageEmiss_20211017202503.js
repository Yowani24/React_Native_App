import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView, TouchableOpacity, TextInput,ScrollView } from 'react-native';

import logo from './images/globe.gif'
import natureIma from './images/naturebg2.jpg'

export default function AverageEmiss(){
    return(
      <SafeAreaView>
          <ImageBackground source={natureIma} style={styles.wrapper}>
          
          </ImageBackground>
          
      </SafeAreaView>  
    )
};

const styles = StyleSheet.create({

})