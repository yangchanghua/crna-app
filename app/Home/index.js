import React from 'react';
import {StackNavigator} from 'react-navigation';
import ChooseCity from '../ChooseCity/ChooseCity'
import Search from '../Search/Search'
import StoreList from '../StoreList/StoreList'
import Store from '../Store/Store'
import Pay from '../Pay/Pay'
import Home from "./Home";

const HomeNavigator = StackNavigator({
    Home: {screen: Home},
    ChooseCity: {screen: ChooseCity},
    Search: {screen: Search},
    StoreList: {screen: StoreList},
    Store: {screen: Store},
    Pay: {screen: Pay},
})

export default HomeNavigator;