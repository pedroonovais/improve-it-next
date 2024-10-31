"use client"

import { AdminLayout } from "@/components/AdminLayout/AdminLayout"
import { Sidebar } from "@/components/Sidebar/Sidebar"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Admin(){
    const router = useRouter()

    const handleClickSair = () => {
        router.push('/')
    }
    
    return(<>
        <AdminLayout>
            <Sidebar>
                <li>Gerenciar Usuários</li>
                <li>Gerenciar Oficinas</li>
                <li>Visualizar Orçamentos</li>
                <li onClick={handleClickSair} >Sair</li>
            </Sidebar>
        </AdminLayout>
    </>)
}