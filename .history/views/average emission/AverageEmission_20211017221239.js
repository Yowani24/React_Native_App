import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView, TouchableOpacity } from 'react-native';
const bgIma = require('./images/naturebg.jpg');
const logo = require('./images/globe2.gif')

export default function AverageEmission({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={bgIma} style={styles.wrapper}>
            <View>
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
    height: 80,
  marginTop: 30,
  marginBottom:10,
  alignItems:'center',
},
logo:{
  width: 60,
  height: 60
},

average_box:{

},
average_text1:{
    fontSize:35,
    textAlign:'center',
    fontWeight:'bold',
},
average_text2:{
    textAlign:'center',
    marginTop: 10
},
average_info_tex:{
    textAlign:'center',
    marginVertical:50,
},

average_percent_box:{
    borderColor:'#000000',
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
},
average_advise_text:{
    marginVertical: 20
},
});


