"use client";
import { Button } from "@/components/Button/Button";
import { FlexRow } from "@/components/FlexRow/FlexRow";
import { FormLayout } from "@/components/FormLayout/FormLayout";
import { Hero } from "@/components/Hero/Hero";
import { Select } from "@/components/Select/Select";
import { FormContext } from "@/contexts/FormContext/FormContext";
import { useRouter } from "next/navigation";
import { useContext, useState, useEffect } from "react";

export default function VehicleData() {
    const { formData, setFormData } = useContext(FormContext);
    const router = useRouter();

    const [selecionouCampoMarca, setSelecionouCampoMarca] = useState(false);
    const [selecionouCampoModelo, setSelecionouCampoModelo] = useState(false);
    const [listModelosVeiculo, setListModelosVeiculo] = useState<string[]>([]);
    const [listaAnosVeiculo, setListaAnosVeiculo] = useState<string[]>([]);
    const [codMarca, setCodMarca] = useState<number | null>(null);

    const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        router.push("/atendimento/cep");
    };

    const handleBack = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        router.push("/atendimento/confirmar-cliente-porto");
    };

    const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        switch (event.target.id) {
            case "marca":
                setListModelosVeiculo([]);
                setListaAnosVeiculo([]);
                setSelecionouCampoModelo(false);

                const modeloSelect = document.getElementById("modelo") as HTMLSelectElement;
                const anoModelo = document.getElementById("ano-modelo") as HTMLSelectElement;
                if (modeloSelect && anoModelo) {
                    modeloSelect.selectedIndex = 0;
                    anoModelo.selectedIndex = 0;
                }

                setFormData({ ...formData, marcaVeiculo: event.target.value });
                await getModelosVeiculoFipe(event.target.value);
                setSelecionouCampoMarca(true);
                break;
            case "ano-fabricacao":
                setFormData({ ...formData, anoFabricacao: Number(event.target.value) });
                break;
            case "ano-modelo":
                setFormData({ ...formData, anoModelo: Number(event.target.value) });
                break;
            case "modelo":
                const value = event.target.value;
                const codModelo = parseInt(value.split("?")[0].trim());
                const nomeModelo = value.split("?")[1].trim();
                setFormData({ ...formData, modelo: nomeModelo });
                await getAnoModelo(codMarca, codModelo);
                setSelecionouCampoModelo(true);
                break;
        }
    };

    const getModelosVeiculoFipe = async (marca: string) => {
        const url = "https://parallelum.com.br/fipe/api/v1/carros/marcas";
        let codigoMarca = null;

        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                for (let i = 0; i < data.length; i++) {
                    const codigo = data[i].codigo || "N/A";
                    const nomeMarca = data[i].nome || "N/A";
                    if (nomeMarca === marca) {
                        codigoMarca = parseInt(codigo);
                        setCodMarca(parseInt(codigo));
                        break;
                    }
                }
                if (codigoMarca) {
                    const url2 = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${codigoMarca}/modelos`;
                    const response2 = await fetch(url2);
                    if (response2.ok) {
                        const data2 = await response2.json();
                        const modelos = await data2.modelos.map(
                            (modelo: { codigo: number; nome: string }) => `${modelo.codigo} ? ${modelo.nome}`
                        );
                        setListModelosVeiculo(modelos);
                    }
                }
            }
        } catch (error) {
            console.error("Erro ao buscar o código da marca: ", error);
        }
    };

    const getAnoModelo = async (codMarca: number | null, codModelo: number) => {
        if (codMarca === null) return; // Verifica se codMarca é válido
        const url = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${codMarca}/modelos/${codModelo}/anos`;

        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setListaAnosVeiculo(data.map((ano: { codigo: string; nome: string }) => ano.nome));
            }
        } catch (error) {
            console.error("Erro ao buscar os anos do modelo: ", error);
        }
    };

    return (
        <Hero strImg="/bannerAtendimento.jpg" height="100vh">
            <FormLayout>
                <h2>Por favor, informe os dados abaixo para identificação do seu veículo:</h2>
                <Select name="marca" id="marca" onChange={handleChange}>
                    <option value="" disabled selected>
                        Marca
                    </option>
                    <option value="GM - Chevrolet">GM - Chevrolet</option>
                    <option value="Ford">Ford</option>
                    <option value="Fiat">Fiat</option>
                    <option value="Volkswagen">Volkswagen</option>
                    <option value="Citroën">Citroën</option>
                    <option value="Honda">Honda</option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="Mitsubishi">Mitsubishi</option>
                    <option value="Nissan">Nissan</option>
                    <option value="Peugeot">Peugeot</option>
                    <option value="Renault">Renault</option>
                    <option value="Toyota">Toyota</option>
                </Select>
                <Select name="modelo" id="modelo" onChange={handleChange} disabled={!selecionouCampoMarca}>
                    <option value="" disabled selected>
                        Modelo
                    </option>
                    {listModelosVeiculo.map((item) => (
                        <option key={item} value={item}>
                            {item.split("?")[1].trim()}
                        </option>
                    ))}
                </Select>
                <Select name="ano-modelo" id="ano-modelo" onChange={handleChange} disabled={!selecionouCampoModelo}>
                    <option value="" disabled selected>
                        Ano
                    </option>
                    {listaAnosVeiculo.map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </Select>

                <FlexRow>
                    <Button bgColor="white" txtColor="var(--primary-color)" onClick={handleBack}>
                        Voltar
                    </Button>
                    <Button onClick={handleNext}>Continuar</Button>
                </FlexRow>
            </FormLayout>
        </Hero>
    );
}
