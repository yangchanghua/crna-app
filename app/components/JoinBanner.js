import React from 'react';
import {View, Image, TouchableHighlight} from 'react-native';
import { Button } from 'react-native-elements';

export default class CitySearchBar extends React.Component {

    render() {
        return (
            <View style={ styles.container }>
                <TouchableHighlight onPress={this._onPressButton}>
                    <Image
                        style={styles.banner}
                        source={require('../images/join_banner.jpeg')}
                    />
                </TouchableHighlight>
            </View>
        );
    }
    
    _onPressButton = function () {
        
    }
}


const styles = {
    container: {
        paddingVertical: 15,
        flexDirection: 'row',
    },
    banner: {
        height: 50,
    },
};