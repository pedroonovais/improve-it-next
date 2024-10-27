import styled from "styled-components";

export const StyledFormLayout = styled.form`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    max-width: 768px;
    margin: 0 auto;
    
    & div{
        margin: 0.7rem 0;
    }
    
    & label{
        cursor: pointer;
        font-size: 1.1rem;
    }

    & input[type="radio"]{
        width: 1.1rem;
        height: 1.1rem;
        cursor: pointer;
        margin: 0 0.1rem;
    }

    & p{
        margin-top: 10px;
    }
`;