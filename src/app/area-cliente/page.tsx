"use client";
import { AdminLayout } from "@/components/AdminLayout/AdminLayout";
import { Button } from "@/components/Button/Button";
import { DivOrcamento } from "@/components/DivOrcamento/DivOrcamento";
import { FormLayout } from "@/components/FormLayout/FormLayout";
import { Input } from "@/components/Input/Input";
import { Section } from "@/components/Section/Section";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import LoginContext from "@/contexts/LoginContext/LoginContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

interface Orcamento {
    idOrcamento: string; 
    preco: number;
    nomeUsuario: string;
    modeloVeiculo: string;
    marcaVeiculo: string;
    solucao: string;
    diagnostico: string;
    tipoOrcamento: string;
    status: string;
}

interface Veiculo {
    idVeiculo: string; // Alterado para string
    marcaVeiculo: string;
    modeloVeiculo: string;
    anoVeiculo: string;
    quilometragemVeiculo: string;
}

export default function Admin() {
    const loginContext = useContext(LoginContext);
    const router = useRouter();
    const [nome, setNome] = useState<string>("");

    const [isUltimosOrcamentos, setIsUltimosOrcamentos] = useState<boolean>(true);
    const [orcamentos, setOrcamentos] = useState<Orcamento[]>([]);
    
    const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
    const [atualizarVeiculos, setAtualizarVeiculos] = useState<boolean>(false);

    const [mensagemSucesso, setMensagemSucesso] = useState<string>("");

    const handleLogout = () => {
        sessionStorage.removeItem("userToken");
        router.push("/");
    };

    const loadOrcamentos = async () => {
        try {
            const response = await fetch(
                `http://localhost:8080/orcamento/idUsuario/${loginContext?.id}`
            );
            const data = await response.json();
            setOrcamentos(data);
        } catch (error) {
            console.log(error);
        }
    };

    const loadVeiculos = async () => {
        try {
            const response = await fetch(
                `http://localhost:8080/veiculo/idUsuario/${loginContext?.id}`
            );
            const data = await response.json();
            setVeiculos(
                data.map((item: any) => ({
                    ...item,
                    idVeiculo: String(item.idVeiculo), // Convertendo idVeiculo para string
                }))
            );
        } catch (error) {
            console.log(error);
        }
    };

    const handleExibirAtualizacaoVeiculos = () => {
        setIsUltimosOrcamentos(false);
        loadVeiculos();
        setAtualizarVeiculos(true);
    };

    const handleExibirOrcamentos = () => {
        setAtualizarVeiculos(false);
        setIsUltimosOrcamentos(true);
    };

    const handleVeiculoChange = (idVeiculo: string, campo: string, valor: string) => {
        setVeiculos((prevVeiculos) =>
            prevVeiculos.map((veiculo) =>
                veiculo.idVeiculo === idVeiculo
                    ? { ...veiculo, [campo]: valor }
                    : veiculo
            )
        );
    };

    const handleUpdateVeiculo = async (veiculo: Veiculo) => {
        const veiculoAtualizado = {
            ...veiculo,
            anoVeiculo: String(veiculo.anoVeiculo),
            idVeiculo: String(veiculo.idVeiculo),
        };
        
        
        try {
            const response = await fetch(`http://localhost:8080/veiculo/atualizar/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(veiculoAtualizado),
            });

            if (response.ok){
                setMensagemSucesso("Veículo atualizado com sucesso!");

                setTimeout(() => {
                    setMensagemSucesso("");
                }, 3000);
            } else {
                console.log(response);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const sessionData = sessionStorage.getItem("userToken");

        if (!sessionData) {
            router.push("/login");
            return;
        }

        const userData = JSON.parse(sessionData);
        loginContext?.setId(userData.id);

        const fetchUserInfo = async () => {
            if (loginContext && loginContext.id) {
                try {
                    const response = await fetch(
                        `http://localhost:8080/usuario/${loginContext.id}`
                    );
                    if (!response.ok) {
                        console.log(response);
                    }
                    const data = await response.json();
                    setNome(data.nome);
                } catch (error) {
                    console.error("Erro ao buscar informações do usuário:", error);
                }
            }
        };

        fetchUserInfo();
        loadOrcamentos();
    }, [loginContext, router]);

    return (
        <AdminLayout>
            <Sidebar>
                <li>
                    <strong>Olá {nome}</strong>
                </li>
                <li onClick={handleExibirAtualizacaoVeiculos}>Gerenciar veículos</li>
                <li onClick={handleExibirOrcamentos}>Visualizar Orçamentos</li>
                <li onClick={handleLogout}>Sair</li>
            </Sidebar>
            <Section>
                {mensagemSucesso && (
                    <div style={{ color: "green", marginBottom: "20px" }}>
                        {mensagemSucesso}
                    </div>
                )}
                {isUltimosOrcamentos && (
                    <>
                        <h3>Últimos orçamentos:</h3>
                        {orcamentos.map((item) => (
                            <DivOrcamento key={item.idOrcamento}>
                                <h4><strong>Orçamento #{item.idOrcamento}</strong></h4>
                                <span>Modelo do Veículo: {item.modeloVeiculo}</span>
                                <br />
                                <span>Marca do Veículo: {item.marcaVeiculo}</span>
                                <br />
                                <span>Nome do Usuário: {item.nomeUsuario}</span>
                                <br />
                                <span>Preço R$: {item.preco},00</span>
                                <br />
                                <span>Status: {item.status}</span>
                                <br />
                                <span>Diagnóstico: {item.diagnostico}</span>
                                <br />
                                <span>Tipo de Orçamento: {item.tipoOrcamento}</span>
                                <br />
                            </DivOrcamento>
                        ))}
                    </>
                )}
                {atualizarVeiculos && (
                    <>
                        <h3>Atualizar veículos:</h3>
                        {veiculos.map((veiculo) => (
                            <DivOrcamento key={veiculo.idVeiculo}>
                                <FormLayout>
                                    <label htmlFor="marca-veiculo">Marca:</label>
                                    <Input
                                        type="text"
                                        id="marca-veiculo"
                                        name="marca-veiculo"
                                        value={veiculo.marcaVeiculo}
                                        onChange={(e) =>
                                            handleVeiculoChange(veiculo.idVeiculo, "marcaVeiculo", e.target.value)
                                        }
                                    />

                                    <label htmlFor="modelo-veiculo">Modelo:</label>
                                    <Input
                                        type="text"
                                        id="modelo-veiculo"
                                        name="modelo-veiculo"
                                        value={veiculo.modeloVeiculo}
                                        onChange={(e) =>
                                            handleVeiculoChange(veiculo.idVeiculo, "modeloVeiculo", e.target.value)
                                        }
                                    />

                                    <label htmlFor="ano-veiculo">Ano:</label>
                                    <Input
                                        type="text"
                                        id="ano-veiculo"
                                        name="ano-veiculo"
                                        value={veiculo.anoVeiculo}
                                        onChange={(e) =>
                                            handleVeiculoChange(veiculo.idVeiculo, "anoVeiculo", e.target.value)
                                        }
                                    />

                                    <label htmlFor="quilometragem-veiculo">Quilometragem:</label>
                                    <Input
                                        type="text"
                                        id="quilometragem-veiculo"
                                        name="quilometragem-veiculo"
                                        value={veiculo.quilometragemVeiculo}
                                        onChange={(e) =>
                                            handleVeiculoChange(veiculo.idVeiculo, "quilometragemVeiculo", e.target.value)
                                        }
                                    />

                                    <button type="button" onClick={() => handleUpdateVeiculo(veiculo)}>
                                        Atualizar
                                    </button>
                                </FormLayout>
                            </DivOrcamento>
                        ))}
                    </>
                )}
            </Section>
        </AdminLayout>
    );
}
