"use client"
import { Hero } from "@/components/Hero/Hero";
import { FormLayout } from "@/components/FormLayout/FormLayout";
import { FlexRow } from "@/components/FlexRow/FlexRow";
import { Button } from "@/components/Button/Button";
import { useContext } from "react";
import { FormContext } from "@/contexts/FormContext/FormContext";
import { UnorderedList } from "@/components/UnorderedList/UnorderedList";
import { useRouter } from "next/navigation";

export default function ConfirmDataDiagnosis() {
    const { formData } = useContext(FormContext)
    const router = useRouter()
    
    const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        router.push('/atendimento/orcamento-finalizado')
    }

    const handleBack = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        router.push('/atendimento/confirmar-cep')
    }
    
    return (
        <Hero strImg="/bannerAtendimento.jpg" height="100vh">
            <FormLayout>
                <h2>Confirme as informações fornecidas para o diagnóstico:</h2>
                <p>
                    <strong>Veículo:</strong> {formData.marcaVeiculo} {formData.modelo}<br />
                    <strong>Problema relatado:</strong> {formData.problemaDiagnotisco}, {formData.descProblemaDiagnostico}
                </p>
                <UnorderedList>
                    {formData.servicosSelecionados.map((servico, index) => {
                        return <li key={index}> - {servico}</li>
                    })}
                </UnorderedList>
                <p></p>
                <FlexRow>
                    <Button bgColor="white" txtColor="var(--primary-color)" onClick={handleBack} >Voltar</Button>
                    <Button onClick={handleNext} >Confirmar</Button>
                </FlexRow>
            </FormLayout>
        </Hero>
    )
}