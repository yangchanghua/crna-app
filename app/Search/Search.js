import React from 'react';

import {
    Container, Title, Header, Left, Body, Right, Content, Button, Text, Icon, Item, CardItem,
    Card, ListItem, List, Input
} from 'native-base';


const keys = [
    '火锅',
    '星巴克',
    '牛肉',
    '串串',
    '羊肉汤',
    '重庆小面',
    '绵阳米粉',
];

export default class Search extends React.Component {
    keywords = keys;

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
                        <Header><Title>搜索历史</Title></Header>
                        <Card>
                            <CardItem>
                                <List>
                                    {(this.keywords.map(item =>
                                        <ListItem onPress={() => this.props.navigation.navigate('StoreSearchResult',
                                            {
                                                name: item
                                            })}>
                                            <Text>{item}</Text>
                                        </ListItem>
                                    ))}
                                </List>
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
        );
    };
}
