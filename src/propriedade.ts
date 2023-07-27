// Propriedade Decorator

function validaNome(tamanho: number) {
    //target = constructor da nossa classe 
    //key = nossa propriedade

    return (target: any, key: string) => {
        let valor = target[key];

        const getter = () => valor;

        const setter = (value: string) => {
            if(value === "") {
                console.log("Não pode deixar em branco!")
            }else if(value.length < tamanho) {
                console.log("Não pode criar com pouco caractere!")
            }else {
                valor = value;
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        })
    }
}

class Jogo {

    @validaNome(5)
    nome: string;

    @validaNome(4)
    titulo: string;

    constructor(nome: string, titulo: string) {
        this.nome = nome;
        this.titulo = titulo;
    }
}

const jogo1 = new Jogo("GTA34", "Jogo")

console.log(jogo1.nome)