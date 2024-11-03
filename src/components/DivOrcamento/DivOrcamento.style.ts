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
    text-align: left;

    & form{
        display: block !important;
    }
    
    & h4{
        margin-bottom: 10px;
    }

    & img{
        width: 80%;
        border-radius: 10px;
        margin-top: 1rem;
    }

    & button{
        margin: 5px;
        padding: 5px 10px;
        border-radius: 10px;
    }

    @media (max-width: 768px) {
        width: 90vw;
    }
`;