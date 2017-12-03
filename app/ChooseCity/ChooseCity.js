import React from 'react';

import {Container,Title, Header, Left, Body, Right, Content, Button, Text, Icon} from 'native-base';

export default class ChooseCity extends React.Component {
    static navigationOptions = {
        title: '选择城市',
    }
    render() {
        return (
                <Container>
                    <Header>
                        <Left/>
                        <Body>
                        {/*<Title>ChooseCity</Title>*/}
                        </Body>
                        <Right />
                    </Header>
                    <Content>
                        <Text>City</Text>
                    </Content>
                </Container>
        );
    };
}
