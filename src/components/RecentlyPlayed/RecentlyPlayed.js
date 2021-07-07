import React from 'react'
import {View, Image, FlatList, Text, TouchableOpacity} from 'react-native'
import { style } from './styles'

export const RecentlyPlayed = () => {
    const data = [
        {
        id: 1,
        image: <Image style={style.imageDailyMix} source={require('../../assets/images/popAcústico.jpg')}/>,
        description: "Versões desplugadas do mundo pop."
        },
        {
        id: 2,
        image: <Image style={style.imageDailyMix} source={require('../../assets/images/thisIsEdSheeran.jpg')}/>,
        description: "Listen to new track 'Bad Habits' alongside all his biggest hits"
        },
        {
        id: 3,
        image: <Image style={style.imageDailyMix} source={require('../../assets/images/louvores.jpg')}/>,
        description: "Louvores para Louvar ao Senhor"
        },
        {
        id: 4,
        image: <Image style={style.imageDailyMix} source={require('../../assets/images/softPopHits.jpg')}/>,
        description: "Listen to easy songs from your favorite artists. Cover: Adele"
        },
        {
        id: 5,
        image: <Image style={style.imageDailyMix} source={require('../../assets/images/deuMatch.jpg')}/>,
        description: "Músicas puro romance para aqueles momentos especiais com o mozão"
        },
        {
        id: 6,
        image: <Image style={style.imageDailyMix} source={require('../../assets/images/songsToSing.jpg')}/>,
        description: "Sing Along and enjoy the drive..."
        }
    ]

    return(
        
            <FlatList
            data={data}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
                return (
                    <View style={style.conteinerDailyMix}>
                        <TouchableOpacity>
                            <View style={style.conteinerImageDescrption}>
                                <View style = {style.viewImage}>{item.image}</View>
                                <Text numberOfLines={2}
                                 style={style.textDescription}>{item.description}</Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                    
                );
            }}
            />
    )
}