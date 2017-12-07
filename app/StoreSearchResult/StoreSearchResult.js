import React from 'react';

import {Container, Title, Header, Left, Body, Right, Content, Button, Text, Icon, Item, Input} from 'native-base';
import StoreListNav from '../components/StoreListNav';
import StoreListAvatar from "../components/StoreListAvatar";

export default class StoreList extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>

                <Body>
                <Item>
                    <Icon name="ios-search"/>
                    <Input placeholder="搜索商家"/>
                </Item>
                </Body>
                <Right />
            </Header>
        )
    });

    render() {
        return (
            <Container>
                <Content>
                    <StoreListNav/>
                    <StoreListAvatar/>
                </Content>
            </Container>
        );
    };
}