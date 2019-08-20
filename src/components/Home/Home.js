import React from "react";
import SignUpForm from '../SignUpForm/SignUpForm'
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import {
    Div,
    Row,
    Col,
    Image,
    Text
} from 'atomize';
import Logo from '../../lib/img/daily-dad.png';

export default function Home(props) {
    return (
        <Div h="90vh"
             minH="400px"
             p={{
                 y: "2rem",
                 x: "1rem"
             }}>
            <Row>
                <Col size={{
                    xs: 0,
                    sm: 2,
                    lg: 3
                }}
                ></Col>
                <Col size={{
                    xs: 12,
                    sm: 8,
                    lg: 6
                }}
                >
                    <Image maxW="100%"
                           maxH="100vh"
                           src={Logo}
                           title={'Daily Dad'}
                           alt={'Daily Dad logo'}/>
                    <br/>
                    <br/>
                </Col>
            </Row>
            <Row>
                <Col size={{
                    xs: 0,
                    sm: 2,
                    lg: 3
                }}></Col>
                <Col size={{
                    xs: 12,
                    sm: 8,
                    lg: 6
                }}
                >
                    <Text tag="h4"
                          textSize={"heading"}>
                        Think your dad's funny?
                    </Text>
                    <Text tag="p"
                          textSize={"subheader"}
                          textColor={"brandNavy"}>
                        Tell him he has competition.
                    </Text>
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
        </Div>
    )
}