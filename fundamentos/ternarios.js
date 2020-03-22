//Função Arrow
const resultado = nota => nota>=7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(7.0))
console.log(resultado(6.7))

//Sem Função Arrow
const valor =7.1
const status = valor>=7 ? 'Aprovado' : 'Reprovado'

console.log(status)
