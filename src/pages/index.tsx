import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";

export default function Home() {

  const clientes = [
    { id: "1", nome: "Ana", idade: 34 },
    { id: "2", nome: "Bia", idade: 28 },
    { id: "3", nome: "Carlos", idade: 45 },
    { id: "4", nome: "Daniel", idade: 23 },
    { id: "5", nome: "Eduardo", idade: 30 },
  ];

  return (
    <div className={
      `
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
       text-white
      `
    }>
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}></Tabela>
      </Layout>
    </div>
  );
}