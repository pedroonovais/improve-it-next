import { StyledTextArea } from "./TextArea.style";

interface TextAreaProps{
    value: string;
    onChange: (value: string) => void;
    rows?: number;
    cols?: number;
    placeholder?: string;
}

export const TextArea = ({ value, onChange, rows, cols, placeholder }: TextAreaProps) => {
    return <StyledTextArea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
    />
}