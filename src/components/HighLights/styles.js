import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    images: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    },

    heartIcon: {
        width: 30,
        height: 30,
        tintColor: '#fff',
        borderRadius: 3
    },

    viewImages: {
        width: 50,
        height: 50,
        borderRadius: 3,
        backgroundColor:'#00008b',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    viewText: {
        width: 117,
        height: 50,
        borderRadius:4,
        backgroundColor: '#2A2A2A',
    },

    text: {
        color: '#fff',
        textAlign:'center',
        alignContent: 'center',
        justifyContent:'flex-start',
        fontSize: 16
    },


    viewHighLights: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4,
        marginTop: 4,
        paddingTop: 2,
        paddingLeft: 0
    }

})



