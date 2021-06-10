import React, { useRef } from "react";
import { LoginPage, Form, InputField, Button } from "./styles";
const Login = ({ setUsername }) => {
    const usernameRef = useRef("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setUsername( usernameRef.current.value );
    };
    return (
        <LoginPage>
            <Form onSubmit={handleSubmit}>
                <InputField
                    required
                    placeholder="Username"
                    type="text"
                    ref={usernameRef}
                ></InputField>
                <Button>Join Chat! </Button>
            </Form>
        </LoginPage>
    );
};
export default Login;
