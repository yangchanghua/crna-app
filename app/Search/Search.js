import React from 'react';

import {
    Container, Title, Header, Left, Body, Right, Content, Button, Text, Icon, Item, CardItem,
    Card, ListItem, List, Input
} from 'native-base';

export default class Search extends React.Component {
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
                                    <ListItem><Text>火锅</Text></ListItem>
                                    <ListItem><Text>火锅</Text></ListItem>
                                    <ListItem><Text>火锅</Text></ListItem>
                                    <ListItem><Text>火锅</Text></ListItem>
                                    <ListItem><Text>火锅</Text></ListItem>
                                    <ListItem><Text>火锅</Text></ListItem>
                                </List>
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
        );
    };
}
