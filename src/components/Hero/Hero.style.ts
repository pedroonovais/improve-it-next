import styled from "styled-components";

export const StyledHero = styled.header<{bgImg : string; height?: string; heightSmDv?: string;}>`
    display: flex;
    flex-direction: column;
    color: white;
    background: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${props => props.bgImg}) no-repeat center;
    background-size: cover;
    height: ${({ height }) => height || 'auto'};
    width: 100%;


    & h1, h2, h3, h4, h5, h6{
        line-height: 2.1rem;
    }

    & button{
        width: 100%
    }

    @media (max-width: 768px) {
        height: ${({ heightSmDv }) => heightSmDv || '100vh'};
        min-height: 100vh;
    }
`;

export const StyledHeroContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin: 0 auto;
    max-width: 768px;

    @media (max-width: 768px) {
        margin: 0 1rem;
    }
`;