import React, {useContext} from 'react';
import {Context} from '../../context/ContextProvider';
import {LoginPage, Form, InputField, Button} from './styles';
const Login = () => {
    const {usernameRef, setUsername} = useContext(Context);
    const handleSubmit = (e) => {
        e.preventDefault();
        setUsername(usernameRef.current.value);
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
