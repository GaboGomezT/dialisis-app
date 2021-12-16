import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SumarioScreen from './screens/SumarioScreen';
import FaqsScreen from './screens/FaqsScreen';
import DialisisScreen from './screens/DialisisScreen';
import EmergenciaScreen from './screens/EmergenciaScreen';
import CalendarioScreen from './screens/CalendarioScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sumario" component={SumarioScreen} />
        <Stack.Screen name="FAQs" component={FaqsScreen} />
        <Stack.Screen name="Dialisis" component={DialisisScreen} />
        <Stack.Screen name="Emergencia" component={EmergenciaScreen} />
        <Stack.Screen name="Calendario" component={CalendarioScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


