// 19) O cardápio de uma lanchonete é o seguinte:
// Código Descrição do Produto Preço 
// 100 Cachorro Quente R$ 3, 00
// 200 Hambúrguer Simples R$ 4, 00
// 300 Cheeseburguer R$ 5, 50
// 400 Bauru R$ 7, 50
// 500 Refrigerante R$ 3, 50
// 600 Suco R$ 2, 80
// Implemente uma  função que receba como parâmetros o código do item pedido,
//     a quantidade e calcule o valor a ser pago por aquele lanche.
// Considere que a cada execução somente será calculado um item.
// Use o comando switch. 
//    Crie um caso default para produto não existente.

function calcularPedido(item,qtd){
    switch (item) {
        case 100:
            console.log( qtd* 3)
            break
        case 200:
            console.log( qtd * 4)
            break
        case 300:
            console.log( qtd * 5.5)
            break
        case 400:
            console.log( qtd * 7.5)
            break
        case 500:
            console.log( qtd * 3.5)
            break
        case 600:
            console.log( qtd * 2.8)
            break
        default:
            console.log('Produto não existente!')
    }    
}

calcularPedido(100,2)
calcularPedido(200,2)
calcularPedido(300,2)
calcularPedido(400,2)
calcularPedido(500,2)
calcularPedido(600,2)
calcularPedido(700,2)