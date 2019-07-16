import React from 'react';
import {styles} from './styles';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SignUpForm = ({status, message, onValidated}) => {
    let email;
    const submit = () =>
        email &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value
        });

    return (
        <div>
            {status === "sending" && <div>Sending...</div>}
            {status === "error" && (
                <div dangerouslySetInnerHTML={{__html: message}}/>
            )}
            {status === "success" && (
                <div dangerouslySetInnerHTML={{__html: message}}/>
            )}
            <Form>
                <Row>
                    <Col xs={12}
                         sm={{span: 4, offset: 2}}
                         lg={{span: 3, offset: 3}}>
                        <Form.Group controlId="formEmail">
                            <Form.Control
                                ref={node => (email = node)}
                                type="email"
                                placeholder="Sign up here"
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={true}
                         sm={3}>
                        <Button onClick={submit}
                                style={styles.Button}>
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default SignUpForm;