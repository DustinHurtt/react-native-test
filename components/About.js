import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';

export default function About(props) {

  const [text, setOnChangeText] = React.useState("Useless Text");
  const [number, setChangeNumber] = React.useState(null);

  return (

    <SafeAreaView>
    <Text>This is the about page.</Text>
      <TextInput
        style={styles.input}
        onChangeText={setOnChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={setChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
            <Button title ="HOME" onPress={()=>props.navigation.navigate("Home")}/>
    </SafeAreaView>

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