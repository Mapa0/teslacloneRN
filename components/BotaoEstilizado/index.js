import React, { Component } from 'react'
import { Text, View, Pressable } from 'react-native'
import styles from './styles'

const BotaoEstilizado = (props) => {

    const {tipo, conteudo, onPress} = props;
    const corFundo = tipo === 'primario' ? 'black' : 'white';
    const corTexto = tipo === 'primario' ? 'white' : 'black';

    return(
        <View style={styles.container}>
            <Pressable
                style={[styles.botao, {backgroundColor: corFundo}]}
                onPress={onPress}>
                <Text style={[styles.texto, {color: corTexto}]}>{conteudo}</Text>
            </Pressable>
        </View>
    )
}

export default BotaoEstilizado
