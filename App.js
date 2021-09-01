import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import ListaCarros from './components/ListaCarros';
import Header from './components/Header';
export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <ListaCarros/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});
