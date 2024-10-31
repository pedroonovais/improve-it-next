"use client"
import { StyledCheckbox, StyledLabel } from "./Checkbox.style"

interface CheckboxProps {
    children: React.ReactNode
    name?: string
    id?: string
    value?: string
    checked?: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox = ({ children, name, id, value, checked = false, onChange }: CheckboxProps) => {
    return (
        <>
            <StyledCheckbox 
                name={name} 
                id={id} 
                value={value} 
                checked={checked}
                onChange={onChange}
            />
            <StyledLabel htmlFor={id} checked={checked}>{children}</StyledLabel>
        </>
    )
}