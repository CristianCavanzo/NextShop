import React from 'react';
import styled from 'styled-components';
const PrimaryButtonComponent = styled.button`
    background-color: ${(props) => props.background || 'var(--hospital-green)'};
    border-radius: 8px;
    border: ${(props) => props.border || 'none'};
    color: ${(props) => props.color || 'var(--white)'};
    width: 100%;
    cursor: pointer;
    font-size: var(--md);
    font-weight: bold;
    height: 50px;
    text-align: center;
`;

const PrimaryButton = (props) => {
    let properties = { ...props, children: undefined };
    if (props.isInput) {
        return (
            <PrimaryButtonComponent
                as="input"
                value={props.children}
                type="submit"
                {...properties}
            ></PrimaryButtonComponent>
        );
    } else {
        return (
            <PrimaryButtonComponent {...properties}>
                {props.children}
            </PrimaryButtonComponent>
        );
    }
};

export { PrimaryButton };
