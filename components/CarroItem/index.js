import React, { Component } from 'react'
import { Text, View, ImageBackground } from 'react-native'
import BotaoEstilizado from '../BotaoEstilizado'
import styles from './styles'

const CarroItem = (props) => {

  const {nome, subtitulo, subtituloCTA, imagem} = props;

  return (
    <View style={styles.carroContainer}>
      <ImageBackground
        source={imagem}
        style={styles.imagem}
      />
      <View style={styles.titulos}>
        <Text style={styles.titulo}>{nome}</Text>
        <Text style={styles.subtitulo}>
          {subtitulo}
          <Text style={styles.subtituloCTA}>{subtituloCTA}</Text>
        </Text>
      </View>
      <View style={styles.containerBotoes}>
        <BotaoEstilizado
          tipo="primario"
          conteudo={"Pedido Customizado"}
          onPress={() => console.log("Pedido Customizado")}
        />
        <BotaoEstilizado
          tipo="secundario"
          conteudo={"Inventário Existente"}
          onPress={() => console.log("Verificar Inventário Existente")}
        />
      </View>
    </View>
  )
}

export default CarroItem
