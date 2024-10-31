"use client"

import { AdminLayout } from "@/components/AdminLayout/AdminLayout"
import { SidebarAdmin } from "@/components/SidebarAdmin/SidebarAdmin"

export default function Admin(){
    return(<>
        <AdminLayout>
            <SidebarAdmin>
                <li>Gerenciar Usuários</li>
                <li>Gerenciar Oficinas</li>
                <li>Visualizar Orçamentos</li>
                <li>Sair</li>
            </SidebarAdmin>
        </AdminLayout>
    </>)
}