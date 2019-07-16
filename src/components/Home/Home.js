import React from "react";
import {styles} from './styles.js';
import CustomForm from '../CustomForm/CustomForm';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from '../../lib/img/daily-dad.png';
import Jumbotron from "react-bootstrap/Jumbotron";

export default function Home(props) {
    return (
        <section>
            <Jumbotron>
                Big Jumbo
            </Jumbotron>
            <Row id={'rowDailyDad'}>
                <Col></Col>
                <Col>
                    <img style={{textAlign: 'center'}}
                         src={Logo}
                         alt={'fail'}
                         height={'103px'}
                         width={'400px'}/>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <MailchimpSubscribe
                        url={"https://gmail.us3.list-manage.com/subscribe/post?u=abf60d816e2f94114d163a561&amp;id=22d91fe5ec"}
                        render={({subscribe, status, message}) => (
                            <CustomForm
                                status={status}
                                message={message}
                                onValidated={formData => subscribe(formData)}
                            />
                        )}/>
                </Col>
                <Col></Col>
            </Row>
        </section>
    )
}