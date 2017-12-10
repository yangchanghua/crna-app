import React from 'react';

import {
    Container, Title, Header, Left, Body, Right, Content, Button, Text, Icon,
    List, ListItem, Switch
} from 'native-base';

export default class Store extends React.Component {

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back"/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>我的</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <List>
                        <ListItem icon>
                            <Left>
                            </Left>
                            <Body>
                            <Text>我的订单</Text>
                            </Body>
                            <Right>
                                <Icon name="arrow-forward"/>
                            </Right>
                        </ListItem>

                        <ListItem icon>
                            <Left>
                            </Left>
                            <Body>
                            <Text>联系客服</Text>
                            </Body>
                            <Right>
                                <Icon name="arrow-forward"/>
                            </Right>
                        </ListItem>

                        <ListItem icon>
                            <Left>
                            </Left>
                            <Body>
                            <Text>设置</Text>
                            </Body>
                            <Right>
                                <Icon name="arrow-forward"/>
                            </Right>
                        </ListItem>
                    </List>

                    <Text style={{marginTop: 20}}>
                        未实现界面：1）商圈，分类下拉选择 2）搜索 3）商家信息：产品目录
                    </Text>
                </Content>
            </Container>
        );
    };
}
