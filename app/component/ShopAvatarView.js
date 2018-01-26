'use strict';

import React, {Component} from 'react'
import PropTypes from 'prop-types'; // ES6
import {Image, StyleSheet, Text, View} from 'react-native'
import LocalImg from '../images'
import px2dp from '../util'
import Button from './Button'

export default class ShopAvatarView extends Component {
    constructor(props){
        super(props)
    }
    static propTypes = {
        name: PropTypes.string.isRequired,
        logo: PropTypes.number.isRequired,
        isBrand: PropTypes.bool,
        scores: PropTypes.number,
        sale: PropTypes.number,
        evOnePay: PropTypes.string,
        distance: PropTypes.string,
        time: PropTypes.string,
        activities: PropTypes.array,
        shopClicked: PropTypes.func
    }
    renderActivities(){
        let color = {
            "减": "#f07373",
            "特": "#f1884f",
            "新": "#73f08e"
        }
        let {activities} = this.props;
        if(!this.props.showActivities || !activities || !activities.length){
            return null
        }else{
            return (
                <View style={styles.actives}>
                    {
                        activities.map((item, i) => {
                            return (
                                <View key={i} style={{flexDirection: "row", marginTop: 5}}>
                                    <Text style={{fontSize: px2dp(11), color: "#fff", backgroundColor: color[item.key] || "#f1884f", paddingHorizontal: 1, paddingVertical: 1}}>{item.key}</Text>
                                    <Text numberOfLines={1} style={{fontSize: px2dp(11), marginLeft:3, color: "#666"}}>{item.text}</Text>
                                </View>
                            )
                        })
                    }
                </View>
            )
        }
    }
    render(){
        const {name, isBrand, logo, scores, sale, evOnePay, distance, activities, bzHours, category, area, shopClicked} = this.props;
        let scale = scores/5*55;
        return (
            <Button onPress={shopClicked}>
                <View style={styles.bzWrap}>
                    <View style={styles.border}>
                        <Image source={logo} style={styles.bzLogo}/>
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
                                {this.props.showDistance && (<View style={{flexDirection: "row", justifyContent:"flex-end"}}>
                                    <Text style={styles.infoText}>{distance}</Text>
                                </View>)}
                            </View>
                            {this.renderActivities()}
                        </View>
                    </View>
                </View>
            </Button>
        )
    }
}


const styles = StyleSheet.create({
    bzWrap: {
        backgroundColor: "#fff",
        paddingLeft: 10
    },
    border: {
        flexDirection: "row",
        paddingTop: 18,
        paddingBottom: 14,
        borderBottomWidth: 1,
        borderBottomColor: "#f5f5f5"
    },
    bzLogo: {
        resizeMode: "contain",
        borderWidth: 1,
        borderColor: "#f9f9f9",
        width: px2dp(100),
        height: px2dp(100)
    },
    bzContent: {
        marginLeft: 6,
        marginRight: 10,
        flex: 1
    },
    between: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    },
    name: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#333",
        marginLeft: 3
    },
    infoText: {
        fontSize: px2dp(11),
        color: "#666"
    },
    actives: {
        paddingTop: 4,
        marginTop: 8,
        borderTopWidth: 1,
        borderTopColor: "#f9f9f9"
    }
});
