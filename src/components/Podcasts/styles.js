import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    conteinerPodcasts: {
        padding: 4,
        justifyContent: 'space-around'
    },

    conteinerImageDescrption: {
        flexDirection:'column',
        width: 170,
        justifyContent: 'space-evenly',
    },

    imagePodCasts: {
        width: 160,
        height: 160
    },

    textDescription: {
        textAlign: 'center',
        fontSize: 15,
        marginTop: 10,
        color: '#fff'
    },

    viewImage: {
        justifyContent: 'center',
         alignSelf: 'center'
    }

    
})