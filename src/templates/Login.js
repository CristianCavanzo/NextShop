import React, { useRef } from 'react';
import { Input } from '@components/Input';
import { Label } from '@components/Label';
import { PrimaryButton } from '@components/buttons/PrimaryButton';
import {
    LoginComponent,
    FormContainer,
    Form,
} from '@components/login/LoginComponent';
import styled from 'styled-components';
import { Header } from '@components/Header';
import { expressions, validInput } from '../helpers/validInput';
import { useNavigate, Link } from 'react-router-dom';

const Resend = styled.p`
    font-size: var(--sm);
    text-align: center;
    span {
        color: var(--very-light-pink);
    }
    a {
        color: var(--hospital-green);
        text-decoration: none;
    }
`;

const Container = styled.div`
    display: grid;
`;

const Login = () => {
    let [state, setState] = React.useState({
        email: '',
        password: '',
        invalidEmail: false,
        invalidPassword: false,
    });
    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('password'),
        };
        console.log(data);
    };

    let navigate = useNavigate();

    let onWriteEmail = (value) => {
        setState({ ...state, email: value, invalidEmail: false });
    };

    let onWritePassword = (password) => {
        setState({ ...state, password: password, invalidPassword: false });
    };

    const login = () => {
        let isValid = validInput(state.email, expressions.validEmail);
        let password = state.password;
        if (!isValid) {
            setState({ ...state, invalidEmail: !isValid });
        } else if (password.length < 8) {
            setState({ ...state, invalidPassword: true });
        } else {
            // return navigate('/');
        }
    };
    return [
        <Header key="header" />,
        <LoginComponent key="login">
            <FormContainer>
                <Form action="/" ref={form}>
                    <Container>
                        <Label
                            htmlFor="email"
                            color={state.invalidEmail ? '#d25050' : undefined}
                        >
                            Email address
                        </Label>
                        <Input
                            type="text"
                            name="email"
                            placeholder="platzi@example.cm"
                            onKeyUp={({ target: { value } }) =>
                                onWriteEmail(value)
                            }
                            border={state.invalidEmail && '1px solid #d25050'}
                            background_color={state.invalidEmail && '#fff9f9'}
                        />

                        <Label
                            htmlFor="password"
                            className="label"
                            color={
                                state.invalidPassword ? '#d25050' : undefined
                            }
                        >
                            Password
                        </Label>
                        <Input
                            type="password"
                            name="password"
                            placeholder="*********"
                            onKeyUp={({ target: { value } }) =>
                                onWritePassword(value)
                            }
                            border={
                                state.invalidPassword && '1px solid #d25050'
                            }
                            background_color={
                                state.invalidPassword && '#fff9f9'
                            }
                        />
                    </Container>
                    <PrimaryButton
                        isInput={false}
                        // onClick={login}
                        onClick={handleSubmit}
                    >
                        Log in
                    </PrimaryButton>

                    <Resend>
                        <a href="/">Forgot my password</a>
                    </Resend>

                    <Link to="/register">
                        <PrimaryButton
                            isInput={true}
                            background="transparent"
                            color="var(--hospital-green)"
                            border="2px solid var(--hospital-green)"
                        >
                            Sign up
                        </PrimaryButton>
                    </Link>
                </Form>
            </FormContainer>
        </LoginComponent>,
    ];
};

export { Login };
