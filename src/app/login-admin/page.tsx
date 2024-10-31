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
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        console.log("Login: ", login, " Senha: ", senha)   
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.id === "login"){
            setLogin(event.target.value)
        }else{
            setSenha(event.target.value)
        }
    }
    
    return (
        <Hero strImg="/bannerAtendimento.jpg" height="100vh">
            <FormLayout minWidth="320px">
                <h2>Login</h2>
                <Input 
                    type="text"
                    id="login"
                    name="login"
                    placeholder="Informe seu login"
                    value={login}
                    maxLength={16}
                    onChange={handleChange}
                ></Input>
                <Input 
                    type="password"
                    id="senha"
                    name="senha"
                    placeholder="Digite sua senha"
                    value={senha}
                    maxLength={16}
                    onChange={handleChange}
                ></Input>
                <FlexRow>
                    <Button onClick={handleClick} >Entrar</Button>
                </FlexRow>
            </FormLayout>
        </Hero>
    )
}