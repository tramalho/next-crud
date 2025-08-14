import Cliente from "./Cliente";

export default interface ClienteRepositorio {

    salvar(params: Cliente): Promise<Cliente> 
    excluir(params: Cliente): Promise<void> 
    obterTodos(): Promise<Cliente[]>
}