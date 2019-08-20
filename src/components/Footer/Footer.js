import React from 'react';
import {
    Div,
    Container,
    Row,
    Col,
    Text,
    Anchor
} from 'atomize';

export default function Footer(props) {
    return (
        <Div tag={"section"}
             bg={"brandNavy"}
             h={"10vh"}
             minH={"50px"}>
            <Container h={"100%"}
                       textColor={"white"}
            >
                <Row h={"100%"}>
                    <Col d={"flex"}>
                        <Text textSize={"subheader"}
                              d={"flex"}
                              w={"100%"}
                              align={"center"}
                              justify={"center"}
                        >
                            Made with&nbsp;❤&nbsp;by&nbsp;
                            <Anchor textColor={"white"}
                                    hoverTextColor={"brandTeal"}
                                    href={'https://www.linkedin.com/in/minaiskarous/'}
                                    target={'_blank'}>
                                Mina
                            </Anchor>
                            &nbsp;and&nbsp;
                            <Anchor textColor={"white"}
                                    hoverTextColor={"brandTeal"}
                                    href={'https://www.linkedin.com/in/baileykane/'}
                                    target={'_blank'}>
                                Bailey
                            </Anchor>
                        </Text>
                    </Col>
                </Row>
            </Container>
        </Div>
    )
}