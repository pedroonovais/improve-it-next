"use client"
import { Hero } from "@/components/Hero/Hero";
import { FormLayout } from "@/components/FormLayout/FormLayout";
import { FlexRow } from "@/components/FlexRow/FlexRow";
import { Button } from "@/components/Button/Button";
import { useContext, useState } from "react";
import { Input } from "@/components/Input/Input";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Wrapper } from "@/components/Wrapper/Wrapper";

import LoginContext from "@/contexts/LoginContext/LoginContext";

export default function Login () {
    const loginContext = useContext(LoginContext);
    const router = useRouter();
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const setId = loginContext?.setId;

    const handleSendLogin = async (params: object) => {
        try {
            const response = await fetch("http://localhost:8080/usuario/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify(params),
            });

            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.statusText}`);
            }

            const data = await response.json();

            if (data) {
                sessionStorage.setItem("userToken", JSON.stringify(data));
                if (setId) {
                    setId(data.id);
                }
                router.push("/area-cliente");
            }
        } catch (error) {
            console.log("error:", error);
        }
    };
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const params = {
            login: login,
            senha: senha
        };

        handleSendLogin(params);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.id === "login") {
            setLogin(event.target.value);
        } else {
            setSenha(event.target.value);
        }
    };
    
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
                />
                <Input 
                    type="password"
                    id="senha"
                    name="senha"
                    placeholder="Digite sua senha"
                    value={senha}
                    maxLength={16}
                    onChange={handleChange}
                />
                <FlexRow>
                    <Button onClick={handleClick}>Entrar</Button>
                </FlexRow>
                <Wrapper>
                    <Link href="/cadastro/">Criar conta</Link>
                </Wrapper>
            </FormLayout>
        </Hero>
    );
}
