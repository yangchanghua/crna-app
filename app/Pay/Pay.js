import React from 'react';

import {Container,Title, Header, Left, Body, Right, Content, Button, Text, Icon} from 'native-base';

export default class Pay extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                <Title>优惠买单</Title>
                </Body>
                <Right />
            </Header>
        )
    });

    render() {
        return (
                <Container>
                    <Content>
                        <Text>支付</Text>
                    </Content>
                </Container>
        );
    };
}
