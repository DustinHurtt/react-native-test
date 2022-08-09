import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

export default function Home(props) {

  const [text, setOnChangeText] = React.useState("Useless Text");
  const [number, setChangeNumber] = React.useState(null);

  return (

    <SafeAreaView>
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
      <Button title ="ABOUT" onPress={()=>props.navigation.navigate("About")}/>
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