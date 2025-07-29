import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import { useState } from "react";

export default function Home() {
  const [cliente, setCliente] = useState<Cliente>(new Cliente());
  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");

  const clientes = [
    new Cliente("1", "Ana", 34),
    new Cliente("2", "Bia", 28),
    new Cliente("3", "Carlos", 45),
    new Cliente("4", "Daniel", 23),
    new Cliente("5", "Eduardo", 30),
  ];

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    setVisivel("form");
    console.log(`Selecionar... ${cliente.nome}`);
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir... ${cliente.nome}`);
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente);
    setVisivel("tabela");
  }

  function renderTabela() {
    return (
      <>
        <div className={`flex justify-end`}>
          <Botao
            cor="green"
            className="mb-4"
            onClick={() => clienteSelecionado(new Cliente())}
          >
            Novo Cliente
          </Botao>
        </div>
        <Tabela
          clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        />
      </>
    );
  }

  return (
    <div
      className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
       text-white
      `}
    >
      <Layout titulo="Cadastro Simples">
        {visivel === "form" ? (
          <Formulario 
          cliente={cliente} 
          cancelar={() => setVisivel("tabela")}
          clienteMudou={salvarCliente}
          />
        ) : (
          renderTabela()
        )}
      </Layout>
    </div>
  );
}
