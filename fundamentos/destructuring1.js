// novo recurso ES2015

const pessoa = {
    nome: 'Ana',
    idade:5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade} = pessoa

console.log(nome, idade)

const {nome: n, idade: i} = pessoa

console.log(n,i)

const { sobrenome, bemHumorada = true, nome: n2} = pessoa

console.log(sobrenome, bemHumorada ,n2)

const {endereco: {logradouro , numero , cep }} = pessoa

console.log(logradouro, numero,cep)

//const {conta:{ag,nm}} = pessoa // Erro na tentativa de acesso a estrutura aninhada não existente "conta", 
//diferente de acessar estrutura aninhada existente "endereco" mas item não existente dentro da estrutura "cep".
