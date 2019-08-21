import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import HomeContainer from "./components/Home/index";
import FooterContainer from "./components/Footer";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Router>
                    <Route
                        path="/"
                        exact
                        render={(props) => (
                            <HomeContainer {...props}/>
                        )}
                    />
                    <Route
                        path="/"
                        render={(props) => (
                            <FooterContainer {...props}/>
                        )}
                            />
                </Router>
        );
    }
}

export default App;
