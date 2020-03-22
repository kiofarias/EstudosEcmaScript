// 20)​ Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas 
// para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. 
// Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve informar
// apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 
// 1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. 



function minCedulas(numero) {
    const mat = [100, 50, 20, 10, 5, 1]
    let matQtd = []
    let prx = numero
    mat.forEach(nm => {
        (prx % nm === prx) ? matQtd.push(0) : matQtd.push(Math.trunc(prx / nm))
        prx = prx % nm
    })
    let index = 0
    matQtd.forEach(nm=>{
        (nm!==0)?console.log(`${nm} nota(s) de R$ ${mat[index]}`):0
        index++
    })
}

minCedulas(243)