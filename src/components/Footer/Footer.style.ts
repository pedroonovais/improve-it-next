import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: black;
    color: white;
`;

export const StyledGroupLinks = styled.div`
    padding: 1rem;

    & ul{
        list-style: none;
        line-height: 1.9rem;
    }

    & a{
        text-decoration: none;
        font-weight: lighter;
        color: white;
    }

    & a:visited{
        color: white;
    }

    & a:active{
        color: white;
    }

    & span{
        font-size: 0.7rem;
        display: flex;
        justify-content: center;
    }

    & img{
        width: 100%;
        height: 100%;
    }

    @media (min-width: 768px) {
        & img{
            width: 30%;
        }
    }
`;