import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {List, ListItem, Button, Left, Thumbnail, Body, Right,} from 'native-base';

const stores = [
    {
        name: '川西坝子',
        // avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        avatar_url: require('../images/store_1.png'),
        icon: 'food-fork-drink',
        distance: 1.2,
        discount: 9.0
    },
    {
        name: '王妈热卤',
        // avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        avatar_url: require('../images/store_1.png'),
        icon: 'fitness-center',
        distance: 0.2,
        discount: 8.0
    },
    {
        name: '霸王虾',
        // avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        avatar_url: require('../images/store_1.png'),
        icon: 'movie-roll',
        distance: 0.3,
        discount: 8.8
    },
    {
        name: '星巴克(银泰店)',
        // avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        avatar_url: require('../images/store_1.png'),
        icon: 'movie-roll',
        distance: 2.4,
        discount: 8.8
    },
    {
        name: '川西坝子',
        // avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        avatar_url: require('../images/store_1.png'),
        icon: 'food-fork-drink',
        distance: 1.2,
        discount: 9.0
    },
    {
        name: '王妈热卤',
        // avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        avatar_url: require('../images/store_1.png'),
        icon: 'fitness-center',
        distance: 0.2,
        discount: 8.0
    },
    {
        name: '霸王虾',
        // avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        avatar_url: require('../images/store_1.png'),
        icon: 'movie-roll',
        distance: 0.3,
        discount: 8.8
    },
    {
        name: '星巴克(银泰店)',
        // avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        avatar_url: require('../images/store_1.png'),
        icon: 'movie-roll',
        distance: 2.4,
        discount: 8.8
    },
];

export default class StoreListBigger extends Component {

    handleStoreClick (name) {
        this.props.navigation.navigate('Store');
    }
    handlePayClick(store) {
        this.props.navigation.navigate('Pay', {
            store: store.name,
            discount: store.discount,
        });
    }
    render() {
        return (
            <List>
                {
                    stores.map((item) => (
                        <ListItem avatar onPress={() => this.handleStoreClick(item.name)}
                         style={{margin: 5}}>
                            <Left>
                                <Thumbnail square large source={item.avatar_url} />
                            </Left>
                            <Body>
                            <Text style={{fontSize: 18}}>{item.name}</Text>
                            <Text>{item.distance} km</Text>
                            </Body>
                            <Right>
                                <Button info onPress={() => this.handlePayClick(item)} style={{width: 100}}>
                                    <Text note>{item.discount} 折买单</Text>
                                </Button>
                            </Right>
                        </ListItem>
                    ))
                }
            </List>
        );
    }
}

