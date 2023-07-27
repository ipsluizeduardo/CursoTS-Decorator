/*
        DECORATORS 
Class
Propriedade
Metodos
Parametros( pouco utilizado)
Getters / Setters(pouco utilizado)

*/

// target = receber o constructor da nossa classe.
// function logInfo(target: any) {
//     console.log("Sistema on!")
// }

// Padrao factory (fabrica) | função que vai retornar a criação do decorator
function logInfo(message: string) {
    return (target: any) => {
        console.log(`${message}, ${target}`)
    }
}

@logInfo("Servidor esta rodando!")
class Sistema {

}