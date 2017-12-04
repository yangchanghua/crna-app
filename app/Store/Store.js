import React from 'react';

import {Container,Title, Header, Left, Body, Right, Content, Button, Text, Icon} from 'native-base';

export default class Store extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                <Title>店铺</Title>
                </Body>
                <Right />
            </Header>
        )
    });

    render() {
        return (
                <Container>
                    <Content>
                        <Text>Store</Text>
                    </Content>
                </Container>
        );
    };
}
