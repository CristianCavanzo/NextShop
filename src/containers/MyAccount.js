import React from 'react';
import { Input } from '@components/Input';
import { TitleComponent } from '@components/Title';
import { Label } from '@components/Label';
import { PrimaryButton } from '@components/buttons/PrimaryButton';
import {
	LoginComponent,
	FormContainer,
	Logo,
	Form,
} from '@components/login/LoginComponent';
import styled from 'styled-components';

const TitleLeft = styled(TitleComponent)`
	justify-self: flex-start;
	text-align: left;
`;

const MyAccount = ({ isEditing, children, changeText }) => {
	let [state, setState] = React.useState({
		isEditing,
		background: 'transparent',
		color: 'var(--hospital-green)',
		changeDetected: false,
	});
	const onEdit = () => {
		let background =
			state.background === 'transparent'
				? 'var(--hospital-green)'
				: 'transparent';
		let color =
			state.color === 'var(--hospital-green)'
				? '#fff'
				: 'var(--hospital-green)';
		setState({
			...state,
			isEditing: !state.isEditing,
			background,
			color,
		});
	};

	const onChange = () => {
		setState({
			...state,
			changeDetected: changeText || 'Create',
		});
	};

	return (
		<LoginComponent>
			<FormContainer>
				<Logo
					src="./logos/logo_yard_sale.svg"
					alt="logo"
				/>

				<TitleLeft className="title">
					My account
				</TitleLeft>

				<Form>
					<Label htmlFor="name">Name</Label>
					<Input
						onKeyUp={onChange}
						type="text"
						id="name"
						placeholder="Camila Yokoo"
						disabled={!state.isEditing}
					/>

					<Label htmlFor="email">
						Email Address
					</Label>
					<Input
						onKeyUp={onChange}
						type="email"
						id="email"
						placeholder="camiladsa@platzi.com"
						disabled={!state.isEditing}
					/>

					<Label htmlFor="password">
						Password
					</Label>
					<Input
						onKeyUp={onChange}
						type="password"
						id="password"
						placeholder="*******"
						disabled={!state.isEditing}
					/>

					<PrimaryButton
						isInput={true}
						background={state.background}
						color={state.color}
						border="2px solid var(--hospital-green)"
						onClick={onEdit}
					>
						{state.changeDetected ||
							children}
					</PrimaryButton>
				</Form>
			</FormContainer>
		</LoginComponent>
	);
};

export { MyAccount };
