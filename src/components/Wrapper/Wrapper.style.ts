import styled from "styled-components";

export const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
    }
`