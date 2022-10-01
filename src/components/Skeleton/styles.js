import styled, { keyframes } from 'styled-components';

const pulseSkeleton = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: .1;
    }
    100%{
        opacity: 0;
    }
`;

export const SkeletonCard = styled.div`
    width: 20rem;
    height: 25rem;
    border-radius: 1rem;
    background-color: #EEEEEE;
    opacity: 0;
    
    animation: 1.5s ${pulseSkeleton} ease-out infinite;
    
`;
