// 27)​ Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas crianças 
// e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em quantos anos isso acontecerá. 
// Utilize centímetros para as unidades de medida

//FALTA TERMINAR

class crianca{
    constructor(nome,tamanho,txcrescimento){
        this.nome=nome
        this.tamanho=tamanho
        this.txcrescimento=txcrescimento
    }
    compara(other){
        this.tamanho>other.tamanho?console.log(`${this.nome} é maior que ${other.nome}`)
        :console.log(`${other.nome} é maior que ${this.nome}`)
        return this.tamanho>other.tamanho?1:0
    }
    crescimento(){
        this.tamanho*=(1+this.txcrescimento)
    }
}

const cr1 = new crianca('Lara',50,10.5)
const cr2 = new crianca('Cauã',1400,0.5)

function compCriancas(nm1,nm2){
    const maior =nm1.compara(nm2)
    let nm1Tamanho = nm1.tamanho
    let nm2Tamanho = nm2.tamanho
    if (maior===1){
        while(){

        }
    }
    

}