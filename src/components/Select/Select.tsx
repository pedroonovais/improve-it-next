import { StyledSelect } from "./Select.style"

interface SelectProps{
    children: React.ReactNode
    name: string
    id: string
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
    disabled?: boolean
}

export const Select = ({ children, name, id, onChange, disabled }: SelectProps) => {
    return <StyledSelect name={name} id={id} onChange={onChange} disabled={disabled}>
        {children}
    </StyledSelect>
}