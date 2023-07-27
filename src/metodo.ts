// Decorator de Método, ele é só chamado nosso metodo for chamado em algum local
import { verificaPessoa  } from "./decorators/verificaPessoa";

class Pessoa {
    nome: string;

    constructor(nome: string){
        this.nome = nome;
    }

    @verificaPessoa(15)
    cadastrarPessoa(){
        console.log(`Bem vindo ${this.nome} ao sistema.`)
    }
}

const pessoa1 = new Pessoa("Luiz E");

pessoa1.cadastrarPessoa();