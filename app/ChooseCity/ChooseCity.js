import React from 'react';

import {Container,Title, Header, Left, Body, Right, Content, Button, Text, Icon} from 'native-base';

export default class ChooseCity extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                <Title>选择城市</Title>
                </Body>
                <Right />
            </Header>
        )
    });
    render() {
        return (
                <Container>
                    <Content>
                        <Text>City</Text>
                    </Content>
                </Container>
        );
    };
}
