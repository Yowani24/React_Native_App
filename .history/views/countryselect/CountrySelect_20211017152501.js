import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';

const logo = require('./images/globe.gif');

export default function CountrySelect(){
    return(
        <SafeAreaView>
            <View style={styles.logo_box}>
                <Image style={styles.logo} source={logo}/>
            </View>
            <View>
                <Text>Para começar</Text>
                <Text>Confirmar país de residência</Text>
            </View>

            <View>
                <TextInput type="text" placeholder="select a country"/>

                <Text>Essa informação será utilizada para determinar os valores corretos e calcular suas emissões de carbono adequadamente</Text>
            </View>

            <View>
                <Text></Text>
                <Text>A pegada de carbono anual de uma pessoa é de aproximadamente 6.4 toneladas de CO2 em média</Text>
            </View>

            <TouchableOpacity>
                <Text>CONFIRMAR</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
};

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
      marginTop: 150
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
  
  