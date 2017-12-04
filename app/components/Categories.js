import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { Button} from "native-base";
import {Icon} from 'react-native-elements';

const categories = [
    {
        name: '美食',
        // avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        avatar_url: '../images/store_1.png',
        icon: 'food-fork-drink',
    },
    {
        name: '健身',
        // avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        avatar_url: '../images/store_1.png',
        icon: 'fitness-center',
    },
    {
        name: '电影',
        // avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        avatar_url: '../images/store_1.png',
        icon: 'movie-roll',
    },
]

export default class Categories extends Component {

    render() {
        return (
            <View style={styles.container}>
                {
                    categories.map(cate => {
                        return (
                            <TouchableOpacity key={cate.name} style={styles.item}
                            onPress={() => this.props.navigation.navigate('StoreList')}>
                                <Icon reverse name={cate.icon} type='material-community'/>
                                <Text>{cate.name}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }
}


const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        // alignContent: 'center',
    },
    item: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
};