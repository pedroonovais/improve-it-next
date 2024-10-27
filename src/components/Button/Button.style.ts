import styled from "styled-components";

export const StyledButton = styled.button<{bgColor?: string; txtColor?: string}>`
    background-color: ${({bgColor}) => (bgColor ? bgColor : 'var(--primary-color)')};
    color: ${({txtColor}) => (txtColor ? txtColor : 'white')};
    border-style: none;
    height: 3rem;
    font-size: 1.5rem;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin-bottom: 1rem;
`;