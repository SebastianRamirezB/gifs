import styled from 'styled-components';

export const Form = styled.form`
    width: 100%;
    display: flex;
`;

export const Input = styled.input`
    
    width: 100%;
    height: 2.8rem;
    border-top-left-radius: .5rem;
    border-bottom-left-radius: .5rem;
    background-color: #EEEEEE;
    border: none;
    outline: none;
    padding: 1rem;
    font-size: 1.2rem;
    color: #393E46;
    font-weight: 500;
`;

export const ButtonSearch = styled.button`
    border: none;
    border-top-right-radius: .5rem;
    border-bottom-right-radius: .5rem;
    background-color: #FFD369;
    color: #222831;
    cursor: pointer;
    height: 2.8rem;
    width: 100px;
    font-size: 1rem;
    font-weight: 500;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, 
                rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, 
                rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

        &:active { 
            box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 0px, 
                rgba(0, 0, 0, 0.3) 0px 0px 0px 0px, 
                rgba(0, 0, 0, 0.2) 0px 0px 0px inset;
            
        }
    
`;
