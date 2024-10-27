import styled from "styled-components";

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
    position: absolute;
    opacity: 0;
`

export const StyledLabel = styled.label<{ checked: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 5px 10px;
    border: 1px solid #ccc;
    color: ${({checked}) => (checked ? 'black' : 'white')};
    background-color: ${({checked}) => (checked ? 'white' : 'transparent')};
    transition: 0.3s ease;
    font-size: 0.8rem !important;
`