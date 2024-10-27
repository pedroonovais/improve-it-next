import { StyledFormLayout } from "./FormLayout.style";

interface FormLayoutProps {
    children: React.ReactNode
}

export const FormLayout = ({children}: FormLayoutProps) =>{
    return <StyledFormLayout>{children}</StyledFormLayout>;
}