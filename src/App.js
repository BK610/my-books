import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import GoogleBooksService from './services/GoogleBooksService';
import NavBarContainer from "./components/NavBar/index";
import MainContainer from "./components/Main";
import FooterContainer from "./components/Footer";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.googleBooksService = GoogleBooksService.getInstance();
    }

    render() {
        return (
                <Router>
                    <Route
                        path="/"
                        render={(props) => (
                            <NavBarContainer {...props}/>
                        )}
                    />
                    <Route
                        path={"/"}
                        render={(props) => (
                            <MainContainer {...props}/>
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
