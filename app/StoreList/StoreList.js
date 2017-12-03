import React from 'react';

import {Container,Title, Header, Left, Body, Right, Content, Button, Text, Icon} from 'native-base';

export default class StoreList extends React.Component {
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
                        <Title>Store List</Title>
                        </Body>
                        <Right />
                    </Header>
                    <Content>
                        <Text>Store List</Text>
                    </Content>
                </Container>
        );
    };
}