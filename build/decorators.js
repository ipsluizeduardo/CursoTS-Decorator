/*
        DECORATORS
Class
Propriedade
Metodos
Parametros( pouco utilizado)
Getters / Setters(pouco utilizado)

*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// target = receber o constructor da nossa classe.
// function logInfo(target: any) {
//     console.log("Sistema on!")
// }
// Padrao factory (fabrica) | função que vai retornar a criação do decorator
function logInfo(message) {
    return (target) => {
        console.log(`${message}, ${target}`);
    };
}
let Sistema = class Sistema {
};
Sistema = __decorate([
    logInfo("Servidor esta rodando!")
], Sistema);
