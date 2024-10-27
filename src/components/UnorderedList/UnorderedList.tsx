import { StyledUnorderedList } from "./UnorderedList.style"

interface UnorderedListProps{
    children: React.ReactNode
}

export const UnorderedList = ({ children }: UnorderedListProps) => {
    return <StyledUnorderedList>{children}</StyledUnorderedList>
}
