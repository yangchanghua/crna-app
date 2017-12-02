import React, {Component} from 'react';
import {View, Text} from 'react-native';
import CategoryItem from "./CategoryItem";

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

    render () {
        return (
            <View style={styles.container}>
                {
                    categories.map(cate => {
                        return (
                            <CategoryItem key={cate.name} title={cate.name} icon={cate.icon}/>
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
    }

};