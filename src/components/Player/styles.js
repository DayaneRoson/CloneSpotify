import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
    conteinerPlayer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        position: 'absolute',
        left: 0,
        borderWidth: 1,
        borderTopColor: '#000',
        bottom: 55,
        right: 0,
        backgroundColor: '#282828',
        zIndex: 10
    },

    conteinerImage: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    conteinerText: {
        flexDirection: 'column'
    },

    conteinerIcons: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingRight: 5,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },

    image: {
        width:40,
        height: 40
    },

    icons: {
        width:25,
        height: 25,
        tintColor: '#fff'
    },

    heartIcon: {
        width:25,
        height: 25,
        tintColor: '#1DD75F'
    },

    conteinerIcon: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textPlayer: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        paddingTop: 5,
        paddingLeft: 2,
        textAlign: 'left'
    },

    textPlayerSinger: {
        fontSize: 14,
        color: '#fff',
        paddingLeft: 2,
        textAlign: 'right'
    },

    conteinerInformationMusic: {
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    }
})