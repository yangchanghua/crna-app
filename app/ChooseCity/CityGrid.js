import React from 'react';

import {
    Item, Container, Title, Header, Left, Body, Right, Content, Button, Text, Icon, Input, Card,
    CardItem
} from 'native-base';

import {Col, Row, Grid} from "react-native-easy-grid";


export default class CityGrid extends React.Component {
    render() {
        return (
            <Grid>
                <Row style={{marginVertical: 5}}>
                    <Col>
                        <Button><Text>成都</Text></Button>
                    </Col>
                    <Col>
                        <Button><Text>成都</Text></Button>
                    </Col>

                    <Col>
                        <Button><Text>成都</Text></Button>
                    </Col>

                    <Col>
                        <Button><Text>成都</Text></Button>
                    </Col>

                </Row>
                <Row style={{marginVertical: 5}}>
                    <Col>
                        <Button><Text>成都</Text></Button>
                    </Col>

                    <Col>
                        <Button><Text>成都</Text></Button>
                    </Col>

                    <Col>
                        <Button><Text>成都</Text></Button>
                    </Col>

                    <Col>
                        <Button><Text>成都</Text></Button>
                    </Col>

                </Row>
                <Row style={{marginVertical: 5}}>
                    <Col>
                        <Button><Text>成都</Text></Button>
                    </Col>

                    <Col>
                        <Button><Text>成都</Text></Button>
                    </Col>

                    <Col>
                        <Button><Text>成都</Text></Button>
                    </Col>

                    <Col>
                        <Button><Text>成都</Text></Button>
                    </Col>
                </Row>
            </Grid>
        );
    }
}