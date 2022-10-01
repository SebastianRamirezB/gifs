import styled from 'styled-components';
import { MdFavoriteBorder, MdContentCopy } from 'react-icons/md';

export const Article = styled.article`
    max-height: 400px;
    border-radius: 1rem;
    overflow: hidden;
    transition: 100ms ease-in;

    position: relative;
    


    &:hover {
    
        box-shadow: rgba(255, 211, 105, 0.4) -5px 5px, 
                    rgba(255, 211, 105, 0.3) -10px 10px, 
                    rgba(255, 211, 105, 0.2) -15px 15px, 
                    rgba(255, 211, 105, 0.1) -20px 20px, 
                    rgba(255, 211, 105, 0.05) -25px 25px;
        transform: translate(10px, -10px);
        transition: 100ms ease-in;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    
`;

export const OverlayGif = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(34, 40, 49, 0);
    opacity: 0;
    gap: 1rem;
    transition: .1s ease-in;
    

    ${Article}:hover & {
        opacity: 1;
        background-color: rgba(34, 40, 49, .5);
        transition: .1s ease-in;
    
  }
`;

export const IconLike = styled(MdFavoriteBorder)`
    cursor: pointer;
    font-size: 3rem;
    color: ${props => props.color};
`;

export const IconCopy = styled(MdContentCopy)`
    cursor: pointer;
    font-size: 2.8rem;
    
`;
