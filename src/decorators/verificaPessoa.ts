// Decorator de Método, ele é só chamado nosso metodo for chamado em algum local

export function verificaPessoa(idade: number){
    return (target: any, key: string, descriptor: PropertyDescriptor) => {

        const metodoOriginal = descriptor.value // Salvar nosso metodi original

        //Reescrevendo nosso metodo
        descriptor.value = function () {
            if(idade < 18){
                console.log("Cadastrando menor de idade!")

                //Agora queremos retornar o metodo original para ele ser executado
                return metodoOriginal.apply(this);
            }else {
                console.log("Adulto cadastrado!")

                //Agora queremos retornar o metodo original para ele ser executado
                return metodoOriginal.apply(this)
            }
        }
    }
}
