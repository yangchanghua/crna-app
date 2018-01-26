'use strict';

import React, {Component} from 'react'
import {Animated, Dimensions, findNodeHandle, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Parabolic from '../component/ParaBolic'
import px2dp from '../util'
import data from '../data'
import NavBar from '../component/NavBar'
import TabViewBar from '../component/MyDefTabBar'
import GoodsList from '../pages/GoodsList'
import Comments from '../pages/Comments'
import ShopBar from '../component/ShopBar'
import {Card, CardItem, Container, Content, Header, Left, Right, Title} from 'native-base';
import Button from "../component/Button";
import ShopAvatarView from "../component/ShopAvatarView";

let {width, height} = Dimensions.get('window')

export default class ShopPage extends Component {
    static navigationOptions = ({navigation}) => ({
        header: (
            <Header>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="ios-arrow-back" style={{fontSize: 16}}/>
                    </Button>
                </Left>
                <Right>
                    <View style={{flexDirection: 'row', }}>
                        <TouchableOpacity >
                            <Icon name="ios-share-alt" style={styles.headerIcon} onPress={()=>{}}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="ios-star-outline" style={styles.headerIcon} onPress={()=>{}}/>
                        </TouchableOpacity>
                    </View>
                </Right>
            </Header>
        )
    });
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
            viewRef: 0,
            b: {},
            goods: data.goods,
            data: this.props.navigation.state.params.store
        }
    }
    componentDidMount(){
        let marginTop = 100;//18+px2dp(80+this.state.data.activities.length*18)
        let { scrollY } = this.refs.goodsList.state
        let activeHeight = px2dp(18)*2
        this.setState({
            scrollY: scrollY.interpolate({inputRange: [0, marginTop, marginTop],outputRange: [0, -marginTop, -marginTop]}),
        })
    }
    back(){
        this.props.navigator.pop()
    }
    onAdd(data){
        let { pos } = data
        this.setState({
            addBtnY: data.y
        })
        this.refs["parabolic"].run(pos, data)
    }
    parabolicEnd(data){
        let { selected, lens } = this.state
        let num = (lens[data.data.key]||0)+1
        let price = lens.maxPrice || 0
        let length = lens.length || 0
        lens[data.data.key] = num
        lens.maxPrice = price+data.data.price
        lens.length = length + 1
        selected.push(data.data)
        this.state.runBtn.setValue(0)
        this.setState({ addBtnY: -9999, selected, lens})
        this.refs.shopbar.runAnimate()
    }
    renderGoods(){
        let marginTop = 18+px2dp(this.state.data.activities.length*18)
        let MAIN_HEIGHT = height - NavBar.topbarHeight
        let style = {
            transform: [{
                translateY: this.state.scrollY
            }]
        }
        if(Platform.OS == "android"){
            style.height = height + 80
        }

        return (
            <Animated.View style={[ style]}>
                <View style={{
                    backgroundColor: "#f3f3f3",
                    height: MAIN_HEIGHT,
                    width,
                }}>
                    <ScrollableTabView page={0} renderTabBar={() => <TabViewBar/>}>
                        <GoodsList ref="goodsList" minus={this.minusItem.bind(this)} lens={this.state.lens} goods={this.state.goods} onAdd={this.onAdd.bind(this)} headHeight={marginTop} tabLabel="商品"/>
                        <Comments headHeight={marginTop} tabLabel="评价(4.1分)"/>
                    </ScrollableTabView>
                </View>
            </Animated.View>
        )
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
                <View style={styles.shopInfoCard}>
                    <View style={styles.shopInfoBody}>
                        <ShopAvatarView {...data}/>
                        <View style={styles.extraInfo}>
                            <Icon name='ios-clock-outline' style={{fontSize: px2dp(14), marginRight: px2dp(10)}}/>
                            <Text style={{fontSize: px2dp(14)}}>营业时间：{data.bzHours[0]} - {data.bzHours[1]}</Text>
                        </View>
                        <View style={styles.extraInfo}>
                            <Icon name='ios-pin-outline' style={{fontSize: px2dp(14), marginRight: px2dp(10)}}/>
                            <Text style={{fontSize: px2dp(14)}}>{data.addr}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.shopInfoCard}>
                    <View style={styles.shopInfoBody}>
                        <View style={[styles.extraInfo, {justifyContent: 'space-between'}] }>
                            <View style={{flexDirection: 'row'}}>
                                <View>
                                    <Text style={styles.payIcon}>惠</Text>
                                </View>
                                <View style={{flexDirection: 'column', marginLeft: 5, paddingHorizontal: 5}}>
                                    <Text style={{fontSize: px2dp(12), fontWeight: 'bold'}}>独享优惠买单</Text>
                                    <Text style={styles.payDetail}>{data.activities[0].text}</Text>
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.payButton}>
                                    <Text style={{fontSize: px2dp(14), color: "#fff"}}>买单</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                        </View>
                    </View>
                </View>
                {this.renderGoods()}
                <Parabolic
                    ref={"parabolic"}
                    style={[styles.tmpBtn, {top: this.state.addBtnY}]}
                    renderChildren={() => {
                        return (
                            <View style={{width:px2dp(14), height:px2dp(14), backgroundColor:"#3190e8", borderRadius: px2dp(7), overflow:"hidden"}}></View>
                        )
                    }}
                    animateEnd={this.parabolicEnd.bind(this)}
                />
                <ShopBar ref={"shopbar"} list={this.state.selected} lens={this.state.lens}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    shopInfoCard:{
        paddingBottom: px2dp(10),
        backgroundColor: "#f5f5f5"
    },

    shopInfoBody: {
        paddingHorizontal: px2dp(10),
        borderBottomColor: "#f5f5f5",
        backgroundColor: '#fff',
    },

    extraInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: px2dp(10),
        borderBottomColor: "#f5f5f5",
        backgroundColor: '#fff',
    },
    payIcon: {
        fontSize: px2dp(11),
        color: "#fff",
        backgroundColor:  "#f07373",
        paddingHorizontal: 1,
        paddingVertical: 1
    },
    payButton: {
        backgroundColor: '#f07373',
        paddingHorizontal: px2dp(20),
        paddingVertical: px2dp(5),
    },
    payDetail: {
        fontSize: px2dp(12),
        color: "#ff3c29"
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
