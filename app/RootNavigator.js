import React, { Component } from "react";
import HomeScreen from './Home/index';
import ProfileScreen from './Profile/Profile';
import NearBy from './NearBy/NearBy';

import { TabNavigator } from "react-navigation";

import { Button, Text, Icon, Footer, FooterTab } from "native-base";
import HomeNew from "./Home/HomeNew";

const RootTabs = TabNavigator({
    HomeNew: {
        screen: HomeNew,
        navigationOptions: {
            tabBarLabel: 'HomeNew',
        }
    },
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'HomeScreen',
        },
    },
    NearBy: {
        screen: NearBy
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarLabel: 'ProfileScreen',
        }
    },
}, {
    tabBarComponent: props => {
        return (
            <Footer>
                <FooterTab>

                    <Button
                        vertical
                        active={props.navigationState.index === 0}
                        onPress={() => props.navigation.navigate("HomeNew")}>
                        <Icon name="home" />
                        <Text>新首页</Text>
                    </Button>
                    <Button
                        vertical
                        active={props.navigationState.index === 1}
                        onPress={() => props.navigation.navigate("NearBy")}>
                        <Icon name="ios-pin" />
                        <Text>附近</Text>
                    </Button>
                    <Button
                        vertical
                        active={props.navigationState.index === 2}
                        onPress={() => props.navigation.navigate("Profile")}>
                        <Icon name="person" />
                        <Text>我的</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
});

export default RootTabs;
