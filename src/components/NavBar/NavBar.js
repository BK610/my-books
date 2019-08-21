import React from "react";
import {
    Div,
    Container,
    Row,
    Col,
    Text,
    Anchor
} from 'atomize';

export default function NavBar(props) {
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
                        <Anchor textColor={"brandDark"}
                                hoverTextColor={"brandDarkAccent"}>
                            <Text
                                textSize={"title"}
                                textAlign={"left"}
                            >
                                My Books
                            </Text>
                        </Anchor>
                    </Col>
                    <Col>
                        <Anchor textColor={"brandDark"}
                                hoverTextColor={"brandDarkAccent"}>
                            <Text
                                textSize={"title"}
                                textAlign={"center"}
                            >
                                Favorites
                            </Text>
                        </Anchor>
                    </Col>
                    <Col>
                        <Anchor textColor={"brandDark"}
                                hoverTextColor={"brandDarkAccent"}>
                            <Text
                                textSize={"title"}
                                textAlign={"right"}
                            >
                                To Read
                            </Text>
                        </Anchor>
                    </Col>
                </Row>
            </Container>
        </Div>
    )
}