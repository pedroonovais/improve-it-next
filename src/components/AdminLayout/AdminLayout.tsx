"use client"
import { StyledLayout } from "./AdminLayout.style"

interface AdminLayoutProps{
    children: React.ReactNode
}

export const AdminLayout = ({children}:AdminLayoutProps) => {
    return <StyledLayout>{children}</StyledLayout>
}