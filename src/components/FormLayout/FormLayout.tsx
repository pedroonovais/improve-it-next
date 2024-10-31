import { StyledFormLayout } from "./FormLayout.style";

interface FormLayoutProps {
    children: React.ReactNode
    minWidth?: string
}

export const FormLayout = ({children, minWidth}: FormLayoutProps) =>{
    return <StyledFormLayout minWidth={minWidth} >{children}</StyledFormLayout>;
}