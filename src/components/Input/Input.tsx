"use client"
import { StyledInput } from "./Input.style"

interface InputProps {
    children?: React.ReactNode
    type: string
    id: string
    name: string
    label?: string
    placeholder?: string
    value?: string
    maxLength?: number
    minLength?: number
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export const Input = ({children, type, id, name, placeholder, value, minLength, maxLength, onChange, ...rest }: InputProps) => {
    return (
        <>
            <label htmlFor={id}>{children}</label>
            <StyledInput
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                minLength={minLength}
                maxLength={maxLength}
                onChange={(e) => onChange(e)}
                {...rest}
            />
        </>
    )
}