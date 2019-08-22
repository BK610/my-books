import React from "react";
import {Link} from 'react-router-dom';
import {
    Div,
    Container,
    Row,
    Col,
    Text,
    Anchor
} from 'atomize';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            //TODO: These links make no sense. Decide what they should actually be
            <Div
                p={{
                    y: "1rem"
                }}
            >
                <Container>
                    <Row
                        fontFamily={"secondary"}
                    >
                        <Col>
                            <Link
                                to={"/mybooks"}
                            >
                                <Text
                                    textColor={"brandDark"}
                                    hoverTextColor={"brandDarkAccent"}
                                    textSize={"title"}
                                    textAlign={"left"}
                                >
                                    My Books
                                </Text>
                            </Link>
                        </Col>
                        <Col>
                            <Link
                                to={"/favorites"}
                            >
                                <Text
                                    textColor={"brandDark"}
                                    hoverTextColor={"brandDarkAccent"}
                                    textSize={"title"}
                                    textAlign={"center"}
                                >
                                    Favorites
                                </Text>
                            </Link>
                        </Col>
                        <Col>
                            <Link
                                to={"/random"}
                            >
                                <Text
                                    textColor={"brandDark"}
                                    hoverTextColor={"brandDarkAccent"}
                                    textSize={"title"}
                                    textAlign={"right"}
                                >
                                    Random Book
                                </Text>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Div>
        )
    }
}