import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';

const logo = require('./images/globe2.gif');

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
    //   width:100%,
      marginTop: 50,
      marginBottom:40,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: 'red'
    },
    logo:{
      width: 80,
      height: 80
    },
  });
  
  