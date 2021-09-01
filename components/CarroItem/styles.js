import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    carroContainer:{
        width: '100%',
        height: '100%',
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
        height: '100%',
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
