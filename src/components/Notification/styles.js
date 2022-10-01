import styled, { keyframes } from 'styled-components';

const rendering = keyframes`

    0% {
        right: -100%;
    }
    25%{
        right: 10px;
    }
    50% {
        right: 10px;
    }
    75% {
        right: 10px;
    }
    100%{
        right: -100%;
    }

`;

export const Card = styled.div`

    position: absolute;
    top: 10px;
    right: -100%;
    border-radius: .5rem;
    padding: 0 1rem;
    background-color: #FFD369;
    color: #222831;
    animation: 2s ${rendering};
`;

export const Text = styled.p``;
