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

export default class ShopListView extends React.Component {
    render() {
        return data.list.map((item, i) => {
            item.onPress = () => {
                this.props.navigator.push({
                    component: DetailPage,
                    args: {}
                })
            }
            return (<ShopAvatarView {...item} key={i}/>)
        })
    }
}