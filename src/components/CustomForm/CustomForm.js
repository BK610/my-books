import React from 'react';
import Button from 'react-bootstrap/Button';

const CustomForm = ({ status, message, onValidated }) => {
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
                background: "#efefef",
                borderRadius: 2,
                padding: 10,
                display: "inline-block"
            }}
        >
            {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
            {status === "error" && (
                <div
                    style={{ color: "red" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    style={{ color: "green" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            <input
                ref={node => (email = node)}
                type="email"
                placeholder="Your email"
            />
            <Button onClick={submit}>
                Sign Up
            </Button>
        </div>
    );
};

export default CustomForm;