import styled from "styled-components"

export const StyledCard = styled.div`
    width: 750px;
    border-radius: 10px;
    padding: 1rem;
    flex-direction: column;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    max-width: 500px;    
    margin-bottom: 1rem;
    
    & img{
        width: 80%;
        border-radius: 10px;
        margin-top: 1rem;
    }

    & p, h3, a{
        margin-top: 0.5rem;
    }

    @media (max-width: 768px) {
        width: 90vw;
    }
`;