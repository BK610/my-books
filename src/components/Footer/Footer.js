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
             bg={"brandMain"}
             h={"5vh"}
             minH={"50px"}>
            <Container h={"100%"}
                       textColor={"brandLight"}
            >
                <Row h={"100%"}>
                    <Col d={"flex"}>
                        <Text textSize={"subheader"}
                              fontFamily={"secondary"}
                              d={"flex"}
                              w={"100%"}
                              align={"center"}
                              justify={"center"}
                        >
                            Made with&nbsp;❤&nbsp;by&nbsp;
                            <Anchor textColor={"brandLight"}
                                    hoverTextColor={"brandDarkAccent"}
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