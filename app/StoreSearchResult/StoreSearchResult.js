import React from 'react';

import {Container, Title, Header, Left, Body, Right, Content, Button, Text, Icon, Item, Input} from 'native-base';
import StoreListNav from '../components/StoreListNav';
import StoreListBigger from "../components/StoreListBigger";

export default class StoreSearchResult extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>

                <Body>
                <Item onPress={() => navigation.navigate('Search', {
                    keyword: navigation.state.params ? navigation.state.params.name : ''
                })}>
                    <Icon name="ios-search"/>
                    <Text>{navigation.state.params ? navigation.state.params.name : '搜索商家'}</Text>
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
                    <StoreListBigger navigation={this.props.navigation}/>
                </Content>
            </Container>
        );
    };
}