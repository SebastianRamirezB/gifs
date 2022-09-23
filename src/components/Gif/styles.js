import styled from 'styled-components';

export const Article = styled.article`
    width: 20rem;
    border-radius: 1rem;
    overflow: hidden;
    transition: 100ms ease-in;
    cursor: pointer;


    &:hover {
        box-shadow: -10px 5px 0px #FFD369;
        transform: translate(10px, -10px);
        transition: 100ms ease-in;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    
`;
