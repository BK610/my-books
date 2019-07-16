import React from "react";
import {styles} from './styles';
import CustomFormTest from '../SignUpForm/SignUpForm'
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from '../../lib/img/daily-dad.png';
import Jumbotron from "react-bootstrap/Jumbotron";

export default function Home(props) {
    return (
        <section>
            <Jumbotron style={styles.Jumbotron}>
                <Row id={'rowDailyDad'}>
                    <Col xs={1}
                         lg={3}></Col>
                    <Col xs={10}
                         lg={6}>
                        <img style={styles.Logo}
                             src={Logo}
                             title={'Daily Dad'}
                             alt={'fail'}/>
                        <br/>
                        <br/>
                    </Col>
                    <Col xs={1}
                         lg={3}></Col>
                </Row>
                <Row>
                    <Col>
                        <h4>
                            Think your dad's funny?
                        </h4>
                        <p>
                            Tell him he has competition.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <MailchimpSubscribe
                            url={"https://gmail.us3.list-manage.com/subscribe/post?u=abf60d816e2f94114d163a561&amp;id=22d91fe5ec"}
                            render={({subscribe, status, message}) => (
                                <CustomFormTest
                                    status={status}
                                    message={message}
                                    onValidated={formData => subscribe(formData)}
                                />
                            )}/>
                    </Col>
                </Row>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>
            </Jumbotron>
        </section>
    )
}