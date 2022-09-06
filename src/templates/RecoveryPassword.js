import React from 'react';
import { SubTitle } from '@components/SubTitle';
import { Title } from '@components/Title';
import { PrimaryButton } from '@components/buttons/PrimaryButton';
import {
	LoginComponent,
	FormContainer,
	Logo,
} from '@components/login/LoginComponent';
import styled from 'styled-components';
import Link from 'next/link';

const EmailImage = styled.div`
	width: 132px;
	height: 132px;
	border-radius: 50%;
	background-color: var(--text-input-field);
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 24px;
	place-self: center;
	img {
		width: 80px;
	}
`;

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

const RecoveryPassword = () => {
	return (
		<div>
			<LoginComponent>
				<FormContainer>
					<Logo
						src="./logos/logo_yard_sale.svg"
						alt="logo"
					/>

					<Title>Email has been sent!</Title>
					<SubTitle>
						Please check your inbox for
						instructions on how to reset the
						password
					</SubTitle>

					<EmailImage>
						<picture>
							<img
								src="./icons/email.svg"
								alt="email"
							/>
						</picture>
					</EmailImage>
					<PrimaryButton>Login</PrimaryButton>

					<Resend>
						<span>
							Didn&apos;t receive the
							email?
						</span>
						<Link href="/">Resend</Link>
					</Resend>
				</FormContainer>
			</LoginComponent>
		</div>
	);
};

export { RecoveryPassword };
