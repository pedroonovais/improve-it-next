import { StyledSection } from "./Section.style"

interface SectionProps{
    children: React.ReactNode
}

export const Section = ({children}: SectionProps) => {
    return <StyledSection>{children}</StyledSection>
}