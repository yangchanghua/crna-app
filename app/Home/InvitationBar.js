'use strict';

import React, { Component } from 'react'
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
import LocalImg from '../images'
import px2dp from '../util'

import ShopAvatarView from '../component/ShopAvatarView'
import DetailPage from '../pages/DetailPage'
import data from '../data'

export default class InvitationBar extends React.Component {
    render() {
        return (
        <View style={{flexDirection: "row"}}>
            <View style={[styles.gift, {paddingRight: 16}]}>
                <View>
                    <Text style={{fontWeight: "bold"}}>{"邀请有奖"}</Text>
                    <Text style={{fontSize: 12, color: "#aaa"}}>{"邀请好友注册消费，赠送双方5元代金券"}</Text>
                </View>
                <Image source={LocalImg.coupon1} style={{height: 50, width: 50, resizeMode: 'cover'}}/>
            </View>
        </View>
    )
    }
}

const styles = StyleSheet.create({
    gift: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
})