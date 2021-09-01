import { StyleSheet, Dimensions } from "react-native"
const styles = StyleSheet.create({
    carroContainer:{
        width: '100%',
        height: Dimensions.get('window').height+30,
      },
      titulos:{
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
      },
      titulo:{
        fontSize: 40,
        fontWeight: "500",
      },
      subtitulo:{
        fontSize: 16,
        color: '#5c5e62'
      },
      subtituloCTA:{
        textDecorationLine: 'underline'
      },
      imagem:{
        width: '100%',
        height: Dimensions.get('window').height+30,
        resizeMode: 'cover',
        position: 'absolute'
      },
      containerBotoes:{
        position: 'absolute',
        bottom: 50,
        width: '100%',
      }
})

export default styles;
