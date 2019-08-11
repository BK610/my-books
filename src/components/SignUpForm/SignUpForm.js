import React from 'react';
import {styles} from './styles';
import {
    Button,
    Input,
    Icon,
    Row,
    Col
} from 'atomize';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const SignUpForm = ({status, message, onValidated}) => {
    let email;

    const submit = event => {
        event.preventDefault();
        email &&
        onValidated({
            EMAIL: email
        });
        console.log(email);
    };

    const handleEmail = event => {
        email = event.target.value;
    };

    return (
        <div>
            <form onSubmit={submit}>
                <Row>
                    <Col size={{
                        xs: 0,
                        sm: 2,
                        lg: 3
                    }}
                    ></Col>
                    <Col size={{
                        xs: 12,
                        sm: 4,
                        lg: 3
                    }}
                    >
                        <Input
                            bg="inputGray"
                            shadow="2"
                            focusShadow="3"
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleEmail}
                            placeholder="Your email here"
                            suffix={
                                <Icon
                                    name="RightArrow"
                                    pos="absolute"
                                    right="1rem"
                                    top="50%"
                                    transform="translateY(-50%)"
                                />
                            }
                        />
                    </Col>
                    <Col size={{
                        xs: 12,
                        sm: 3
                    }}
                    >
                        <Button
                            bg="brandTeal"
                            shadow="2"
                            hoverShadow="3"
                        >
                            Submit
                        </Button>
                    </Col>
                </Row>
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
                        {status === "error" && (
                            <div dangerouslySetInnerHTML={{__html: message}}/>
                        )}
                        {status === "success" && (
                            <div dangerouslySetInnerHTML={{__html: message}}/>
                        )}
                    </Col>
                </Row>
            </form>
        </div>
    );
};

export default SignUpForm;