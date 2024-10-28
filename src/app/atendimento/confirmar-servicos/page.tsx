"use client"
import { FormContext } from "@/contexts/FormContext/FormContext";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { Hero } from "@/components/Hero/Hero";
import { FormLayout } from "@/components/FormLayout/FormLayout";
import { UnorderedList } from "@/components/UnorderedList/UnorderedList";
import { FlexRow } from "@/components/FlexRow/FlexRow";
import { Button } from "@/components/Button/Button";

export default function ConfirmServicesForm (){
    const { formData } = useContext(FormContext)
    const router = useRouter()
    
    const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        router.push('/atendimento/confirmar-cliente-porto')
    }

    const handleBack = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        router.push('/atendimento/selecionar-servicos')
    }
    
    return (
        <Hero strImg="/bannerAtendimento.jpg" height="100vh">
            <FormLayout>
                <h2>Confirme as opções de serviço que você escolheu:</h2>
                <UnorderedList>
                    {formData.servicosSelecionados.map((servico, index) => {
                        return <li key={index}>- {servico}</li>
                    })}
                </UnorderedList>
                <FlexRow>
                    <Button bgColor="white" txtColor="var(--primary-color)" onClick={handleBack} >Voltar</Button>
                    <Button onClick={handleNext} >Confirmar</Button>
                </FlexRow>
            </FormLayout>
        </Hero>
    )
}