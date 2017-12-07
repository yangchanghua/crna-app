import React from 'react';

import {
    Item, Container, Title, Header, Left, Body, Right, Content, Button, Text, Icon, Input, Card,
    CardItem
} from 'native-base';

import {Col, Row, Grid} from "react-native-easy-grid";

export default class StoreListNav extends React.Component {
    render() {
        return (
            <Grid>
                <Row style={{marginVertical: 5}}>
                    <Col>
                        <Button transparent>
                            <Text>美食</Text>
                            <Icon name='arrow-down'/>
                        </Button>
                    </Col>

                    <Col>
                        <Button transparent>
                            <Text>商圈</Text>
                            <Icon name='arrow-down'/>
                        </Button>
                    </Col>
                </Row>
            </Grid>
        );
    }
}