"use client";
import { Hero } from "@/components/Hero/Hero";
import { FormLayout } from "@/components/FormLayout/FormLayout";
import { FlexRow } from "@/components/FlexRow/FlexRow";
import { Button } from "@/components/Button/Button";
import { useContext, useEffect, useState } from "react";
import { FormContext } from "@/contexts/FormContext/FormContext";
import { useRouter } from "next/navigation";
import axios from 'axios'; // Certifique-se de que o axios está importado

interface ViaCepProps {
    logradouro: string;
    bairro?: string;
    localidade: string;
    uf: string;
    cep: string;
}

export default function ConfirmCep() {
    const { formData, setFormData } = useContext(FormContext);
    const router = useRouter();
    const [logradouro, setLogradouro] = useState<ViaCepProps | null>(null);

    const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const logradouroValue = logradouro?.logradouro || '';
        setFormData({ ...formData, logradouro: logradouroValue });

        if (formData.tipoServico === "diagnostico") {
            router.push('/atendimento/confirmar-dados-diagnostico');
        } else {
            router.push('/atendimento/confirmar-orcamento');
        }
    };

    const handleBack = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        router.push('/atendimento/cep');
    };

    useEffect(() => {
        if (formData.cep) {
            const cep = formData.cep.replace(/\D/g, '');

            axios.get(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => {
                    if (!response.data.erro) {
                        setLogradouro(response.data);
                    } else {
                        console.error("CEP não encontrado.");
                    }
                })
                .catch(error => {
                    console.error("Erro ao buscar dados do CEP:", error);
                });
        }
    }, [formData.cep]);

    return (
        <Hero strImg="/bannerAtendimento.jpg" height="100vh">
            <FormLayout>
                <h2>Confirme o cep informado:</h2>
                <p>CEP: {formData.cep}</p>
                {logradouro ? (
                    <p>{logradouro.logradouro}</p>
                ) : (
                    <p>Carregando...</p>
                )}
                <FlexRow>
                    <Button bgColor="white" txtColor="var(--primary-color)" onClick={handleBack}>Voltar</Button>
                    <Button onClick={handleNext}>Confirmar</Button>
                </FlexRow>
            </FormLayout>
        </Hero>
    );
}
