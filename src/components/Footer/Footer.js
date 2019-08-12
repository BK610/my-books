import React from 'react';
import {styles} from './styles';
import {
    Container,
    Row,
    Col,
    Text,
    Anchor
} from 'atomize';

export default function Footer(props) {
    return (
        <section style={styles.FooterSection}>
            <Container h={"100%"}
                // minH={"50px"}
                //        textColor={"white"}
            >
                <Row h={"100%"}>
                    <Col>
                        <Text textSize={"body"}
                              pos={"absolute"}
                              top={"50%"}
                              left={"50%"}
                              transform={"translate(-50%, -50%)"}
                        >
                            Made with&nbsp;❤&nbsp;by&nbsp;
                            <Anchor textColor={"white"}
                                    hoverTextColor={"white"}
                                    href={'https://www.linkedin.com/in/minaiskarous/'}
                                    target={'_blank'}>
                                Mina
                            </Anchor>
                            &nbsp;and&nbsp;
                            <Anchor textColor={"white"}
                                    hoverTextColor={"white"}
                                    href={'https://www.linkedin.com/in/baileykane/'}
                                    target={'_blank'}>
                                Bailey
                            </Anchor>
                        </Text>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}