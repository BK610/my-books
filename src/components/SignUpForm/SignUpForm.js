import React from 'react';
import {
    Button,
    Input,
    Icon,
    Row,
    Col,
    Text
} from 'atomize';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);

        this.state = {
            email: ""
        };

        this.submit = this.submit.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
    }

    submit = event => {
        event.preventDefault();
        this.state.email &&
        this.props.onValidated({
            EMAIL: this.state.email
        });
        console.log(this.state.email);
    };

    handleEmail = event => {
        this.setState({email: event.target.value})
    };

    render() {

        return (
            <div>
                <form onSubmit={this.submit}>
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
                                hoverShadow="3"
                                focusShadow="3"
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleEmail}
                                placeholder="Your email here"
                                textColor={"brandNavy"}
                                suffix={
                                    <Icon
                                        name="RightArrow"
                                        color={"brandNavy"}
                                        pos="absolute"
                                        right="1rem"
                                        top="50%"
                                        transform="translateY(-50%)"
                                        cursor={"pointer"}
                                        onClick={this.submit}
                                    />
                                }
                            />
                        </Col>
                        <Col size={{
                            xs: 12,
                            sm: 3
                        }}
                        >
                            {/*<Button*/}
                            {/*    bg="brandTeal"*/}
                            {/*    hoverBg="brandTeal"*/}
                            {/*    shadow="2"*/}
                            {/*    hoverShadow="3"*/}
                            {/*    rounded="circle"*/}
                            {/*    m={{r: "1rem"}}*/}
                            {/*    h={"2.5rem"}*/}
                            {/*    w={"2.5rem"}*/}
                            {/*>*/}
                            {/*    <Icon name={"Email"}*/}
                            {/*    color={"white"}/>*/}
                            {/*    /!*<Text style={{fontSize: "16px"}}>*!/*/}
                            {/*    /!*    Submit*!/*/}
                            {/*    /!*</Text>*!/*/}
                            {/*</Button>*/}
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
                            <br/>
                            {this.props.status === "error" && (
                                <div dangerouslySetInnerHTML={{__html: this.props.message}}/>
                            )}
                            {this.props.status === "success" && (
                                <div dangerouslySetInnerHTML={{__html: this.props.message}}/>
                            )}
                        </Col>
                    </Row>
                </form>
            </div>
        );
    }
};

export default SignUpForm;