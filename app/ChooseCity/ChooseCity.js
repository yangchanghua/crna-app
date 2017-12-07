import React from 'react';

import {
    Item, Container, Title, Header, Left, Body, Right, Content, Button, Text, Icon, Input, Card,
    CardItem
} from 'native-base';
import CityGrid from "./CityGrid";
import CityList from "./CityList";

export default class ChooseCity extends React.Component {
    static navigationOptions = ({navigation}) => ({
        header: (
            <Header searchBar rounded>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back"/>
                    </Button>
                </Left>
                <Body>
                <Item>
                    <Icon name="ios-search"/>
                    <Input placeholder="搜索"/>
                </Item>
                </Body>
                <Right/>
            </Header>
        )
    });

    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Text>成都</Text>
                            <Button>
                                <Text style={{fontSize: 10}}>定位</Text>
                                <Icon name='arrow-down'/>
                            </Button>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem header>
                            <Text>去过的城市</Text>
                        </CardItem>
                        <CardItem cardBody>
                            <CityGrid/>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <CityList/>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    };
}
