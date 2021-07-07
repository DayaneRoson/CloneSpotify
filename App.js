import React from 'react';
import {View} from 'react-native';
import {Login} from './src/screens/Login/Login'
import {TelaInicial} from './src/screens/TelaInicial/TelaInicial'

const App = () => {
  return (
    <View style={{flex:1}}>
       <Login/>
       {/* <TelaInicial/> */}
    </View>
  )
}

export default App;
