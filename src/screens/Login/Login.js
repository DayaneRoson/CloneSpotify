import React, {useState} from 'react';
import {View, Text, StatusBar, Switch, Image, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import { style } from './styles';

 export const Login = () => {
  const [typeKeyboard, setTypeKeyboard] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  function handleTypeKeyboard () {
    setTypeKeyboard(!typeKeyboard)
  }

  return(
    <View style = {style.conteiner}>
      <StatusBar
      backgroundColor="transparent"
      translucent
      barStyle="light-content">
    </StatusBar>
      <View >
        <Image style={style.imageLogo} source={require('../../assets/images/logo.png')}/>
        <Text style = {style.slogan}>Música para todos.</Text>
      </View>
      <KeyboardAvoidingView behavior={'padding'}>
        <View style = {style.searchSection}>
          <TextInput
            style={style.input}
            placeholder="E-mail ou nome de usuário"
            placeholderTextColor={'#fff'}>
          </TextInput>
            <View style={style.viewSearchIcon}>
              <Image
                style={style.loginIcon}
                source ={require('../../assets/images/envelope.png')} /> 
            </View>
        </View>
        <View style = {style.searchSection}>
          <TextInput
            style={style.input}
            placeholder="Senha"
            secureTextEntry={typeKeyboard}
            placeholderTextColor={'#fff'}>
          </TextInput>
          <View style={style.viewSearchIcon}>
            <TouchableOpacity onPress={() => handleTypeKeyboard()}>
              <Image
              style={style.loginIcon}
              source ={require('../../assets/images/visibility.png')} /> 
            </TouchableOpacity>
          </View>
        </View>
      <View style={style.rememberSection}>
            <Text
            style={style.rememberText}>Lembrar de mim</Text>
            <View style={style.viewRememberIcon}>
            <Switch
              style={{transform: [{scaleX: 1.2}, {scaleY: 1.2}]}}
              trackColor={{false: '#767577', true: '#1ed760'}}
              thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
              ios_backgroundColor='#A4A4A3'
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            </View>
      </View>
        <View style={style.loginButton}>
          <TouchableOpacity >
            <Text style={style.textLoginButton}
            >ENTRAR</Text>
          </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
        <View style={style.Separator}>
            <Text style={style.SeparatorText}
            >----------------------------------    OU    -------------------------------</Text>
        </View>
        <View style={style.viewFacebookLogoButton}>
          <View style={style.viewFacebookLogo}>
          <Image style={style.facebookLogo} 
          source={require('../../assets/images/facebook.png')}/>
          </View>
            <TouchableOpacity style={style.facebookButton}>
              <Text
              style={style.facebookButtonText}
              >ENTRAR COM O FACEBOOK</Text>
            </TouchableOpacity>
        </View>
        <View style={style.viewSignUp}>
          <Text style={style.textInformation}>
            NÃO TEM UMA CONTA?
          </Text>
          <Text style={style.textLink}>
            INSCREVA-SE
          </Text>
        </View>
        <View style={style.viewSettings}>
          <Text style={style.textSettings}>
            REDEFINIR SENHA
          </Text>
          <Text style={style.textSettings}>
            PREFERÊNCIAS
          </Text>
        </View>
    </View>
  )
}