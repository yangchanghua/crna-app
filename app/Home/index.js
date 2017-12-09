import React from 'react';
import {StackNavigator} from 'react-navigation';
import ChooseCity from '../ChooseCity/ChooseCity'
import Search from '../Search/Search'
import StoreSearchResult from '../StoreSearchResult/StoreSearchResult'
import Store from '../Store/Store'
import Pay from '../Pay/Pay'
import Home from "./Home";
import {Header, Left, Button, Icon, Body, Title, Right} from 'native-base';

const HomeNavigator = StackNavigator({
    Home: {screen: Home},
    ChooseCity: {screen: ChooseCity,
        navigationOptions: ({ navigation }) => ({
                tabBarVisible: false,
        })
    },
    Search: {screen: Search,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: false,
        })
    },
    StoreSearchResult: {screen: StoreSearchResult,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: false,
        })
    },
    Store: {screen: Store,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: false,
        })
    },
    Pay: {screen: Pay,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: false,
        })
    },
})

;

export default HomeNavigator;