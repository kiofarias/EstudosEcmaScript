console.log(soma(3,4))
//console.log(sub(4,3))//Somente pode ser usada após a declaração da função
//console.log(mult(2,4))//Somente pode ser usada após a declaração da função


//function declaration

function soma(x,y){
    return x+y
}
// function expression

const sub = function(x,y) {
    return x-y
}

//named function expression
const mult = function mult(x,y){
    return x*y
}

console.log(sub(4,3))//Somente pode ser usada após a declaração da função
console.log(mult(2,4))//Somente pode ser usada após a declaração da função
