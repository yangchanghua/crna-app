import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import StorePoster from "../components/StorePoster";
import Categories from "../components/Categories";
import StoreList from "../components/StoreListAvatar";
import {Container,Title, Header, Left, Body, Right, Content, Button, Text, Icon} from 'native-base';

export default class Home extends React.Component {
    render() {
        return (
                <Container>
                    <Header style={{backgroundColor: 'white'}}>
                        <Left>
                            <Button iconRight success
                                    onPress={()=> this.props.navigation.navigate('ChooseCity')}>
                                <Text>成都</Text>
                                <Icon name='arrow-down'/>
                            </Button>
                        </Left>

                        <Right>
                            <Button rounded bordered
                                    onPress={() => this.props.navigation.navigate('Search')}>
                                <Icon name="ios-search"/>
                                <Text>搜索</Text>
                            </Button>
                        </Right>
                    </Header>
                    <Content>
                        <StorePoster />
                        <Categories/>
                        <Text style={{fontSize: 12}}>收藏</Text>
                        <ScrollView>
                            <StoreList/>
                        </ScrollView>
                    </Content>
                </Container>
        );
    };
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        paddingHorizontal: 5,
    },
});