import styled from "styled-components";

export const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const StyledLogo = styled.div`
    & img{
        width: 100%;
        height: 5rem;
    }
`;

export const StyledHamburger = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    gap: 0.5rem;
    font-size: 2.8rem;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const StyledNavegation = styled.ul<{ isOpen: boolean }>`
    position: absolute;
    display: flex;
    width: 100%;
    flex-direction: column;
    list-style: none;
    color: var(--primary-color);
    top: 6rem;
    transition: 250ms;
    top: ${({isOpen}) => (isOpen ? '30' : '-100%')};

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: end;
        position: relative;
        top: 0;
    }
    
    & li{
        text-align: center;
        padding: 0.8rem;
        background-color: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(10px);

        @media (min-width: 768px) {
            background: transparent;
            backdrop-filter: unset;
            display: flex;
            flex-direction: column;
            margin-right: 16px;
            justify-content: center;
        }   
    }

    & a{
        color: white;
        text-decoration: none;
        transition: 200ms;
    }
    
    & a:visited{
        color: white;
        text-decoration: none;
    }
    
    & a:active{
        color: white;
        text-decoration: none;
    }
`;