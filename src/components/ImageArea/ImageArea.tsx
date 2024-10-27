import { StyledImageArea } from "./ImageArea.style"

interface ImageAreaProps{
    children: React.ReactNode
    height?: string
    width?: string
}

export const ImageArea = ({ children, height, width }:ImageAreaProps) => {
    return <StyledImageArea h={height} w={width}>{children}</StyledImageArea>
}