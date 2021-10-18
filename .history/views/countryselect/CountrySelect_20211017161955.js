import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView, TouchableOpacity, TextInput,ScrollView } from 'react-native';

const logo = require('./images/globe2.gif');

export default function CountrySelect(){
    return(
        <SafeAreaView>
            <ScrollView>
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

                    <View style={styles.alert_text_box}>
                        <Text></Text>
                        <Text style={styles.alert_text}>A pegada de carbono anual de uma pessoa é de aproximadamente 6.4 toneladas de CO2 em média</Text>
                    </View>

                    <TouchableOpacity style={styles.confirm_btn}>
                        <Text style={styles.confirm_btn_text}>CONFIRMAR</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            

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
      marginBottom:10,
      alignItems:'center',
    },
    logo:{
      width: 60,
      height: 60
    },

    top_text1:{
        textAlign:'center',
        fontSize: 28,
        fontWeight: 'bold'
    },
    top_text2:{
        textAlign:'center',
        marginTop:10,
        letterSpacing: 0.3,
        color: 'gray'
    },
    
    input_box:{
        width:'90%',
        alignSelf: 'center',
        // marginVertical: 32
    },
    input:{
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 100,
        padding: 10,
        marginVertical: 30
    },
    input_info:{
        color:'gray',
        textAlign:'center',
        fontSize: 13.5,
        lineHeight:18.5
    },

    alert_text_box:{
        backgroundColor:'#dfdfdf',
        marginTop: 200
    },
    alert_text:{
        color:'gray',
        fontSize: 13,
        paddingHorizontal: 24,
        paddingVertical:10,
        marginTop:-20
    },

    confirm_btn:{
        backgroundColor:'#8cc63e',
        borderRadius: 100,
        marginVertical: 40
    },
    confirm_btn_text:{
        textAlign:'center',
        padding: 18,
        fontSize: 16,
        color:'white',
        fontWeight:'bold'
    }
  });
  
  