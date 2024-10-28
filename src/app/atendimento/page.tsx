"use client"
import { Button } from "../../components/Button/Button"
import { FlexRow } from "../../components/FlexRow/FlexRow"
import { FormLayout } from "../../components/FormLayout/FormLayout"
import { Hero } from "../../components/Hero/Hero"
import { useRouter } from "next/navigation"

import bannerAtendimento from "/bannerAtendimento.jpg"

export default function Atendimento() {
    const router = useRouter()

    const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        router.push('/atendimento/tipo-servico')
    }

    const handleBack = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        router.push('/')
    }

    return (
        <Hero strImg="bannerAtendimento.jpg" height="100vh">
            <FormLayout>
                <h2>Vou te fazer algumas perguntas para saber o que você deseja, ok?</h2>
                <FlexRow>
                    <Button bgColor="white" txtColor="var(--primary-color)" onClick={handleBack} >Voltar</Button>
                    <Button onClick={handleNext} >Continuar</Button>
                </FlexRow>
            </FormLayout>
        </Hero>
    )
}