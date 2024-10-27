import styled from "styled-components";

export const StyledImageArea = styled.div<{ w?: string; h?: string }>`
    & img{
        width: ${({w}) => (w ? w : '100%')};
        height: ${({h}) => (h ? h : '100%')};
    }
`