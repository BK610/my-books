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
                       //minH={"50px"}
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
        </section>
    )
}