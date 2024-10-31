import styled from "styled-components";

export const StyledSidebar = styled.aside`
    display: flex;
    background-color:  #2c3e50;
    flex-direction: column;
    min-width: 320px;
    height: 100vh;
`;

export const StyledLogo = styled.div`
    margin: 0 auto;
    max-width: 320px;
    
    & img{
        width: 100%;
        height: 5rem;
    }
`;

export const StyledList = styled.ul`
    color: white;
    list-style: none;
    padding: 0 15px;
    
    & li {
        padding: 10px 0;
        border-top: 1px solid white;
        cursor: pointer;
    }
`;