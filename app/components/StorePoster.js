import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Card, CardItem, Text, Body} from 'native-base'


export default class StorePoster extends Component {

    render() {
        return (
            <Card style={{flex: 0}}>
                <CardItem cardBody button onPress={() => this.props.navigation.navigate('Store')}>
                    <Image source={require('../images/store_1.png')}
                           style={{height: 120, width: null, flex: 1}}/>
                </CardItem>
            </Card>
        )
    }
}

const styles = {
    card: {
        justifyContent: 'center',
    },
    button: {
        borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,
        paddingHorizontal: 0,
    }
};