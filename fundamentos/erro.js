
function tratarErroELancar(erro){
//    throw new Error('...')
//    throw 10
//    throw true
//    throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function iprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase()+'!!!')
    } catch(e) {
        tratarErroELancar(e)
//         console.log('erro')
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Francisco'}

iprimirNomeGritado(obj)

//console.log('teste')


