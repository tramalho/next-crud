import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";

export default function Home() {
  const clientes = [
    new Cliente("1", "Ana", 34),
    new Cliente("2", "Bia", 28),
    new Cliente("3", "Carlos", 45),
    new Cliente("4", "Daniel", 23),
    new Cliente("5", "Eduardo", 30),
  ];

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente);
  }
 
  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir... ${cliente.nome}`);
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
        <div className={`flex justify-end`}>
          <Botao cor="green" className="mb-4">Novo Cliente</Botao>
        </div>
        <Tabela 
        clientes={clientes} 
        clienteSelecionado={clienteSelecionado} 
        clienteExcluido={clienteExcluido}
        />
        <Formulario cliente={clientes[0]}/>
      </Layout>
    </div>
  );
}
