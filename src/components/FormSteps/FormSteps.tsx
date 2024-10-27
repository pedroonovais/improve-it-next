interface FormStepsProps {
    index: number
}

export const FormSteps = ({index}: FormStepsProps) => {
    switch (index){
        case 1:
            return <h2>Vou te fazer algumas perguntas para saber o que você deseja, ok?</h2>
        case 2:
            return (
                <>
                    <h2>Você gostaria de realizar uma <u>manutenção</u> ou <u>revisão</u> em seu veículo?</h2>
                    <div>
                        <input type="radio" name="tipo-servico" id="manutencao" value="manutencao" />
                        <label htmlFor="manutencao">Manutenção: um conserto ou serviço específico.</label>
                    </div>
                    <div>
                        <input type="radio" name="tipo-servico" id="revisao" value="revisao" />
                        <label htmlFor="revisao">Revisão: revisão dos principais itens de seu veículo.</label>
                    </div>
                    <div>
                        <input type="radio" name="tipo-servico" id="manutencao-revisao" value="manutencao-revisao" />
                        <label htmlFor="manutencao-revisao">Ambos (manutenção + revisão).</label>
                    </div>
                </>  
            )
        case 3:
            return (
                <>
                    <h2>Escolha o serviço que deseja realizar (pode escolher mais de um):</h2>
                </>
            )
        default:

    }
}