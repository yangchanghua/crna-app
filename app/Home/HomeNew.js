
'use strict';

import React, { Component } from 'react'
import {
    Text,
    View,
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
import Icon from 'react-native-vector-icons/Ionicons'
import SearchView from '../component/SearchView'
import LbsModal from '../component/LbsModal'
import TabView from '../component/TabView'

import {Container, Title, Header, Left, Body, Right, Content, Button} from 'native-base';
import ShopCategories from "./ShopCategories";
import ShopListView from "./ShopListView";
import InvitationBar from "./InvitationBar";

const isIOS = Platform.OS === "ios";
const { width, height } = Dimensions.get('window');
const headH = px2dp(isIOS?140:120);
const InputHeight = px2dp(28);

export default class HomePage extends Component {
    constructor(props){
        super(props);
        const {state} = this.props.navigation;
        this.state = {
            location: "华阳",
            scrollY: new Animated.Value(0),
            searchView: new Animated.Value(0),
            modalVisible: false,
            searchBtnShow: true,
            listLoading: false,
            isRefreshing: false,
            isScrolled: false,
            lbsButtonShow: true,
        };
        this.SEARCH_BOX_Y = px2dp(isIOS?48:43);
        this.SEARCH_FIX_Y = headH-px2dp(isIOS?64:44);
        this.SEARCH_KEY_P = px2dp(58);
        this.SEARCH_DIFF_Y = this.SEARCH_FIX_Y-this.SEARCH_BOX_Y;
        this.SEARCH_FIX_DIFF_Y = headH-this.SEARCH_FIX_Y-headH;
    }


    _renderHeader(){
        let searchBoxWidth = this.state.scrollY.interpolate({
            inputRange: [0, 10, 11],
            outputRange: [px2dp(200), px2dp(200), px2dp(300)],
            extrapolate: 'clamp'
        });
        let lbsOpacity = this.state.scrollY.interpolate({
            inputRange: [0, 10, 11],
            outputRange: [1, 1, 0],
            extrapolate: 'clamp'
        });

        let renderLbsButton = () => {
            return (
                <Left style={{flex: 2}} >
                    <Animated.View style={[styles.lbsWrapper, {opacity: lbsOpacity}]}>
                        <TouchableWithoutFeedback onPress={this.openLbs.bind(this)}>
                            <View style={styles.lbs}>
                                <Icon name="ios-pin" size={px2dp(14)} color="#fff" />
                                <Text style={{fontSize: px2dp(14), fontWeight: 'bold', color:"#fff", paddingHorizontal: 5}}>{this.state.location}</Text>
                                <Icon name="md-arrow-dropdown" size={px2dp(14)} color="#fff" />
                            </View>
                        </TouchableWithoutFeedback>
                    </Animated.View>
                </Left>
            );
        }
        return (
            <Header style={[styles.header]}>
                {this.state.lbsButtonShow && renderLbsButton()}
                <Body style={{flex: 6, justifyContent: 'space-between'}}>
                    <Animated.View style={{
                        flex: 20,
                        width: searchBoxWidth,
                        marginTop: px2dp(15),
                    }}>
                        <TouchableWithoutFeedback onPress={this.openSearch.bind(this)} >
                            <View style={[styles.searchBtn, {backgroundColor: "#fff"}]}>
                                <Icon name="ios-search-outline" size={20} color="#666" />
                                <Text style={{fontSize: 13, color:"#666", marginLeft: 5}}>{"输入商家，商品名称"}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </Animated.View>
                </Body>
                <Right style={{flex: 2}}>
                    <Animated.View style={{opacity: this.state.searchView}}>
                        <TouchableWithoutFeedback onPress={this.closeSearch.bind(this)}>
                            <View>
                            <Text>
                                取消
                            </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </Animated.View>
                </Right>
            </Header>
        )
    }
    openSearch(){
        const { timing } = Animated;
        Animated.timing(this.state.searchView, {
            toValue: 1,
            duration: 200
        }).start();
        this.setState({lbsButtonShow: false});
    }
    closeSearch() {
        Animated.timing(this.state.searchView, {
            toValue: 0,
            duration: 200
        }).start();
        this.setState({lbsButtonShow: true});
    }
    openLbs(){
        this.setState({modalVisible: true})
    }
    changeLocation(location){
        this.setState({location})
    }
    _onRefresh(){
        this.setState({isRefreshing: true});
        setTimeout(() => {
            this.setState({isRefreshing: false});
        }, 2000)
    }
    render() {
        return (
            <View style={{flex: 1, backgroundColor: "#f3f3f3"}}>
                {this._renderHeader()}
                <ScrollView
                    style={styles.scrollView}
                    onScroll={
                        Animated.event(
                            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}])}
                    scrollEventThrottle={16}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this._onRefresh.bind(this)}
                            colors={['#ddd', '#0398ff']}
                            progressBackgroundColor="#ffffff"
                        />
                    }
                >
                    <View style={{backgroundColor: "#fff", paddingBottom: 10}}>
                        <ShopCategories/>
                        <TouchableOpacity>
                            <View style={{height: px2dp(90), paddingHorizontal: 10}}>
                                <Image source={LocalImg.ad1} style={{height: px2dp(90), width: width-20, resizeMode: 'cover'}}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <InvitationBar/>
                    </View>

                    <View style={styles.recommandWrap}>
                        <Text style={{color: "#666", paddingLeft: 16, paddingBottom: 6}}>{"推荐商家"}</Text>
                        <ShopListView/>
                        <ActivityIndicator style={{marginTop: 10}} animating={this.state.listLoading}/>
                    </View>
                </ScrollView>

                <SearchView show={this.state.searchView}/>
                <LbsModal
                    modalVisible={this.state.modalVisible}
                    location={this.state.location}
                    setLocation={this.changeLocation.bind(this)}
                    closeModal={(()=>this.setState({modalVisible: false})).bind(this)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#0398ff",
        paddingHorizontal: 16
    },
    lbs: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    searchBtn: {
        borderRadius: InputHeight,
        height: InputHeight,
        flexDirection: "row",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
    scrollView: {
        marginBottom: px2dp(46)
    },
    card: {
        backgroundColor: "#fff",
        marginTop: 10,
        paddingHorizontal: 16,
        paddingVertical: 16
    },
    recommandWrap: {
        backgroundColor: "#fff",
        marginTop: 10,
        paddingVertical: 16
    },
});
