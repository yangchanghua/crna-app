import React from 'react';

import {
    Container, Title, Header, Left, Body, Right, Content, Button, Text, Icon, Form, Item, Label,
    Input, Card, CardItem
} from 'native-base';
import {Grid, Row, Column} from "react-native-easy-grid";
import {Alert} from "react-native";

function handlePayClick() {
    Alert.alert('打开支付宝支付！功能未实现');
}

export default class Pay extends React.Component {

    static navigationOptions = ({navigation}) => ({
        header: (
            <Header>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back"/>
                    </Button>
                </Left>
                <Body>
                <Title>{navigation.state.params.store.name}</Title>
                </Body>
                <Right/>
            </Header>
        )
    });

    render() {
        const {state} = this.props.navigation;
        return (
            <Container>
                <Content>
                    <Text>{state.params.store.addr}</Text>
                    <Form>
                        <Item floatingLabel>
                            <Label>消费总额</Label>
                            <Input/>
                        </Item>

                        <Item floatingLabel>
                            <Label>不参与优惠总额</Label>
                            <Input/>
                        </Item>

                        <Item style={{
                            justifyContent: 'space-between',
                            height: 40,
                            fontSize: 14
                        }}>
                            <Text>{state.params.store.discount} 折</Text>
                            <Text>23 元</Text>
                        </Item>
                        <Item style={{
                            justifyContent: 'space-between',
                            height: 40,
                            fontSize: 14
                        }}>
                            <Text>实付总额</Text>
                            <Text>89 元</Text>
                        </Item>
                        <Item style={{justifyContent: 'center'}}>
                            <Button warning big onPress={() => handlePayClick()}>
                                <Text style={{fontSize: 18}}>89 元 确认买单</Text>
                            </Button>
                        </Item>
                    </Form>
                </Content>
            </Container>
        );
    };
}
