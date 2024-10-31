"use client"
import { Hero } from "@/components/Hero/Hero";
import { FormLayout } from "@/components/FormLayout/FormLayout";
import { FlexRow } from "@/components/FlexRow/FlexRow";
import { Button } from "@/components/Button/Button";
import { useContext, useEffect, useState } from "react";
import { FormContext } from "@/contexts/FormContext/FormContext";
import { Input } from "@/components/Input/Input";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Wrapper } from "@/components/Wrapper/Wrapper";

export default function Login () {
    const { formData, setFormData } = useContext(FormContext)
    const router = useRouter()
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [clientePorto, setClientePorto] = useState('')
    const [email, setEmail] = useState('')
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmaSenha, setConfirmaSenha] = useState('')
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        console.log("Login: ", login, " Senha: ", senha)   
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        switch (event.target.id) {
            case "nome":
                setNome(event.target.value)
                break;
            case "cpf":
                setCpf(event.target.value)
                break;
            case "email":
                setEmail(event.target.value)
                break;
            case "senha":
                setSenha(event.target.value)
                break;
            case "confirma-senha":
                setConfirmaSenha(event.target.value)
                break
            case "cliente-porto":
                setClientePorto(event.target.value)
                break;
        }
    }
    
    return (
        <Hero strImg="/bannerAtendimento.jpg" height="100vh">
            <FormLayout minWidth="320px">
                <h2>Cadastro de usuário</h2>
                <h4>Nome Completo *</h4>
                <Input 
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Ex: João da Silva Martins"
                    value={login}
                    maxLength={16}
                    onChange={handleChange}
                ></Input>
                
                <h4>CPF *</h4>
                <Input 
                    type="text"
                    id="senha"
                    name="senha"
                    placeholder="Ex: 456.756.345-77"
                    value={senha}
                    maxLength={16}
                    onChange={handleChange}
                ></Input>
                <h4>Email *</h4>
                <Input 
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Ex: joao.silva@gmail.com"
                    value={email}
                    maxLength={16}
                    onChange={handleChange}
                ></Input>
                <FlexRow>
                    <Button onClick={handleClick} >Entrar</Button>
                </FlexRow>
                <Wrapper>
                    <Link href="/login/">Já tem cadastro? Login</Link>
                </Wrapper>
            </FormLayout>
        </Hero>
    )
}