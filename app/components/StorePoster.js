import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'


export default class StorePoster extends Component {
    render() {
        return (
            <View>
                <Card
                    title='川西坝子'
                    style={styles.card}
                    image={require('../images/store_1.png')}>
                </Card>
            </View>
        )
    }
}

{/*<Button*/}
    {/*icon={{name: 'order'}}*/}
    {/*backgroundColor='#03A9F4'*/}
    {/*buttonStyle={styles.button}*/}
    {/*title='订餐' />*/}

const styles = {
    card: {
        justifyContent: 'center',
    },
    button: {
        borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,
        paddingHorizontal:0,
    }
};