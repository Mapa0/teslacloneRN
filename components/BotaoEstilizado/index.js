import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './style'

const BotaoEstilizado = (props) => {
    return(
        <View style={styles.carroContainer}>
        <View style={styles.titulos}>
          <Text style={styles.titulo}>Modelo S</Text>
          <Text style={styles.subtitulo}>À partir de R$ 355.999,99</Text>
        </View>      
      </View>
    )
}

export default BotaoEstilizado
