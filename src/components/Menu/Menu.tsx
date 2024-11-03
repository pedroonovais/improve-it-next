"use client"
import Link from 'next/link'
import logo from '../../assets/logo.png'
import { StyledHamburger, StyledNav, StyledLogo, StyledNavegation } from './Menu.style'
import { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import LoginContext from '@/contexts/LoginContext/LoginContext'

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const login = useContext(LoginContext);
    const [txtLink, setTxtLink] = useState("")
    const [caminhoLink, setCaminhoLink] = useState("")

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const sessionData = sessionStorage.getItem("userToken");

        if (!sessionData) {
            setCaminhoLink("/login")
            setTxtLink("Login")
        }else{
            setCaminhoLink("/area-cliente")
            setTxtLink("Área do Cliente")
        }
    }, [login]);

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
                <li><Link href={caminhoLink}>{txtLink}</Link></li>
            </StyledNavegation>
        </StyledNav>
    )
}