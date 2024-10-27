import { StyledWrapper } from "./Wrapper.style"

interface WrapperProps{
    children: React.ReactNode
}

export const Wrapper = ({ children }: WrapperProps) => {
    return <StyledWrapper>{children}</StyledWrapper>
}