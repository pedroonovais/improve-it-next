import styled from "styled-components";

export const StyledTextArea = styled.textarea<{bgColor?: string; txtColor?: string}>`
    background-color: ${({bgColor}) => (bgColor ? bgColor : 'white')};
    color: ${({txtColor}) => (txtColor ? txtColor : 'black')};
    border-style: none;
    height: auto; 
    min-height: 3rem; 
    width: 100%; 
    font-size: 1rem; 
    font-family: "Sora", sans-serif;
    border-radius: 10px; 
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; 
    padding: 0.5rem; 
    resize: vertical; 
    box-sizing: border-box; 
    outline: none; 
    transition: box-shadow 0.3s ease, background-color 0.3s ease;

    &:focus {
        box-shadow: rgba(0, 0, 0, 0.5) 0px 8px 20px; 
    }
`