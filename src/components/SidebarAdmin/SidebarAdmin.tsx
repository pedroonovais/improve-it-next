import { StyledList, StyledLogo, StyledSidebar } from "./SidebarAdmin.style"
import Image from "next/image"
import logo from '../../assets/logo.png'
import Link from "next/link"

interface SidebarAdminProps{
    children: React.ReactNode
}

export const SidebarAdmin = ({children}: SidebarAdminProps) => {
    return <StyledSidebar>
        <StyledLogo className="img">
           <Link href="/">
               <Image src={logo} alt="Voltar para a home"/>
           </Link>
           
        </StyledLogo>
        <StyledList>
            {children}
        </StyledList>
    </StyledSidebar>
}