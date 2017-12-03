import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import { List, ListItem, Button } from 'react-native-elements'
import CategoryItem from "./CategoryItem";

const stores = [
    {
        name: '川西坝子',
        // avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        avatar_url: require('../images/store_1.png'),
        icon: 'food-fork-drink',
    },
    {
        name: '王妈热卤',
        // avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        avatar_url: require('../images/store_1.png'),
        icon: 'fitness-center',
    },
    {
        name: '霸王虾',
        // avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        avatar_url: require('../images/store_1.png'),
        icon: 'movie-roll',
    },
    {
        name: '霸王虾',
        // avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        avatar_url: require('../images/store_1.png'),
        icon: 'movie-roll',
    },
    {
        name: '霸王虾',
        // avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        avatar_url: require('../images/store_1.png'),
        icon: 'movie-roll',
    },
    {
        name: '霸王虾',
        // avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        avatar_url: require('../images/store_1.png'),
        icon: 'movie-roll',
    },
    {
        name: '小天鹅',
        // avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        avatar_url: require('../images/store_1.png'),
        icon: 'movie-roll',
    },
];

export default class StoreList extends Component {

    _onPress = (item) => {

    };

    render() {
        return (
            <List containerStyle={{marginBottom: 20}}>
                {
                    stores.map((l, i) => (
                        <ListItem
                            roundAvatar
                            avatar={l.avatar_url}
                            key={i}
                            title={l.name}
                            onPress={this._onPress}
                        />
                    ))
                }
            </List>
        );
    }
}

const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        // alignContent: 'center',
    }

};