"use client"
import Link from "next/link"
import { Button } from "../Button/Button"
import { Menu } from "../Menu/Menu"
import { StyledHero, StyledHeroContent } from "./Hero.style"

interface HeroProps{
    strImg: string
    children: React.ReactNode
    btnAtendimento?: boolean
    height?: string
    heightSmDv?: string
}

export const Hero = ({strImg, children, btnAtendimento, height, heightSmDv}: HeroProps) => {
    return (
        <StyledHero bgImg={strImg} height={height} heightSmDv={heightSmDv}>
            <Menu />
            <StyledHeroContent>
                {children}
                {btnAtendimento && <Link href="/atendimento"><Button>Iniciar Atendimento</Button></Link>}
            </StyledHeroContent>
        </StyledHero>
    )
}