"use client"
import React from "react"
import { StyledCard } from "./DivOrcamento.style"

interface DivOrcamentoProps{
    children: React.ReactNode
}

export const DivOrcamento = ({children}: DivOrcamentoProps) => {
    return <StyledCard>{children}</StyledCard>
}