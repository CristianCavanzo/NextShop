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
} from '@components/login/LoginComponent';
import styled from 'styled-components';

const Resend = styled.p`
    font-size: var(--sm);
    text-align: center;
    column-gap: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
        color: var(--very-light-pink);
    }
    a {
        color: var(--hospital-green);
        text-decoration: none;
    }
`;

const EmailRecovery = () => {
    return (
        <div>
            <LoginComponent>
                <FormContainer>
                    <Logo src="./logos/logo_yard_sale.svg" alt="logo" />

                    <Title>Password recovery</Title>
                    <SubTitle>
                        Inform the email adress used to create your account
                    </SubTitle>
                    <Label htmlFor="email">Email address</Label>
                    <Input id="email" placeholder="example@email.com" />

                    <PrimaryButton>Submit</PrimaryButton>

                    <Resend>
                        <a href="/">Back to log in</a>
                    </Resend>
                </FormContainer>
            </LoginComponent>
        </div>
    );
};

export { EmailRecovery };
