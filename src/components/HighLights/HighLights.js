import React from 'react'
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native'
import { style } from './styles'

export const HighLights = () => {
    const data = [
       { id: 1,
        image: <Image style={style.heartIcon} source={require('../../assets/images/heart.png')}/>,
        name: "Músicas Curtidas"},
        { id: 2,
        image: <Image style= {style.images} source={require('../../assets/images/onlyJesus.jpg')}/>,
        name: "Only Jesus"},
        {id : 3,
        image: <Image style= {style.images} source={require('../../assets/images/loveRiot.jpg')}/>,
        name: "Love Riot"},
        {id : 4,
        image: <Image style= {style.images} source={require('../../assets/images/albumx.jpg')}/>,
        name: "Division"},
        {id: 5,
        image: <Image style= {style.images} source={require('../../assets/images/pop.jpg')}/>,
        name: "Pop Music"},
        {id: 6,
        image: <Image style= {style.images} source={require('../../assets/images/louvores.jpg')}/>,
        name: "Louvores"}
    ]

    return (
        <View>
            <FlatList
            data={data}
            keyExtractor={item => item.id}
            numColumns={2}
            vertical={true}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
                return (
                        <View style= {style.viewHighLights}>
                                <View style = {style.viewImages}>{item.image}</View>
                                <View style = {style.viewText}>
                                    <TouchableOpacity>
                                        <Text style={style.text}>{item.name}</Text>
                                    </TouchableOpacity>
                                </View>
                        </View>
                );
            }}
            />
        </View>
    )
}