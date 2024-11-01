"use client";
import { AdminLayout } from "@/components/AdminLayout/AdminLayout";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import LoginContext from "@/contexts/LoginContext/LoginContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function Admin() {
    const loginContext = useContext(LoginContext);
    const router = useRouter();
    const [nome, setNome] = useState<string>("");

    const handleLogout = () => {
        sessionStorage.removeItem("userToken");
        router.push('/');
    };

    useEffect(() => {
        const fetchUserInfo = async () => {
            // Verifica se loginContext não é null e se id não é vazio
            if (loginContext && loginContext.id) {
                try {
                    const response = await fetch(`http://localhost:8080/usuario/${loginContext.id}`);
                    if (!response.ok) {
                        throw new Error(`Erro ao buscar informações do usuário: ${response.statusText}`);
                    }
                    const data = await response.json();
                    setNome(data.nome);
                } catch (error) {
                    console.error("Erro ao buscar informações do usuário:", error);
                }
            }
        };

        fetchUserInfo();
    }, [loginContext]);

    return (
        <>
            <AdminLayout>
                <Sidebar>
                    <li>
                        <strong>Olá {nome}</strong>
                    </li>
                    <li>Atualizar informações</li>
                    <li>Gerenciar veículos</li>
                    <li>Visualizar Orçamentos</li>
                    <li onClick={handleLogout}>Sair</li>
                </Sidebar>
            </AdminLayout>
        </>
    );
}
