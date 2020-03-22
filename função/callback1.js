const fabricantes = ['Mercedez','BMW','Audi']

function imprime(nome,indice,/*a default matriz inteira*/){
    console.log(`${indice+1}. ${nome}`)
}

fabricantes.forEach(imprime)
fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})
fabricantes.forEach(fabricante=>console.log(fabricante))