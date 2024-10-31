"use client"
import { StyledFlexRow } from "./FlexRow.style"

interface FlexRowProps{
    children: React.ReactNode
}

export const FlexRow = ({children}: FlexRowProps) => {
    return <StyledFlexRow>{children}</StyledFlexRow>
}