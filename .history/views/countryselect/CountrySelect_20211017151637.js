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
            </View>

        </SafeAreaView>
    )
}