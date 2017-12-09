import React from 'react';

import {Container,Title, Header, Left, Body, Right, Content, Button, Text, Icon,
    Card, CardItem
} from 'native-base';
import {Image} from "react-native";

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
                <Title>{navigation.state.params.store.name}</Title>
                </Body>
                <Right />
            </Header>
        )
    });

    handlePayClick(store) {
        this.props.navigation.navigate('Pay', {
            store: store,
        });
    }

    render() {
        const {state} = this.props.navigation;
        return (
                <Container>
                    <Content>
                            <Card style={{flex: 0}}>
                                <CardItem cardBody button onPress={() => this.props.navigation.navigate('Store')}>
                                    <Image source={require('../images/store_1.png')}
                                           style={{height: 120, width: null, flex: 1}}/>
                                </CardItem>
                                <CardItem>
                                    <Body>
                                    <Text>商家信息</Text>
                                    <Text>营业时间</Text>
                                    <Text>10:00 - 22:00</Text>
                                    <Text>电话</Text>
                                    <Text>028-76662334</Text>
                                    </Body>

                                    <Right>
                                        <Button info onPress={() => this.handlePayClick(state.params.store)} style={{width: 100}}>
                                            <Text>{state.params.store.discount} 折买单</Text>
                                        </Button>
                                    </Right>
                                </CardItem>
                            </Card>
                    </Content>
                </Container>
        );
    };
}
