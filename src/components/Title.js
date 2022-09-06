import React from 'react';
import styled from 'styled-components';

const TitleComponent = styled.h1`
	font-size: var(--lg);
	margin-bottom: 12px;
	text-align: center;
	/* custom properties */
	text-align: ${(props) => props.text_aling};
	margin-bottom: ${(props) => props.margin};
`;

const Title = (props) => {
	const properties = { ...props, children: undefined };
	return (
		<TitleComponent {...properties}>
			{props.children}
		</TitleComponent>
	);
};

export { Title, TitleComponent };
