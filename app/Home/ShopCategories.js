import React, {Component} from 'react';


import {
    Text,
    View,
    BackAndroid,
    ScrollView,
    StyleSheet,
    AlertIOS,
    RefreshControl,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableHighlight,
    Image,
    TextInput,
    Platform,
    TouchableWithoutFeedback,
    Dimensions,
    ActivityIndicator,
    Animated
} from 'react-native'

import Swiper from 'react-native-swiper'
import { Button} from "native-base";
import {Icon} from 'react-native-elements';

import px2dp from '../util'
import LocalImg from '../images'

const isIOS = Platform.OS == "ios"

const { width, height } = Dimensions.get('window')

const categories = [
    {
        name: '火锅',
        avatar_url: '../images/cate_huoguo.png',
        avatar: require('../images/cate_huoguo.png')
    },
    {
        name: '川湘菜',
        avatar_url: '../images/cate_chuanxiangcai.png',
        avatar: require('../images/cate_chuanxiangcai.png')
    },
    {
        name: '烧烤',
        avatar_url: '../images/cate_shaokao.png',
        avatar: require('../images/cate_shaokao.png')
    },
    {
        name: '自助餐',
        avatar_url: '../images/cate_zizhucan.png',
        avatar: require('../images/cate_zizhucan.png')
    },
    {
        name: 'KTV',
        avatar_url: '../images/cate_ktv.png',
        avatar: require('../images/cate_ktv.png')
    },
    {
        name: '美容美发',
        avatar_url: '../images/cate_meirongmeifa.png',
        avatar: require('../images/cate_meirongmeifa.png')
    },
    {
        name: '茶楼',
        avatar_url: '../images/cate_chalou.png',
        avatar: require('../images/cate_chalou.png')
    },
    {
        name: '酒吧',
        avatar_url: '../images/cate_jiuba.png',
        avatar: require('../images/cate_jiuba.png')
    },
    {
        name: '东南亚菜',
        avatar_url: '../images/cate_dongnanyacai.png',
        avatar: require('../images/cate_dongnanyacai.png')
    },
    {
        name: '西餐',
        avatar_url: '../images/cate_xican.png',
        avatar: require('../images/cate_xican.png')
    },
    {
        name: '江浙菜',
        avatar_url: '../images/cate_jiangzhecai.png',
        avatar: require('../images/cate_jiangzhecai.png')
    },
    {
        name: '日韩料理',
        avatar_url: '../images/cate_rihanliaoli.png',
        avatar: require('../images/cate_rihanliaoli.png')
    },
    {
        name: '麻辣烫',
        avatar_url: '../images/cate_malatang.png',
        avatar: require('../images/cate_malatang.png')
    },
    {
        name: '披萨意面',
        avatar_url: '../images/cate_pisayimian.png',
        avatar: require('../images/cate_pisayimian.png')
    },
    {
        name: '包子粥店',
        avatar_url: '../images/cate_baozizhoudian.png',
        avatar: require('../images/cate_baozizhoudian.png')
    },
    {
        name: '川湘菜',
        avatar_url: '../images/cate_chuanxiangcai.png',
        avatar: require('../images/cate_chuanxiangcai.png')
    },
];


export default class Categories extends Component {

    render() {
        const w = width / 4, h = w * .6 + 20
        let renderSwipeView = (items) => {
            return (
                <View style={styles.categoriesView}>
                    {
                        items.map((item, i) => {
                            let render = (
                                <View style={[{width: w, height: h}, styles.categoriesItem]}>
                                    <Image source={item.avatar} style={{width: w * .5, height: w * .5}}/>
                                    <Text style={{fontSize: px2dp(12), color: "#666"}}>{item.name}</Text>
                                </View>
                            )
                            return (
                                isIOS ? (
                                    <TouchableHighlight style={{width: w, height: h}} key={i} onPress={() => {
                                    }}>{render}</TouchableHighlight>
                                ) : (
                                    <TouchableNativeFeedback style={{width: w, height: h}} key={i} onPress={() => {
                                    }}>{render}</TouchableNativeFeedback>
                                )
                            )
                        })
                    }
                </View>
            )
        }
        return (
            <Swiper
                height={h * 2.4}
                paginationStyle={{bottom: 10}}
                dotStyle={{backgroundColor: 'rgba(0,0,0,.2)', width: 6, height: 6}}
                activeDotStyle={{backgroundColor: 'rgba(0,0,0,.5)', width: 6, height: 6}}>
                {renderSwipeView(categories.slice(0, 8))}
                {renderSwipeView(categories.slice(8, 16))}
            </Swiper>
        )
    }
}


const styles = StyleSheet.create({
    categoriesView: {
        paddingBottom: 10,
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    categoriesItem: {
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
})