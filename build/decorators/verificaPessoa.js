"use strict";
// Decorator de Método, ele é só chamado nosso metodo for chamado em algum local
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificaPessoa = void 0;
function verificaPessoa(idade) {
    return (target, key, descriptor) => {
        const metodoOriginal = descriptor.value; // Salvar nosso metodi original
        //Reescrevendo nosso metodo
        descriptor.value = function () {
            if (idade < 18) {
                console.log("Cadastrando menor de idade!");
                //Agora queremos retornar o metodo original para ele ser executado
                return metodoOriginal.apply(this);
            }
            else {
                console.log("Adulto cadastrado!");
                //Agora queremos retornar o metodo original para ele ser executado
                return metodoOriginal.apply(this);
            }
        };
    };
}
exports.verificaPessoa = verificaPessoa;
