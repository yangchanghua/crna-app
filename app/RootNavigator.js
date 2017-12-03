import React, { Component } from "react";
import HomeScreen from './Home/index';
import ProfileScreen from './Profile/Profile';
import NearBy from './NearBy/NearBy';

import { TabNavigator } from "react-navigation";

import { Button, Text, Icon, Footer, FooterTab } from "native-base";

const RootTabs = TabNavigator({
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
                        onPress={() => props.navigation.navigate("Home")}>
                        <Icon name="home" />
                        <Text>首页</Text>
                    </Button>
                    <Button
                        vertical
                        active={props.navigationState.index === 1}
                        onPress={() => props.navigation.navigate("NearBy")}>
                        <Icon name="ion-ios-location" />
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
