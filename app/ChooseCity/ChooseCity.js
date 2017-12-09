import React from 'react';

import {
    Item, Container, Title, Header, Left, Body, Right, Content, Button, Text, Icon, Input, Card,
    CardItem, List, ListItem
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

    constructor(props) {
        super(props);

        this.state = {
            currentCity: '成都',
        }
    }

    handleCityClick(item) {
        this.setState((prevState) => {
            return {currentCity: item};
        })
    }

    render() {
        var visitedCities = [
            '成都',
            '重庆',
            '北京',
            '昌吉',
            '上海',
            '广州',
            '三亚',
            '桂林',
        ];

        var cities = [
            {
                firstChar: 'A',
                list: ['阿坝', '安德'],
            },
            {
                firstChar: 'B',
                list: ['北京', '北海', '宝鸡', '保定' ],
            },

            {
                firstChar: 'C',
                list: ['昌吉', '重庆', '成都', '长安', ],
            },

            {
                firstChar: 'D',
                list: ['东京', '大连', '德阳', '东莞', ],
            },

        ];

        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Text>{this.state.currentCity}</Text>
                            <Button>
                                <Text style={{fontSize: 10}}>定位</Text>
                                <Icon name='arrow-down'/>
                            </Button>
                        </CardItem>
                    </Card>

                    <Text>去过的城市</Text>

                    <CityGrid visitedCities={visitedCities} handleClick={this.handleCityClick.bind(this)}/>

                    <Card>
                        <CardItem>
                            <CityList cities={cities} handleClick={this.handleCityClick.bind(this)}/>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    };
}
