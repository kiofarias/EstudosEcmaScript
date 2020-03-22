const pai= {nome: 'Pedro' , corDoCabelo:'Preto'}

const filha1 =Object.create(pai)
filha1.nome='Ana'
console.log(filha1.corDoCabelo)

const filha2 = Object.create(pai,{
    nome: {value:'Bia',writable: false,enumerable: true}
})

console.log(filha2)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corDoCabelo}`)


console.log(Object.keys(filha1) , Object.keys(filha2))

for(let key in filha2){
    filha2.hasOwnProperty(key) ? console.log(`Propriedade própria: ${key}`) : console.log(`Propriedade por herança: ${key}`) 
}
