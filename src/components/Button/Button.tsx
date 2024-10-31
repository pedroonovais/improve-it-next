"use client"
import { StyledButton } from "./Button.style"

interface ButtonProps{
    children: React.ReactNode
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    bgColor?: string
    txtColor?: string
}

export const Button = ({children, onClick, bgColor, txtColor}: ButtonProps) => {
    return <StyledButton 
                onClick={onClick} 
                bgColor={bgColor} 
                txtColor={txtColor}>
                    {children}
            </StyledButton>
}