import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';

const logo = require('./images/globe.gif');

export default function CountrySelect(){
    return(
        <SafeAreaView>
            <View>
                <Image source={logo}/>
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
}