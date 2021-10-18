import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
const bg = ''

export default function App() {
  return (
    <ImageBackground source={} style={styles.container}>
      <Text>Hollo from Yowani</Text>
      <View>
        <TextInput type="text" placeholder="Write something here..."/>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
