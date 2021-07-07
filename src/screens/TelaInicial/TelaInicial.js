import React from 'react'
import {View, Text, Image, StatusBar, ScrollView, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { HighLights } from '../../components/HighLights/HighLights'
import {Podcasts} from '../../components/Podcasts/Podcasts'
import { RecentlyPlayed } from '../../components/RecentlyPlayed/RecentlyPlayed'
import { Favorites } from '../../components/Favorites/Favorites'
import { Player } from '../../components/Player/Player'
import { Footer } from '../../components/Footer/Footer'
import { style } from './styles'

export const TelaInicial = () => {
    return (
        <LinearGradient style={{flex: 1}}
        start={{x: 0, y: 0}} end={{x: 0.20, y: 0.20}}
        locations={[0.20,0.30,0.50,0.60,0.75,1]}
        colors={['#1e0bd0','#2510a3','#241178','#1f104f','#170b2a','#121212']}
        >
            <StatusBar
            backgroundColor="transparent"
            translucent
            barStyle="light-content">
            </StatusBar>
            <View>
                <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
                    <View style={style.header}>
                        <Text style={style.textHeader}>
                            Bom dia
                        </Text>
                        <View style={style.headerIcons}>
                            <View style={style.viewHeaderIcons}>
                                <TouchableOpacity>
                                    <Image style={style.headerSizeIcon}
                                    source={require('../../assets/images/future.png')}/>
                                </TouchableOpacity>
                            </View>
                            <View style={style.viewHeaderIcons}>
                                <TouchableOpacity>
                                    <Image style={style.headerSizeIcon}
                                    source={require('../../assets/images/settings.png')}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                <HighLights/>
                <Text style={style.textBody}>
                        Seus Programas Favoritos
                </Text>
                <View style={style.conteinerComponents}>
                    <Podcasts/>
                </View>
                <Text style={style.textBody}>
                        Tocadas Recentemente
                    </Text>
                <View style={style.conteinerComponents}>
                    <RecentlyPlayed/>
                </View>
                    <Text style={style.textBody}>
                        Feito para Day
                    </Text>
                    <View style={style.conteinerComponents}>
                        <Favorites/>
                    </View>
                    <View style={{height: 130}}>
                    </View>
                </ScrollView>
                    <Player/>
                    <Footer/>
            </View>
        </LinearGradient>
    )
}