import React from 'react'
import {View, Image, FlatList, Text, TouchableOpacity} from 'react-native'
import { style } from './styles'

export const Favorites = () => {
    const data = [
        {
        id: 1,
        image: <Image style={style.imageDailyMix} source={require('../../assets/images/dailyMix1.jpg')}/>,
        description: "John Mayer, James Arthur, Ed Sheeran e mais"
        },
        {
        id: 2,
        image: <Image style={style.imageDailyMix} source={require('../../assets/images/dailyMix2.jpg')}/>,
        description: "David Guetta, Alok, AVICII e mais"
        },
        {
        id: 3,
        image: <Image style={style.imageDailyMix} source={require('../../assets/images/dailyMix3.jpg')}/>,
        description: "Sam Smith, Camilla Cabello, Lewis Capaldi e mais"
        },
        {
        id: 4,
        image: <Image style={style.imageDailyMix} source={require('../../assets/images/dailyMix4.jpg')}/>,
        description: "Shawn Mendes, Marron 5, Boyce Avenue e mais"
        },
        {
        id: 5,
        image: <Image style={style.imageDailyMix} source={require('../../assets/images/dailyMix5.jpg')}/>,
        description: "Bastille, Imagine Dragons, Jack Johnson e mais"
        },
        {
        id: 6,
        image: <Image style={style.imageDailyMix} source={require('../../assets/images/dailyMix6.jpg')}/>,
        description: "Queen, Scorpions, Metallica e mais"
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