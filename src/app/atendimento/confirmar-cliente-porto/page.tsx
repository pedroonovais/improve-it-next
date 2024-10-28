"use client"
import { Button } from "@/components/Button/Button";
import { FlexRow } from "@/components/FlexRow/FlexRow";
import { FormLayout } from "@/components/FormLayout/FormLayout";
import { Hero } from "@/components/Hero/Hero";
import { FormContext } from "@/contexts/FormContext/FormContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function ConfirmPortoCustomer () {
    const { formData, setFormData } = useContext(FormContext)
    const router = useRouter()
    
    const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        router.push('/atendimento/dados-veiculo')
    }

    const handleBack = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        router.push('/atendimento/confirmar-servicos')
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value === "true" ? true : false
        setFormData({ ...formData, seguradoPorto: value})
    }

    useEffect(() => {
        console.log(formData)
    }, [formData])
    
    return (
        <Hero strImg="/bannerAtendimento.jpg" height="100vh">
            <FormLayout>
                <h2>O veículo que você deseja realizar o serviço já é segurado da Porto Seguro?</h2>
                <div>
                    <input type="radio" name="cliente-porto" id="yes" value="true" onChange={handleChange}/>
                    <label htmlFor="yes">Sim</label>
                </div>
                <div>
                    <input type="radio" name="cliente-porto" id="no" value="false" onChange={handleChange}/>
                    <label htmlFor="no">Não</label>
                </div>
                <FlexRow>
                    <Button bgColor="white" txtColor="var(--primary-color)" onClick={handleBack} >Voltar</Button>
                    <Button onClick={handleNext} >Confirmar</Button>
                </FlexRow>
            </FormLayout>
        </Hero>
    )
}