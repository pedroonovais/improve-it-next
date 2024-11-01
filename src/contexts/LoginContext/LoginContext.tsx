"use client";
import { createContext, useState } from "react";

const LoginContext = createContext<{
    id: string;
    setId: (id: string) => void;
} | null>(null);

interface LoginContextProviderProps{
    children: React.ReactNode
}

const LoginContextProvider = ({children}: LoginContextProviderProps) => {
    const [id, setId] = useState<string>("")

    return (
        <LoginContext.Provider value={{
            id,
            setId,
        }}>
            {children}
        </LoginContext.Provider>
    )
}

export {LoginContextProvider}
export default LoginContext;