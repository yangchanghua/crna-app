import React from 'react';

import {
    Item, List, ListItem, Text, Left, Body, Right, Content, Button, Icon, Input, Card,
} from 'native-base';

export default class CityList extends React.Component {

    render () {

        return (
            <List>
                {
                    this.props.cities.map(item => {
                        listItems = [
                            <ListItem itemDivider>
                                <Text>{item.firstChar}</Text>
                            </ListItem>
                        ];

                        cityItems = item.list.map(city => <ListItem onPress={() => this.props.handleClick(city)}>
                            <Text>{city}</Text>
                        </ListItem>);
                        listItems.push(cityItems);
                        return listItems;
                    })
                }
            </List>
        );

    }
}
