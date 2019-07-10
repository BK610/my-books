import React from 'react';
import Button from 'react-bootstrap/Button';

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
            <Button onClick={submit}>
                Sign Up
            </Button>
        </div>
    );
};

export default CustomForm;