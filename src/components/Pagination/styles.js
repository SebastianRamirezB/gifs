import styled from 'styled-components';

export const Buttons = styled.div`
    width: 100%;
    height: 3.125rem;
    display: flex;
    align-items: center;
    position: relative;
    
    
`;

export const ButtonNext = styled.button`
    color: #222831;
    background-color: #FFD369;
    width: 9.375rem;
    font-size: 1.5rem;
    padding: .5rem 1rem;
    border-radius: .5rem;
    border: none;
    border-radius: .5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    position: absolute;
    right: 0;    
`;

export const ButtonPrevious = styled(ButtonNext)`
    left: 0;
`;
