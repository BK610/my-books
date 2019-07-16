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
                <Row>
                    <Col xs={12}
                         sm={{span: 8, offset: 2}}
                         lg={{span: 6, offset: 3}}>
                        <img style={styles.Logo}
                             src={Logo}
                             title={'Daily Dad'}
                             alt={'fail'}/>
                        <br/>
                        <br/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}
                         sm={{span: 8, offset: 2}}
                         lg={{span: 6, offset: 3}}>
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
            </Jumbotron>
        </section>
    )
}