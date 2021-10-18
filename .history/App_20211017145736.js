import React from 'react';
import StartPage from './views/StartPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={StartPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

