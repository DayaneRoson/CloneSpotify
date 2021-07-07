import React, {useState} from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native'
import { style } from './styles'

export const Player = () => {
    const [player, setPlayer] = useState(false);

    function handlePlayer() {
        setPlayer(!player);
    }

    return (
        <View style={style.conteinerPlayer}>
            <View style={style.conteinerInformationMusic}> 
                <View style={style.conteinerImage}>
                    <Image style={style.image} source={require('../../assets/images/loveRiot.jpg')}/>
                </View>
                <View style={style.conteinerText}>
                    <Text style={style.textPlayer}>Crazy</Text>
                    <Text style={style.textPlayerSinger}>Newsboys</Text>
                </View>
            </View>
            <View style={style.conteinerIcons}>
                <View style= {style.conteinerIcon}>
                <TouchableOpacity>
                        <Image style={style.heartIcon} source={require('../../assets/images/heart.png')}/>
                </TouchableOpacity>
                </View>
                <View style={style.conteinerIcon}>
                <TouchableOpacity onPress={() => handlePlayer()}>
                    {
                    player ? <Image style={style.icons} source={require('../../assets/images/play-button.png')}/> :
                    <Image style={style.icons} source={require('../../assets/images/pause.png')}/>
                    }
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}