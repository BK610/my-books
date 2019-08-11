import React from "react";
import {styles} from './styles';
import SignUpForm from '../SignUpForm/SignUpForm'
import MailchimpSubscribe from 'react-mailchimp-subscribe';
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import {
    Div,
    Row,
    Col
} from 'atomize';
import Logo from '../../lib/img/daily-dad.png';

export default function Home(props) {
    return (
        <Div style={styles.HomeSection}>
            <Jumbotron style={styles.Jumbotron}>
                <Row>
                    <Col xs={12}
                         sm={{span: 8, offset: 2}}
                         lg={{span: 6, offset: 3}}>
                        <img style={styles.Logo}
                             src={Logo}
                             title={'Daily Dad'}
                             alt={'Daily Dad logo'}/>
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
                                <SignUpForm
                                    status={status}
                                    message={message}
                                    onValidated={formData => subscribe(formData)}
                                />
                            )}/>
                    </Col>
                </Row>
            </Jumbotron>
        </Div>
    )
}