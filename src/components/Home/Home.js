import React from "react";
import {styles} from './styles.js';
import Button from 'react-bootstrap/Button';
import CustomForm from '../CustomForm/CustomForm';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home(props) {
    return (
        <Row>
            <h1>
                Daily Dad!
            </h1>
            <p>
                Coming soon...
            </p>
            <MailchimpSubscribe url={"https://gmail.us3.list-manage.com/subscribe/post?u=abf60d816e2f94114d163a561&amp;id=22d91fe5ec"}
                                render={({subscribe, status, message}) => (
                                    <CustomForm
                                        status={status}
                                        message={message}
                                        onValidated={formData => subscribe(formData)}
                                    />
                                )}/>
        </Row>
    )
}