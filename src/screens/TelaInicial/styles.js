import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
    conteiner: {
        backgroundColor: '#000',
        flex: 1
    },

    header: {
        flex: 1,
        marginTop: 55,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerIcons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    headerSizeIcon: {
        width: 20,
        height: 20,
        tintColor:'#fff',
    },

    textHeader: {
        color: '#fff',
        fontSize:28,
        letterSpacing: 1,
        paddingLeft: 15,
        textAlign:'center'
    },

    textBody: {
        color: '#fff',
        fontSize:28,
        letterSpacing: 1,
        paddingLeft: 13,
        paddingTop: 10,
        textAlign:'left'
    },

    viewHeaderIcons: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    conteinerComponents: {
        marginLeft: 10,
        marginTop: 20,
    },

})