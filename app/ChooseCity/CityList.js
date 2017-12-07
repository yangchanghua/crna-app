import React from 'react';

import {
    Item, List, ListItem, Text, Left, Body, Right, Content, Button, Icon, Input, Card,
} from 'native-base';

export default class CityList extends React.Component {
    render () {
        return (
            <List>
                <ListItem itemDivider>
                    <Text>A</Text>
                </ListItem>
                <ListItem >
                    <Text>阿坝</Text>
                </ListItem>
                <ListItem itemDivider>
                    <Text>B</Text>
                </ListItem>
                <ListItem>
                    <Text>北京</Text>
                </ListItem>
                <ListItem>
                    <Text>北海</Text>
                </ListItem>
                <ListItem>
                    <Text>百色</Text>
                </ListItem>
            </List>
        );

    }
}
