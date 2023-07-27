

function setIpServidor(novoIp: string) {
    return (target: any) => { // target é o constructor da nossa classe.
        return class extends target{
            ip = novoIp
        }
    }
}

@setIpServidor("192.664.50.10")
class Servidor {

}

const servidor1 = new Servidor();

console.log(servidor1);