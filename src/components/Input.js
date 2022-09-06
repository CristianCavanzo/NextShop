import React from 'react';
import styled from 'styled-components';

const InputComponent = styled.input.attrs(({ type }) => ({
	type: type || 'text',
}))`
	background-color: var(--text-input-field);
	border: none;
	border-radius: 8px;
	height: 30px;
	font-size: var(--md);
	padding: 6px;
	margin-bottom: 12px;
	outline: none;
	/* Properties with props */
	background-color: ${(props) => props.background_color};
	border: ${(props) => props.border};
	border-radius: ${(props) => props.border_radius};
	height: ${(props) => props.height};
	font-size: ${(props) => props.font_size};
	padding: ${(props) => props.padding};
	margin-bottom: ${(props) => props.margin_bottom};
	outline: ${(props) => props.outline};
	color: ${(props) => props.color};
	:disabled {
		background-color: transparent;
	}
`;

const Input = (props) => {
	return <InputComponent {...props} />;
};

export { Input };
