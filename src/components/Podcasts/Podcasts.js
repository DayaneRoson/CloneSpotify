import React from 'react'
import {View, Image, FlatList, Text, TouchableOpacity} from 'react-native'
import { style } from './styles'

export const Podcasts = () => {
    const data = [
        {
        id: 1,
        image: <Image style={style.imagePodCasts} source={require('../../assets/images/JesusCopy.jpg')}/>,
        description: "Fomos criados para ser uma cópia de Jesus e nada vai nos impedir de cumprir essa missão!"
        },
        {
        id: 2,
        image: <Image style={style.imagePodCasts} source={require('../../assets/images/nerdCast.jpg')}/>,
        description: "O mundo vira Piada no Jovem Nerd"
        },
        {
        id: 3,
        image: <Image style={style.imagePodCasts} source={require('../../assets/images/podcastDoDia.jpg')}/>,
        description: "Encontre novos Podcasts para você!"
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
                    <View style={style.conteinerPodcasts}>
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