const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem Callback
const notasBaixas1=[]
for (let i in notas){
    if (notas[i]<7){
        notasBaixas1.push(notas[i])
    }

}

console.log(notasBaixas1)

//Com Callback

const notasBaixas2 = notas.filter(function(a){
    return a<7
})
console.log(notasBaixas2)

const notasBaixas3 = notas.filter(a=> a<7)
console.log(notasBaixas3)


const funcao = nota=>nota<7
const notasBaixas4 = notas.filter(funcao)
console.log(notasBaixas4)
