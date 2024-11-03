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
import LoginContext from "@/contexts/LoginContext/LoginContext";

export default function Login () {
    const loginContext = useContext(LoginContext);
    const { formData, setFormData } = useContext(FormContext)
    const router = useRouter()
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmaSenha, setConfirmaSenha] = useState('')
    const [msgErro, setMsgErro] = useState('')
    const [idVeiculo, setIdVeiculo] = useState()

    const setId = loginContext?.setId;
    
    const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        if (senha != confirmaSenha){
            setMsgErro("As senhas não são iguais!");

            setTimeout(() => {
                setMsgErro("");
            }, 5000);
            return;
        }

        const params = {
            nome: nome,
            cpf: cpf,
            email: email,
            senha: senha
        }

        try {
            const response = await fetch("http://localhost:8080/usuario/cadastro", {
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

                console.log(data.id)

                if (setId) {
                    setId(data.id);
                }

                if (formData.tipoServico != ""){
                    const params2 = {
                        idUsuario: data.id,
                        ano: String(formData.anoModelo),
                        marca: formData.marcaVeiculo,
                        modelo: String(formData.modelo),
                        quilometragem: String(formData.kmRodados)
                    }     
                    
                    console.log(params2);
                    

                    const response = await fetch("http://localhost:8080/veiculo/cadastro", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json; charset=UTF-8",
                        },
                        body: JSON.stringify(params2),
                    });

                    if (!response.ok) {
                        throw new Error(`Erro na requisição: ${response.statusText}`);
                    }
        
                    const data2 = await response.json();
        
                    if (data2) {
                        setIdVeiculo(data2.idVeiculo)
                      
                        const params3 = {
                            idUsuario: data.id,
                            idVeiculo: data2.idVeiculo,
                            tipoOrcamento: formData.tipoServico,
                            status: "Aguardando visita do Cliente",
                            diagnostico: formData.problemaDiagnotisco,
                            solucao: "Aguardar visita do Cliente para obter mais detalhes do problema",
                            preco: formData.preco
                        }

                        console.log(params3);
                        

                        const response = await fetch("http://localhost:8080/orcamento/cadastro", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json; charset=UTF-8",
                            },
                            body: JSON.stringify(params3),
                        });
    
                        if (!response.ok) {
                            throw new Error(`Erro na requisição: ${response.statusText}`);
                        }
                    }
                }

                router.push("/area-cliente");
            }
        } catch (error) {
            console.log("error:", error);
        }
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
                    value={nome}
                    maxLength={16}
                    onChange={handleChange}
                ></Input>
                
                <h4>CPF *</h4>
                <Input 
                    type="number"
                    id="cpf"
                    name="cpf"
                    placeholder="Ex: 456.756.345-77"
                    value={cpf}
                    maxLength={11}
                    onChange={handleChange}
                ></Input>

                <h4>Email *</h4>
                <Input 
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Ex: joao.silva@gmail.com"
                    value={email}
                    onChange={handleChange}
                ></Input>

                <h4>Senha *</h4>
                <Input 
                    type="password"
                    id="senha"
                    name="senha"
                    placeholder="Digite sua senha"
                    value={senha}
                    maxLength={16}
                    onChange={handleChange}
                ></Input>

                <h4>Confirme sua Senha *</h4>
                <Input 
                    type="password"
                    id="confirma-senha"
                    name="confirma-senha"
                    placeholder="Repita sua senha"
                    value={confirmaSenha}
                    maxLength={16}
                    onChange={handleChange}
                ></Input>
                {msgErro && (
                    <div style={{ color: "red", marginBottom: "20px", textAlign: "center" }}>
                        {msgErro}
                    </div>
                )}
                <FlexRow>
                    <Button onClick={handleClick} >Cadastrar</Button>
                </FlexRow>
                <Wrapper>
                    <Link href="/login/">Já tem cadastro? Login</Link>
                </Wrapper>
            </FormLayout>
        </Hero>
    )
}