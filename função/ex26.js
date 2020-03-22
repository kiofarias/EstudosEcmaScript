// 26)​ Fazer um programa para encontrar todos os pares entre 1 e 100.

let cont = 1
console.log('Números pares de 1 a 100')
let numeros=[]
while(cont<101){
    if(cont%2==0){
        numeros.push(cont)
    }
    cont++
}
console.log(numeros)