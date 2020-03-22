//03)​ Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

// Somente funciona para números inteiros 
// function exponenciacao(base, expoente){
//     let resultado = 1;
//     for (let i=0 ;i<expoente;i++ ){
//         resultado = resultado*base
//     }
//     return resultado
// }
function exponenciacao(base, expoente){
    //return Math.pow(base,expoente) 
    return base ** expoente
}


console.log(exponenciacao(2,10))
