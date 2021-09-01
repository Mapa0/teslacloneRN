import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarroItem from './components/CarroItem'

export default function App() {
  return (
    <View style={styles.container}>
      <CarroItem
        nome={"Modelo X"}
        subtitulo={"Peça agora para uma "}
        subtituloCTA={"Entrega Touchless"}
        imagem={require('./assets/images/ModelX.jpeg')} />
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
