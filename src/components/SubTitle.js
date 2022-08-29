import React from 'react';
import styled from 'styled-components';

const SubTitleComponent = styled.p`
    color: var(--very-light-pink);
    font-size: var(--md);
    font-weight: 300;
    margin-top: 0;
    margin-bottom: 32px;
    text-align: center;
`;

const SubTitle = ({ children }) => {
    return <SubTitleComponent>{children}</SubTitleComponent>;
};

export { SubTitle };
