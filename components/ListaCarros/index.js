import React from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'
import styles from './styles'
import carros from '../../assets/cars'
import CarroItem from '../CarroItem'

export default function ListaCarros(props) {
    return (
        <View style={styles.container}>
            <FlatList
                data={carros}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => <CarroItem carro={item}/>}
                keyExtractor={(item,index) => item.nome}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height+30}
            />
        </View>
    )
}
