import React from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native'
import { style } from './styles'

export const Footer = () => {
    return (
        <View style={style.conteinerFooter}>
            <View style={style.conteinerContent}>
                <TouchableOpacity>
                    <Image style={style.Icons} source={require('../../assets/images/home.png')}/>
                    <Text style={style.textFooter}>Início</Text>
                </TouchableOpacity>
            </View>
            <View style={style.conteinerContent}>
                <TouchableOpacity>
                    <Image style={style.Icons} source={require('../../assets/images/loupe.png')}/>
                    <Text style={style.textFooter}>Buscar</Text>
                </TouchableOpacity>
            </View>
            <View style={style.conteinerContent}>
            <TouchableOpacity>
                <Image style={style.Icons} source={require('../../assets/images/books.png')}/>
                <Text style={style.textFooter}>Sua Biblioteca</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}