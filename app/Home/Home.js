import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import StorePoster from "../components/StorePoster";
import Categories from "../components/Categories";
import {Container, Title, Header, Left, Body, Right, Content, Button, Text, Icon} from 'native-base';
import StoreListBigger from "../components/StoreListBigger";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        const {state} = this.props.navigation;
        state.pramas = {
            currentCity: '成都',
        };
    }

    static navigationOptions = ({navigation}) => {
        if (!navigation.state.params) {
            navigation.state.params = {
                currentCity: '成都',
            }
        }
        return ({
            header: (
                <Header style={{backgroundColor: 'white'}}>
                    <Left>
                        <Button iconRight success
                                onPress={() => navigation.navigate('ChooseCity', {
                                    currentCity: navigation.state.params.currentCity
                                })}>
                            <Text>{navigation.state.params.currentCity}</Text>
                            <Icon name='arrow-down'/>
                        </Button>
                    </Left>
                    <Right>
                        <Button rounded bordered
                                onPress={() => navigation.navigate('Search')}>
                            <Icon name="ios-search"/>
                            <Text>搜索</Text>
                        </Button>
                    </Right>
                </Header>
            )
        });
    }

    render() {
        return (
            <Container>
                <Content>
                    <StorePoster navigation={this.props.navigation}/>
                    <Categories navigation={this.props.navigation}/>
                    <Text style={{fontSize: 12}}>收藏</Text>
                    <StoreListBigger navigation={this.props.navigation}/>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        paddingHorizontal: 5,
    },
});