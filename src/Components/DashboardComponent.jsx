import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'flowbite-react';

const DashboardComponent = () => {
    return (
        <Container>
            <Row>
                <Col md={6} lg={4}>
                    <Card>
                        <CardHeader>
                            <h3>Card 1</h3>
                        </CardHeader>
                        <CardBody>
                            <p>This is the content of card 1</p>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card>
                        <CardHeader>
                            <h3>Card 2</h3>
                        </CardHeader>
                        <CardBody>
                            <p>This is the content of card 2</p>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card>
                        <CardHeader>
                            <h3>Card 3</h3>
                        </CardHeader>
                        <CardBody>
                            <p>This is the content of card 3</p>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default DashboardComponent;
