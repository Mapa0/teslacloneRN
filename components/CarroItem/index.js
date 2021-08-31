import React, { Component } from 'react'
import { Text, View, ImageBackground } from 'react-native'
import styles from './styles'

const CarroItem = (props) => {
    return(
        <View style={styles.carroContainer}>
        <ImageBackground 
          source={require('../../assets/images/ModelX.jpeg')}
          style={styles.imagem}
        />
        <View style={styles.titulos}>
          <Text style={styles.titulo}>Modelo S</Text>
          <Text style={styles.subtitulo}>À partir de R$ 355.999,99</Text>
        </View>      
      </View>
    )
}

export default CarroItem
