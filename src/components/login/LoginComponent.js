import styled from 'styled-components';

const LoginComponent = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    display: grid;
    place-items: center;
`;
const FormContainer = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    width: 300px;
`;

const Logo = styled.img`
    width: 150px;
    margin-bottom: 48px;
    justify-self: center;
    display: none;
    @media (max-width: 640px) {
        display: block;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 16px;
`;

export { LoginComponent, FormContainer, Logo, Form };
