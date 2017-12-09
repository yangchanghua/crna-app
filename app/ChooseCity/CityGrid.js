import React from 'react';
import {StyleSheet} from 'react-native';
import {
    Item, Container, Title, Header, Left, Body, Right, Content, Button, Text, Icon, Input, Card,
    CardItem, List, ListItem
} from 'native-base';

import {Col, Row, Grid} from "react-native-easy-grid";



export default class CityGrid extends React.Component {

    render() {
        return (
            <List dataArray={this.props.visitedCities} style={styles.list}
            renderRow={(item) =>
                <ListItem onPress={() => this.props.handleStoreClick(item)} style={styles.item}>
                    <Text>{item}</Text>
                </ListItem>
            }>
            </List>
        );
    }
}
var styles = StyleSheet.create({
    list: {
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    item: {
        margin: 3,
        width: 100
    }
});