import React from "react";
import {
    Div,
    Container
} from 'atomize';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default function Main(props) {
    return (
        //TODO: This should not be what the different things are.
        // Each Route should be actually different functionality.
        // Currently, it's just different searches.
        <Div>
            <Container>
                <Route
                    path={'/mybooks'}
                    exact
                />
                <Route
                    path={'/favorites'}
                    exact
                />
                <Route
                    path={'/toread'}
                    exact
                />
            </Container>
        </Div>
    )
}