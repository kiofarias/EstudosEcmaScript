// 17)​ Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:
//   Plano Aumento A 10% B 15% C 20% 
//   Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. 
//   Use a estrutura switch e faça um caso default que indique que o plano é inválido. 

function aumentoSalario(plnTrabalho, salarioAtual) {
    switch (plnTrabalho) {
        case 'A':
            console.log(`Seu novo salário é ${salarioAtual * (1.1)}`)
            break
        case 'B':
            console.log(`Seu novo salário é ${salarioAtual * (1.15)}`)
            break
        case 'C':
            console.log(`Seu novo salário é ${salarioAtual * (1.2)}`)
            break
        default:
            console.log('Plano de trabalho inválido')
    }
}

aumentoSalario('A',1000)
aumentoSalario('B',1000)
aumentoSalario('C',1000)
aumentoSalario('D',1000)