import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// =================screens=========================
import StartPage from './views/startpage/StartPage';
import CountrySelect from './views/countryselect/CountrySelect'
import AverageEmiss from './views/average emission/AverageEmiss';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <AverageEmiss/>
        <Stack.Screen name="Home" component={StartPage} options={{headerShown: false, headerTintColor:'red'}}/>
        <Stack.Screen name="Countryselect" component={CountrySelect} options={{headerTintColor:'#8cc63e', title: '', headerStyle:{headerTransparent: true}}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

