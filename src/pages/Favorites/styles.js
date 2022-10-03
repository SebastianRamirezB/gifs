import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    padding: 2rem .5rem;
`;

export const ButtonBack = styled(Link)`
    text-decoration: none;
    background-color: #FFD369;
    color: #222831;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 150px;
    padding: .5rem 1rem;
    border-radius: .5rem;

    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, 
                rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, 
                rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

        &:active { 
            box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 0px, 
                rgba(0, 0, 0, 0.3) 0px 0px 0px 0px, 
                rgba(0, 0, 0, 0.2) 0px 0px 0px inset;
        }
`;
