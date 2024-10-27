import { StyledFooter, StyledGroupLinks } from "./Footer.style"

import footerLogo from "../../assets/logoImproveIt.png";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
    return (
    <StyledFooter>
        <StyledGroupLinks>
            <p><strong>Links Rápidos:</strong></p>
            <ul>
                <li><a href="">Perguntas Frequentes</a></li>
                <li><a href="">SAC e Telefones</a></li>
                <li><a href="">Whatsapp</a></li>
                <li><a href="">Chat Online</a></li>
            </ul>
        </StyledGroupLinks>
        <StyledGroupLinks>
            <p><strong>Sobre a improve it</strong></p>
            <ul>
                <li><Link href="/integrantes">Integrantes</Link></li>
                <li><Link href="/atendimento">Iniciar o atendimento</Link></li>
            </ul>
        </StyledGroupLinks>
        <StyledGroupLinks>
            <Image 
                src={footerLogo} 
                alt="Logo Improve It" 
            />
        </StyledGroupLinks>
        <StyledGroupLinks>
            <span>© Copyright 2024 - Todos os direitos reservados</span>
        </StyledGroupLinks>
    </StyledFooter>
    )
}