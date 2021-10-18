import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Input } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hollo from Yowani</Text>
      <View>
        <Input type="text" placeholder="Write something here..."/>
      </View>
      <StatusBar style="auto" />
    </View>
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
