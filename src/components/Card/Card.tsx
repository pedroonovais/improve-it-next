import { StyledCard } from "./Card.style"

interface CardProps{
    children: React.ReactNode
}

export const Card = ({children}: CardProps) => {
    return <StyledCard>{children}</StyledCard>
}