import React from 'react';

import {
    Container, Title, Header, Left, Body, Right, Content, Button, Text, Icon,
    Card, CardItem
} from 'native-base';
import {Image} from "react-native";


const products = [
    {
        img: require('../images/menu1.jpeg'),
        desc: '香辣锅底'
    },
    {
        img: require('../images/menu2.jpeg'),
        desc: '香辣锅底'
    },
    {
        img: require('../images/menu3.jpeg'),
        desc: '香辣锅底'
    },
    {
        img: require('../images/menu4.jpeg'),
        desc: '香辣锅底'
    },
]

export default class Store extends React.Component {
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
                            <Button info onPress={() => this.handlePayClick(state.params.store)}
                                    style={{width: 100}}>
                                <Text>{state.params.store.discount} 折买单</Text>
                            </Button>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem header>
                            <Text>商家信息</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text>营业时间</Text>
                            <Text>10:00 - 22:00</Text>
                            <Text>电话</Text>
                            <Text>028-76662334</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    {
                        products.map((item) => (
                            <Card style={{flex: 0}}>
                                <CardItem>
                                    <Image source={item.img} style={{height: 80, width: null, flex: 1}}/>
                                </CardItem>
                            </Card>
                        ))
                    }
                </Content>
            </Container>
        );
    };
}
