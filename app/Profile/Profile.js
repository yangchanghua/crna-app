import React from 'react';

import {Container,Title, Header, Left, Body, Right, Content, Button, Text, Icon} from 'native-base';

export default class Store extends React.Component {
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
                    <Title>Profile</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Text>Profile</Text>
                </Content>
            </Container>
        );
    };
}
