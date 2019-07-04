import React from "react";
import Home from "./Home";

export default class HomeContainer extends React.Component {
    constructor(props) {
        super(props);

        handleSignupInput: this.handleSignupInput.bind(this);
    }

    //TODO: Very broken. actually implement
    handleSignupInput() {
        console.log("editing input");
    }

    render() {
        const handlers = {
            handleSignupInput: this.handleSignupInput
        };

        return <Home/>;
    }
}