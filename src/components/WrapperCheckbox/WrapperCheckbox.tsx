import { StyledWrapperCheckbox } from "./WrapperCheckbox.style"

interface WrapperCheckboxProps{
    children: React.ReactNode
}

export const WrapperCheckbox = ({ children }: WrapperCheckboxProps) => {
    return <StyledWrapperCheckbox>{children}</StyledWrapperCheckbox>
}