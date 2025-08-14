import Cliente from "@/core/Cliente";
import ClienteRepositorio from "@/core/ClienteRepositorio";
import { dataBase } from "../config";
import  { addDoc, collection, deleteDoc, doc, DocumentReference, getDoc, getDocs, QueryDocumentSnapshot, setDoc, SnapshotOptions } from "firebase/firestore";

export default class ColecaoCliente implements ClienteRepositorio {
    
    #conversor = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade
            }
        },
        fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Cliente {
            const data = snapshot.data(options);
            return new Cliente(
                data.id,
                data.nome,
                data.idade
            );
        }
    }

    #colecao() {
        return collection(dataBase, 'clientes').withConverter(this.#conversor);
    }
    
    async salvar(cliente: Cliente): Promise<Cliente> {
        if (cliente.id) {
            await setDoc(doc(this.#colecao(), cliente.id), cliente);
            return cliente;
        }
        const docRef = await addDoc(this.#colecao(), cliente);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) throw new Error("Cliente not found after saving.");
        return docSnap.data();
    }

    async excluir(cliente: Cliente): Promise<void> {
        return await deleteDoc(doc(this.#colecao(), cliente.id));
    }

    async obterTodos(): Promise<Cliente[]> {
        const col = this.#colecao()
        const query = await getDocs(col);
        return query.docs.map(doc => doc.data()) ?? [];
    }

}