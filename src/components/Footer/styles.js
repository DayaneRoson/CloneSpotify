import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    conteinerFooter: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        borderWidth: 1,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: '#282828',
        zIndex: 10
    },

    conteinerContent: {
        padding: 7,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    Icons: {
        width:20,
        height: 20,
        justifyContent:'center',
        alignSelf: 'center',
        tintColor: '#fff',
    },

    textFooter: {
        fontSize: 14,
        color:'#fff',
        textAlign: 'center'
    }
})