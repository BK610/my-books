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

            <form className="form-inline validate"
                  action="http://eepurl.com/gwGhkT"
                  method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank"
                  noValidate>
                <p className="self-align-center pt-3 ml-5" style={{color:"#ffffff"}}>Sign up for our newsletter!</p>
                <input className="form-control ml-5 email rounded-0" id="mce-EMAIL" type="email"
                       placeholder="Enter your email here" value="" name="EMAIL" required=""/>
                    <div className="clear">
                        <button id="mc-embedded-subscribe" className="btn subscribe rounded-0" type="submit"
                                value="Subscribe" name="subscribe">Submit
                        </button>
                    </div>
            </form>
        </div>
    )
}