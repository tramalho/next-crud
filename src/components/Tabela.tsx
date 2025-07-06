import Cliente from "@/core/Cliente";
import { IconeEditar, IconeRemover } from "./Icones";

interface TabelaProps {
  clientes: Cliente[];
  clienteSelecionado?: (cliente: Cliente) => void;
  clienteExcluido?: (cliente: Cliente) => void;
}

interface BotaoAcaoProps {
  acao?: (cliente: Cliente) => void;
  icone: React.ReactNode;
  color: string;
  cliente: Cliente;
}

export default function Tabela(props: TabelaProps) {

  const hasActions = props.clienteSelecionado || props.clienteExcluido;

  function renderizarCabecalho() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
      { hasActions ? <th className="text-center p-4">Ações</th>  : false}       
      </tr>
    );
  }

  function renderizarDados() {
    return props.clientes?.map((cliente: Cliente, i) => {
      return (
        <tr
          key={cliente.id}
          className={`${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}
        >
          <td className="text-left p-4">{cliente.id}</td>
          <td className="text-left p-4">{cliente.nome}</td>
          <td className="text-left p-4">{cliente.idade}</td>
          {renderizarAcoes(cliente)}
        </tr>
      );
    });
  }

  function renderizarAcoes(cliente: Cliente) {
    const editar: BotaoAcaoProps = {
      color: "text-green-600",
      icone: IconeEditar,
      acao: props.clienteSelecionado,
      cliente: cliente,
    };
    const excluir: BotaoAcaoProps = {
      color: "text-red-500",
      icone: IconeRemover,
      acao: props.clienteExcluido,
      cliente: cliente,
    };

    const acaoEditar = props.clienteSelecionado ? botaoAcao(editar) : false;
    const acaoExcluir = props.clienteExcluido ? botaoAcao(excluir) : false;
    return (
      <td className="flex justify-center">
        {acaoEditar}
        {acaoExcluir}
      </td>
    );
  }

  function botaoAcao(props: BotaoAcaoProps) {
    return (
      <button onClick={() =>  props?.acao?.(props.cliente)}
        className={`
                  flex justify-center items-center
                  ${props.color}
                  rounded-full p-2 m-1
                  hover:bg-purple-50
        `}
      >
        {props.icone}
      </button>
    );
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className={`
               bg-gradient-to-r from-purple-500 to-purple-800
             text-gray-100
                 `}
      >
        {renderizarCabecalho()}
      </thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  );
}
