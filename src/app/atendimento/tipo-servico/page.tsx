"use client"

import { useRouter } from "next/navigation"
import { useContext } from "react";
import { FormContext } from "@/contexts/FormContext/FormContext";
import { Hero } from "@/components/Hero/Hero";
import { FormLayout } from "@/components/FormLayout/FormLayout";
import { FlexRow } from "@/components/FlexRow/FlexRow";
import { Button } from "@/components/Button/Button";

export default function tipoServico() {
    const { formData, setFormData } = useContext(FormContext)
    const router = useRouter()

    const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if (formData.tipoServico === "manutencao"){
            router.push('/atendimento/selecionar-servicos')
        }else if (formData.tipoServico === "revisao"){
            router.push('/atendimento/dados-revisao')
        }else{
            router.push('/atendimento/diagnostico')
        }
    }

    const handleBack = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        router.push('/atendimento')
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, tipoServico: event.target.value})        
    }

    return (
        <Hero strImg="/bannerAtendimento.jpg" height="100vh">
            <FormLayout>
                <h2>Você gostaria de realizar uma <u>manutenção</u>, <u>revisão</u> ou <u>diagnóstico</u> em seu veículo?</h2><br />
                <div>
                    <input type="radio" name="tipo-servico" id="manutencao" value="manutencao" onChange={handleChange}/>
                    <label htmlFor="manutencao">Manutenção: um conserto ou serviço específico.</label>
                </div>
                <div>
                    <input type="radio" name="tipo-servico" id="revisao" value="revisao" onChange={handleChange}/>
                    <label htmlFor="revisao">Revisão: revisão dos principais itens de seu veículo.</label>
                </div>
                {/* <div>
                    <input type="radio" name="tipo-servico" id="manutencao-revisao" value="manutencao-revisao" onChange={handleChange}/>
                    <label htmlFor="manutencao-revisao">Ambos (manutenção + revisão).</label>
                </div> */}
                <div>
                    <input type="radio" name="tipo-servico" id="diagnostico" value="diagnostico" onChange={handleChange}/>
                    <label htmlFor="diagnostico">Diagnóstico: identificar e corrigir um problema no seu veículo.</label>
                </div>
                <FlexRow>
                    <Button bgColor="white" txtColor="var(--primary-color)" onClick={handleBack} >Voltar</Button>
                    <Button onClick={handleNext} >Continuar</Button>
                </FlexRow>
            </FormLayout>
        </Hero>
    )
}