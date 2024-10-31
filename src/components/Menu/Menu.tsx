"use client"
import Link from 'next/link'
import logo from '../../assets/logo.png'
import { StyledHamburger, StyledNav, StyledLogo, StyledNavegation } from './Menu.style'
import { useState } from 'react'
import Image from 'next/image'

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <StyledNav>
            <Link href="/">
                <StyledLogo>
                    <Image 
                        src={logo}
                        alt="Logo Porto Seguro" 
                    />
                </StyledLogo>
            </Link>
            
            <StyledHamburger onClick={toggleMenu}>
                &#9776;
            </StyledHamburger>
            <StyledNavegation isOpen={isOpen}>
                <li><Link href="/integrantes">Integrantes</Link></li>
                <li><Link href="/atendimento">Iniciar Atendimento</Link></li>
            </StyledNavegation>
        </StyledNav>
    )
}