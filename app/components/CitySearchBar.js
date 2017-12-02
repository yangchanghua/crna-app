import React from 'react';
import {View, Text, TextInput} from 'react-native';
import { Button } from 'react-native-elements';

export default class CitySearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { searchText: '' };
    }

    render() {
        return (
            <View style={ styles.container }>
                <Button
                    iconRight={{name: 'location-on'}}
                    containerViewStyle={{ flex: 1}}
                    buttonStyle={styles.location}
                    textStyle={{textAlign: 'center'}}
                    title='成都'
                />
                <TextInput
                    style={styles.searchInput}
                    onChangeText={(text) => this.setState({searchText: text})}
                    value={this.state.searchText}
                    placeholder={'搜索'}
                />
            </View>
        );
    }
}


const styles = {
    container: {
        flexDirection: 'row',
    },
    location : {
    },
    searchInput : {
        flex: 2, borderColor: 'gray', borderWidth: 1, borderRadius: 10,
        marginRight: 12,
    },
};