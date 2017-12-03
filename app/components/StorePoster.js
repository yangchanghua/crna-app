import React, {Component} from 'react';
import {View, Image} from 'react-native';
import { Card, CardItem, Text} from 'native-base'


export default class StorePoster extends Component {
    render() {
        return (
            <View>
                <Card>
                    <CardItem>
                        <Text>川西坝子</Text>
                    </CardItem>
                    <CardItem>
                        <Image source={require('../images/store_1.png')} style={{height: 80, width: null, flex: 1}}/>
                    </CardItem>
                </Card>
            </View>
        )
    }
}

const styles = {
    card: {
        justifyContent: 'center',
    },
    button: {
        borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,
        paddingHorizontal:0,
    }
};