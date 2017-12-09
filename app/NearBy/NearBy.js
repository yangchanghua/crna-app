import React from 'react';
import {Alert } from 'react-native';
import {Container,Title, Header, Left, Body, Right, Content, Button, Text, Item, Input, Icon} from 'native-base';
import StoreListNav from "../components/StoreListNav";
import StoreListAvatar from "../components/StoreListAvatar";

export default class NearBy extends React.Component {

    handleClickStore(item) {
        this.props.navigation.navigate('Store');
        Alert.alert('item ' + item + ' clicked');
    }

    render() {
        return (
                <Container>
                    <Header>
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.goBack()}>
                                <Icon name="arrow-back" />
                            </Button>
                        </Left>

                        <Body>
                        <Item>
                            <Icon name="ios-search"/>
                            <Input placeholder="搜索附近"/>
                        </Item>
                        </Body>
                        <Right />
                    </Header>
                    <Content>
                        <StoreListNav/>
                        <StoreListAvatar navigation={this.props.navigation}/>
                    </Content>
                </Container>
        );
    };
}

