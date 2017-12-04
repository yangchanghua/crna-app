import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {List, ListItem, Button, Left, Thumbnail, Body, Right,} from 'native-base';

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

export default class StoreListAvatar extends Component {

    _onPress = (item) => {
        this.props.navigation.navigate('Store', {name: item});
    };

    render() {
        return (
            <List>
                {
                    stores.map((l, i) => (
                        <ListItem avatar onPress={() => this._onPress(l.name)}>
                            <Left>
                                <Thumbnail source={l.avatar_url} />
                            </Left>
                            <Body>
                            <Text>{l.name}</Text>
                            <Text>美食</Text>
                            </Body>
                            <Right>
                                <Text note>8.8折买单</Text>
                            </Right>
                        </ListItem>
                    ))
                }
            </List>
        );
    }
}
