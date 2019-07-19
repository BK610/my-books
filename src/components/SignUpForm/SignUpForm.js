import React from 'react';
import {styles} from './styles';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SignUpForm = ({status, message, onValidated}) => {
    let email;

    const submit = event => {
        event.preventDefault();
        email &&
        onValidated({
            EMAIL: email.value
        });
    };

    return (
        <div>
            <Form onSubmit={submit}>
                <Form.Row>
                    <Col xs={12}
                         sm={{span: 4, offset: 2}}
                         lg={{span: 3, offset: 3}}>
                        <Form.Group controlId="formEmail">
                            <Form.Control
                                style={styles.Input}
                                ref={node => (email = node)}
                                required
                                type="email"
                                name="email"
                                placeholder="Your email here"
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={true}
                         sm={3}>
                        <Button type="submit"
                                style={styles.Button}>
                            Submit
                        </Button>
                    </Col>
                </Form.Row>
                <Row>
                    <Col xs={12}
                         sm={{span: 8, offset: 2}}
                         lg={{span: 6, offset: 3}}>
                        {status === "error" && (
                            <div dangerouslySetInnerHTML={{__html: message}}/>
                        )}
                        {status === "success" && (
                            <div dangerouslySetInnerHTML={{__html: message}}/>
                        )}
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default SignUpForm;