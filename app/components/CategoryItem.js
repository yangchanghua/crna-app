import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';

export default class CategoryItem extends Component {

    constructor(prop) {
        super(prop);

    }
    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <Icon reverse name={this.props.icon} type='material-community'/>
                <Text>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = {
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
};