function criarProduto(nome, preco){
    return {
        nome: nome,
        preco: preco,
        desconto: 0.1
    }
}

prod1=criarProduto('TV',1200)
prod2 =criarProduto('Iphone',2200)
console.log(prod1,prod2)