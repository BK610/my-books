import React from "react";
import {
    Div,
    Container,
    Row,
    Col
} from 'atomize';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import SideBarContainer from '../SideBar';

export default function Main(props) {
    return (
        //TODO: This should not be what the different things are.
        // Each Route should be actually different functionality.
        // Currently, it's just different searches.
        <Div>
            <Container>
                <Row>
                    <Col>
                        <Route
                            path={'/mybooks'}
                            exact
                            render={(props) => (
                                <SideBarContainer {...props}/>
                            )}
                        />
                    </Col>
                    <Route
                        path={'/favorites'}
                        exact
                    />
                    <Route
                        path={'/toread'}
                        exact
                    />
                </Row>
            </Container>
        </Div>
    )
}