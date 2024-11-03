"use client"
import { Hero } from "@/components/Hero/Hero";
import { FormLayout } from "@/components/FormLayout/FormLayout";
import { FlexRow } from "@/components/FlexRow/FlexRow";
import { Button } from "@/components/Button/Button";
import { ImageArea } from "@/components/ImageArea/ImageArea";
import { useContext } from "react";
import { FormContext } from "@/contexts/FormContext/FormContext";
import { useRouter } from "next/navigation";

export default function ConfirmBudget() {
    const { formData } = useContext(FormContext)
    const router = useRouter()

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        router.push('/cadastro')
    }
    
    return (
        <Hero strImg="/bannerAtendimento.jpg" height="100vh">
            <FormLayout>
                <h2>{formData.tipoServico === "diagnostico" 
                    ? "Confirmado! Esperamos você na CAP para averiguarmos melhor o seu problema!" 
                    : "Parabéns, orçamento finalizado!"}
                </h2>
                <p>
                    <strong>CAP Indicada:</strong> Centro Automotivo Porto Seguro Conceição
                </p>
                <p>
                    <strong>Endereço: </strong> Av. Diederichsen, 1426 - Vila Guarani (Zona Sul), São Paulo - SP, 04310-001
                </p>
                <ImageArea>
                    <img src="/Cap Conceição.jpg" alt="Cap Conceição" />
                </ImageArea>
                <p>
                    <strong>Telefone: </strong> (11) 2774-1507
                </p>
                <FlexRow>
                    <Button onClick={handleClick}>Finalizar cadastro</Button>
                </FlexRow>
            </FormLayout>
        </Hero>
    )
}