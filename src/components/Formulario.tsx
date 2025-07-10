import Entrada from "@/components/Entrada";
import Cliente from "@/core/Cliente";
import { useState } from "react";
import Botao from "@/components/Botao";

interface FormularioProps {
    cliente: Cliente,
    cancelar?: () => void
    clienteMudou?: (cliente: Cliente) => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '');
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0);
    const newCli = new Cliente(id, nome, idade)
    const editLabel = id ? "Alterar" : "Salvar"
    return (
        <div>
            {id ? (<Entrada texto="Código" valor={id} somenteLeitura={true}/>) : false}
            <Entrada texto="Nome" valor={nome} valorMudou={valor => setNome(String(valor))}/>
            <Entrada texto="Idade" tipo="number" valor={idade} valorMudou={valor => setIdade(Number(valor))}/>
            <div className="flex justify-end mt-7">
                <Botao cor="blue" className="mr-2" onClick={() => { props.clienteMudou?.(newCli) }}>{editLabel}</Botao>
                <Botao cor="gray" onClick={props.cancelar}>Cancelar</Botao>
            </div>
        </div>
    );
}