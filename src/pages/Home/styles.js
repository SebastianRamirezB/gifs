import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;

    @media screen and (max-width: 1024px) {
        padding:  2rem 1rem;
  }
    
`;

export const LikeIcon = styled.div`
    cursor: pointer;
    
    a{
        text-decoration: none;
        color: #EEEEEE;
    }
   
`;

export const NavBar = styled.nav`
    display: flex;
    min-width: 280px;
    width: 100%;
    gap: 1rem;
    
`;
