import React from 'react';
import styled from 'styled-components';

const LabelComponent = styled.label`
    font-size: var(--sm);
    font-weight: bold;
    margin-bottom: 4px;
    color: ${(props) => props.color};
`;

const Label = (props) => {
    let properties = { ...props, children: undefined };
    return <LabelComponent {...properties}>{props.children}</LabelComponent>;
};

export { Label };
