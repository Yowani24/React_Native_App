import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';

const logo = require('./images/globe2.gif');

export default function CountrySelect(){
    return(
        <SafeAreaView>
            <View style={styles.wrapper}>
                <View style={styles.logo_box}>
                    <Image style={styles.logo} source={logo}/>
                </View>
                <View style={styles.top_text_box}>
                    <Text style={styles.top_text1}>Para começar</Text>
                    <Text style={styles.top_text2}>Confirmar país de residência</Text>
                </View>

                <View style={styles.input_box}>
                    <TextInput style={styles.input} type="text" placeholder="select a country"/>

                    <Text style={styles.input_info}>Essa informação será utilizada para determinar os valores corretos e calcular suas emissões de carbono adequadamente</Text>
                </View>

                <View>
                    <Text></Text>
                    <Text>A pegada de carbono anual de uma pessoa é de aproximadamente 6.4 toneladas de CO2 em média</Text>
                </View>

                <TouchableOpacity>
                    <Text>CONFIRMAR</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    wrapper:{
      paddingHorizontal:20,
      
    },
    logo_box:{
        height: 80,
      marginTop: 30,
      marginBottom:40,
      alignItems:'center',
    },
    logo:{
      width: 80,
      height: 80
    },

    top_text1:{
        textAlign:'center',
        fontSize: 28,
        fontWeight: 'bold'
    },
    top_text2:{
        textAlign:'center',
        marginTop:10,
        letterSpacing: 0.3
    },

    input:{
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 100,
        padding: 5
    }
  });
  
  