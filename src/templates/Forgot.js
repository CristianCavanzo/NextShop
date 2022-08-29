import React from 'react';
import { Input } from '@components/Input';
import { SubTitle } from '@components/SubTitle';
import { Title } from '@components/Title';
import { Label } from '@components/Label';
import { PrimaryButton } from '@components/buttons/PrimaryButton';
import {
    LoginComponent,
    FormContainer,
    Logo,
    Form,
} from '@components/login/LoginComponent';

const Forgot = () => {
    return (
        <LoginComponent>
            <FormContainer>
                <Logo src="./logos/logo_yard_sale.svg" alt="logo" />

                <Title className="title">Create a new password</Title>
                <SubTitle className="subtitle">
                    Enter a new passwrd for yue account
                </SubTitle>

                <Form action="/">
                    <Label htmlFor="password" className="label">
                        Password
                    </Label>
                    <Input
                        type="password"
                        id="password"
                        placeholder="*********"
                    />

                    <Label htmlFor="new-password" className="label">
                        Password
                    </Label>
                    <Input
                        type="password"
                        id="new-password"
                        placeholder="*********"
                    />

                    <PrimaryButton isInput={true}>Confirm</PrimaryButton>
                </Form>
            </FormContainer>
        </LoginComponent>
    );
};

export { Forgot };
