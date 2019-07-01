import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import HomeContainer from "./components/Home/index";

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
        </Router>
    );
  }
}

export default App;
