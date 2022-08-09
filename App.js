import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';

import Home from './components/Home';
import About from './components/About';

export default function App() {

  const [text, setOnChangeText] = React.useState("Useless Text");
  const [number, setChangeNumber] = React.useState(null);

  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>

    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
