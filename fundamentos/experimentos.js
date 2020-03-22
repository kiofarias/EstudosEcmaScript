let a = 3
global.b= 123

this.c =  456
this.d = false
this.e = 'Teste'


console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//Criando variável sem usar let e var 
abc = 3 //Não fazer isso
console.log(global.abc)
module.exports = { e: 456 , f: false, g: 'teste' }
console.log(module.exports)


