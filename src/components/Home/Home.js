import React from "react";
import {styles} from './styles.js';
import Button from 'react-bootstrap/Button'
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home(props) {
    return (
        <div>
            <h1>Daily Dad!</h1>
            <p>Coming soon...</p>
            <a href="https://www.producthunt.com/upcoming/daily-dad">
                <Button>
                    Sign Up Here
                </Button>
            </a>
        </div>
    )
}