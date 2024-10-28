import { createContext, useState, ReactNode } from "react";

interface FormData {
    tipoServico: string;
    servicosSelecionados: string[];
    seguradoPorto: boolean | null;
    marcaVeiculo: string;
    anoFabricacao: number | null;
    anoModelo: number | null;
    modelo: string;
    cep: string;
    logradouro: string;
    kmRodados: string;
    problemaDiagnotisco: string;
    descProblemaDiagnostico: string;
}

interface FormContextProps {
    formData: FormData;
    setFormData: (data: FormData) => void;
}

interface FormProviderProps {
    children: ReactNode;
}

const defaultFormData: FormData = {
    tipoServico: "",
    servicosSelecionados: [],
    seguradoPorto: null,
    marcaVeiculo: "",
    anoFabricacao: null,
    anoModelo: null,
    modelo: "",
    cep: "",
    logradouro: "",
    kmRodados: "",
    problemaDiagnotisco: "",
    descProblemaDiagnostico: "",
};

const defaultContextValue: FormContextProps = {
    formData: defaultFormData,
    setFormData: () => {},
};

export const FormContext = createContext<FormContextProps>(defaultContextValue);

export const FormProvider = ({ children }: FormProviderProps) => {
    const [formData, setFormData] = useState<FormData>(defaultFormData);

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormContext.Provider>
    );
};
