import React from 'react';
import {styles} from './styles';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer(props) {
    return (
        <section style={styles.FooterSection}>
            <Container style={styles.Container}>
                <Row style={styles.Row}>
                    <Col>
                        <p style={styles.Text}>
                            Made with&nbsp;❤&nbsp;by&nbsp;
                            <strong>
                                <a style={styles.Link}
                                   href={'https://www.linkedin.com/in/minaiskarous/'}
                                   target={'_blank'}>
                                    Mina
                                </a>
                            </strong>
                            &nbsp;and&nbsp;
                            <strong>
                                <a style={styles.Link}
                                   href={'https://www.linkedin.com/in/baileykane/'}
                                   target={'_blank'}>
                                    Bailey
                                </a>
                            </strong>
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}