import React from 'react';
import {styles} from './styles';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

const CustomForm = ({status, message, onValidated}) => {
    let email;
    const submit = () =>
        email &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value
        });

    return (
        <div
            style={{
                // background: "#efefef",
                borderRadius: 2,
                padding: 10,
                display: "inline-block"
            }}
        >
            {status === "sending" && <div>Sending...</div>}
            {status === "error" && (
                <div dangerouslySetInnerHTML={{__html: message}}/>
            )}
            {status === "success" && (
                <div dangerouslySetInnerHTML={{__html: message}}/>
            )}
            <input
                ref={node => (email = node)}
                type="email"
                placeholder="Your email"
            />
            <br/><br/>
            <Button onClick={submit}
            style={styles.Button}>
                Sign Up
            </Button>
        </div>
    );
};

export default CustomForm;