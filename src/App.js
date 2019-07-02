import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import HomeContainer from "./components/Home/index";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Router>
                    <Route
                        path="/"
                        exact
                        render={(props) => (
                            <HomeContainer {...props}/>
                        )}
                    />
                </Router>
            </Container>
        );
    }
}

export default App;
