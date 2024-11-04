"use client"
import { Hero } from "@/components/Hero/Hero";
import { FormLayout } from "@/components/FormLayout/FormLayout";
import { FlexRow } from "@/components/FlexRow/FlexRow";
import { Button } from "@/components/Button/Button";
import { useContext } from "react";
import { FormContext } from "@/contexts/FormContext/FormContext";
import { UnorderedList } from "@/components/UnorderedList/UnorderedList";
import { useRouter } from "next/navigation";

export default function ConfirmBudget() {
    const { formData, setFormData } = useContext(FormContext)
    const router = useRouter()
    
    const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        router.push('/atendimento/orcamento-finalizado')
    }

    const handleBack = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        router.push('/atendimento/confirmar-cep')
    }

    const calculaPreco = () => {
        if (formData.tipoServico === "revisao"){
            if (formData.kmRodados === "Até 50 mil Km"){
                setFormData({ ...formData, preco: "800" });
                return "800,00"
            }else if (formData.kmRodados === "Até 80 mil Km" || formData.kmRodados === "Até 100 mil Km"){
                setFormData({ ...formData, preco: "1000" });
                return "1.000,00"
            }else if (formData.kmRodados === "Até 150 mil Km" || formData.kmRodados === "Até 200 mil Km"){
                setFormData({ ...formData, preco: "1250" });
                return "1.250,00"
            }else if (formData.kmRodados === "Até 250 mil Km" || formData.kmRodados === "Até 300 mil Km"){
                setFormData({ ...formData, preco: "1500" });
                return "1.500,00"
            }else{
                setFormData({ ...formData, preco: "1750" });
                return "1.750,00"
            }
        }else if ((formData.tipoServico === "manutencao")){
            setFormData({ ...formData, preco: "1150" });
            return "1.150,00"
        }else{
            if (formData.kmRodados === "Até 50 mil Km"){
                setFormData({ ...formData, preco: "1950" });
                return "1.950,00"
            }else if (formData.kmRodados === "Até 80 mil Km" || formData.kmRodados === "Até 100 mil Km"){
                setFormData({ ...formData, preco: "2150" });
                return "2.150,00"
            }else if (formData.kmRodados === "Até 150 mil Km" || formData.kmRodados === "Até 200 mil Km"){
                setFormData({ ...formData, preco: "2400" });
                return "2.400,00"
            }else if (formData.kmRodados === "Até 250 mil Km" || formData.kmRodados === "Até 300 mil Km"){
                setFormData({ ...formData, preco: "2650" });
                return "2.650,00"
            }else{
                setFormData({ ...formData, preco: "2900" });
                return "2.900,00"
            }
        }
    }
    
    return (
        <Hero strImg="/bannerAtendimento.jpg" height="100vh">
            <FormLayout>
                <h2>Orçamento sugerido:</h2>
                <p>
                    <strong>Veículo:</strong> {formData.modelo} <br />
                    <strong>Data sugerida:</strong> 11/10/2024 <br />
                    <strong>Endereço:</strong> Av. Diederichsen, 1426 - Vila Guarani (Zona Sul), São Paulo - SP, 04310-001 <br />
                    <strong>
                        {formData.tipoServico === "revisao" || formData.tipoServico === "manutencao-revisao" ? `Revisão para veículos com: ${formData.kmRodados} rodados` : ""}
                    </strong> <br />
                    <strong>{formData.tipoServico === "manutencao" || formData.tipoServico === "manutencao-revisao"  ? "Serviços:" : ""}</strong> <br />
                </p>
                <UnorderedList>
                    {formData.servicosSelecionados.map((servico, index) => {
                        return <li key={index}> - {servico}</li>
                    })}
                </UnorderedList>
                <p>
                    <strong>Valor: R$ {calculaPreco()}</strong>
                </p>
                <FlexRow>
                    <Button bgColor="white" txtColor="var(--primary-color)" onClick={handleBack} >Voltar</Button>
                    <Button onClick={handleNext} >Aprovar</Button>
                </FlexRow>
            </FormLayout>
        </Hero>
    )
}