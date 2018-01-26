'use strict';

import React, {Component} from 'react'
import {
    Animated,
    Dimensions,
    findNodeHandle,
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Parabolic from './ParaBolic'
import px2dp from '../util/index'
import LocalImg from '../images'
import data from '../data'
import NavBar from './NavBar'
import TabViewBar from './MyDefTabBar'
import GoodsList from '../pages/GoodsList'
import Comments from '../pages/Comments'
import ShopBar from './ShopBar'
import {BlurView} from 'react-native-blur'
import {Body, Card, CardItem, Container, Content, Header, Left, Right, Title} from 'native-base';
import Button from "./Button";

let {width, height} = Dimensions.get('window')

export default class ShopDetail extends Component {
    constructor(props){
        super(props);

        this.state = {
            scrollY: 0,
            titleOpacity: 0,
            activeOpacity: 1,
            headOpacity: 1,
            addBtnY: -9999,
            animateBtnX: 0,
            animateBtnY: 0,
            runBtn: new Animated.Value(0),
            selected: [],
            lens: {},
            bgY: 0,
            bgScale: 1,
            viewRef: 0,
            b: {},
            goods: data.goods,
            data: this.props.navigation.state.params.store
        }
    }
    componentDidMount(){
        let marginTop = 18+px2dp(80+this.state.data.activities.length*18)
        let { scrollY } = this.refs.goodsList.state
        let activeHeight = px2dp(18)*2;
        this.setState({
            activeOpacity: scrollY.interpolate({inputRange: [0, activeHeight],outputRange: [1, 0]}),
            bgScale: scrollY.interpolate({inputRange: [ -marginTop, 0, marginTop],outputRange: [2, 1, 1]}),
            headOpacity: scrollY.interpolate({inputRange: [0, activeHeight, marginTop],outputRange: [1, 1, 0]}),
            titleOpacity: scrollY.interpolate({inputRange: [0, marginTop-10, marginTop],outputRange: [0, 0, 1]}),
            scrollY: scrollY.interpolate({inputRange: [0, marginTop, marginTop],outputRange: [0, -marginTop, -marginTop]}),
            bgY: scrollY.interpolate({inputRange: [ -marginTop, 0, marginTop, marginTop],outputRange: [marginTop/2, 0, -marginTop/3, -marginTop/3]})
        })
    }

    onAdd(data){
        let { pos } = data
        this.setState({
            addBtnY: data.y
        })
        this.refs["parabolic"].run(pos, data)
    }
    minusItem(obj){
        let { selected,lens } = this.state
        let key = obj.key
        let num = (lens[key]||0)-1
        if(num < 0){
            return
        }
        lens[key] = num
        lens.maxPrice -= obj.price
        lens.length -= 1
        for(let i=0,item; item=selected[i]; i++){
            if(item.key == key){
                selected.splice(i,1)
            }
        }
        this.setState({selected, lens})
    }
    renderActivities(){
        let color = {
            "减": "#f07373",
            "特": "#f1884f",
            "新": "#73f08e"
        }
        let { activities } = this.state.data
        if(!activities || !activities.length){
            return null
        }else{
            return (
                <Animated.View style={[styles.actives, {opacity: this.state.activeOpacity}]}>
                    {
                        activities.map((item, i) => {
                            return (
                                <View key={i} style={{flexDirection: "row", alignItems:"center", height: px2dp(18)}}>
                                    <Text style={{fontSize: px2dp(11), color: "#fff", backgroundColor: color[item.key] || "#f1884f", paddingHorizontal: 1, paddingVertical: 1}}>{item.key}</Text>
                                    <Text numberOfLines={1} style={{fontSize: px2dp(11), marginLeft:3, color: "#fff"}}>{item.text}</Text>
                                </View>
                            )
                        })
                    }
                </Animated.View>
            )
        }
    }
    imageLoaded(){
        this.setState({viewRef: findNodeHandle(this.refs.backgroundImage)})
    }
    render(){
        let { data } = this.state;
        let props = Platform.OS === 'ios'?{
            blurType: "light",
            blurAmount: 25
        }:{
            viewRef: this.state.viewRef,
            downsampleFactor: 10,
            overlayColor: 'rgba(255,255,255,.1)'
        };
        const {name, logo, scores, sale, evOnePay, distance, activities, bzHours, category, area, shopClicked} = data;
        let scale = scores/5*55;
        return (
            <View style={{flex: 1, backgroundColor: "#fff"}}>
                    {/*<BlurView {...props} style={styles.blur}/>*/}
                <View style={styles.head}>
                    <Animated.View style={{flexDirection: "row", paddingHorizontal: 16, opacity: this.state.headOpacity}}>
                        <Image source={LocalImg.bg} style={styles.logo}/>
                        <View style={styles.bzContent}>
                            <View style={styles.between}>
                                <View style={{flexDirection: "row", flex: 1}}>
                                    <Text numberOfLines={1} style={styles.name}>{name}</Text>
                                </View>
                            </View>
                            <View style={[styles.between, {marginTop: 8}]}>
                                <View style={{flexDirection: "row", flex: 1}}>
                                    <View>
                                        <Image source={LocalImg.star2} style={{height: 10, width: 55}}/>
                                        <View style={{height: 10, position:"absolute", left:0, top:0, width: scale, overflow:"hidden"}}>
                                            <Image source={LocalImg.star1} style={{height: 10, width: 55}}/>
                                        </View>
                                    </View>
                                    <Text style={{fontSize: px2dp(11), color: "#ff6000"}}>{scores}</Text>
                                    <Text style={{fontSize: px2dp(11), color: "#666", marginLeft: 2}}>{`月售${sale}单`}</Text>
                                </View>
                            </View>
                            <View style={[styles.between, {marginTop: 8}]}>
                                <View style={{flexDirection: "row", flex: 1}}>
                                    <Text style={styles.infoText}>{category}</Text>
                                </View>
                                <View style={{flexDirection: "row", justifyContent:"flex-end"}}>
                                    <Text style={styles.infoText}>{area}</Text>
                                </View>
                            </View>
                            <View style={[styles.between, {marginTop: 8}]}>
                                <View style={{flexDirection: "row", flex: 1}}>
                                    <Text style={styles.infoText}>{evOnePay}</Text>
                                </View>
                                <View style={{flexDirection: "row", justifyContent:"flex-end"}}>
                                    <Text style={styles.infoText}>{distance}</Text>
                                </View>
                            </View>
                        </View>
                    </Animated.View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    head:{
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        paddingTop: 10,
        // backgroundColor: "rgba(0,0,0,.3)"
    },

    infoText: {
        fontSize: px2dp(11),
        color: "#666"
    },
    headerIcon: {
        paddingHorizontal: 10,
        fontSize: 16
    },
    bg:{
        width,
        height: width,
        resizeMode: "cover"
    },
    blur: {
        position: "absolute",
        left:0,
        right:0,
        top:0,
        width,
        height: width,
    },
    logo: {
        width: px2dp(80),
        height: px2dp(80),
        resizeMode: "cover"
    },
    label2: {
        fontSize: 10,
        color: "#fff",
        backgroundColor: "#00abff",
        textAlign: "center",
        paddingHorizontal: 2,
        paddingVertical: 1
    },
    actives: {
        paddingTop: 4,
        marginTop: 8,
        paddingHorizontal: 16
    },
    topView: {
        position: "absolute",
        top: NavBar.topbarHeight,
        bottom: 0,
        left: 0,
        right: 0
    },
    tmpBtn: {
        backgroundColor: "transparent",
        position: "absolute",
        right: 4,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center"
    }
})
