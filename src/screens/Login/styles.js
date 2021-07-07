import { StyleSheet } from "react-native";

export const style = StyleSheet.create ({
    conteiner: {
        backgroundColor: '#000',
        flex: 1
    },

    imageLogo: {
        marginTop: 60,
        resizeMode:'contain',
        width: 250,
        height: 150,
        alignSelf:'center'
    },

    slogan: {
        fontWeight: "bold",
        textAlign:'center',
        marginBottom: 15,
        fontSize:30,
        color: '#fff'
    },

    searchSection: {
        flexDirection: 'row',
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },

    input: {
        fontSize: 16,
        paddingLeft: 15,
        width: 250,
        height: 50,
        backgroundColor: '#424242',
        color: '#fff',
    },

    viewSearchIcon: {
        backgroundColor: '#424242',
        width: 70,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    loginIcon: {
        resizeMode:'contain',
        tintColor: '#fff',
        paddingHorizontal: 10,
        paddingRight: 5,
        width: 30,
        height: 30
    },

    rememberSection: {
        width: 320,
        left:40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    rememberIcon: {
        resizeMode:'contain',
        backgroundColor:'#000',
        tintColor: '#1ed760',
        width: 40,
        height: 40
    },

    rememberText: {
        color: '#fff',
        fontSize: 18,
    },

    viewRememberIcon: {
        backgroundColor: '#000',
        width: 70,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    loginButton: {
        width: 320,
        left:30,
        margin: 5,
        backgroundColor: '#fff',
        borderRadius: 35
    },

    textLoginButton: {
        fontSize: 20,
        letterSpacing: 1,
        fontWeight:'bold',
        textAlign:'center',
        padding: 10,
        color: '#000'
    },

    Separator: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    SeparatorText: {
        color: '#fff',
        fontSize:14
    },

    viewFacebookLogoButton:{
        width: 320,
        left:30,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#3b5998',
        borderRadius: 35
    },

    facebookButton: {
        // flex:1,
        width: 225,
        right: 30,
        backgroundColor: '#3b5998',
        borderRadius: 25
    },

    facebookButtonText: {
        color: '#fff',
        fontSize:16,
        letterSpacing: 1,
        textAlign:'center'
    },

    viewFacebookLogo: {
        width: 70,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

     facebookLogo: {
        width: 30,
        height: 30,
        tintColor:'#fff'
     }, 

     viewSignUp: {
        width: 320,
        left:40,
        marginTop: 10,
        marginBottom: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
     },

     textInformation: {
        color: '#fff',
        fontSize:16,
        letterSpacing: 1,
        textAlign:'center'
     },

     textLink: {
        color: '#fff',
        fontSize:16,
        textDecorationLine:'underline',
        letterSpacing: 1.5,
        textAlign:'center'
     },

     viewSettings: {
        width: 320,
        left:30,
        margin: 15,
        paddingBottom:20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
     },

     textSettings: {
        color: '#fff',
        fontSize:14,
        letterSpacing: 1,
        textAlign:'center'
     }

})