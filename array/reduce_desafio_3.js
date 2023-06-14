// MINHA RESOLUÇÃO ESTÁ NO ARQUIVO 1 - ESSA É A TERCEIRA VERSÃO DO PROFESSOR


const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: false },
    { nome: 'Carderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lápis', qtde: 3, preco: 5.83, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: false },

    { nome: 'Impressxora', qtde: 5, preco: 1000, fragil: true },
    { nome: 'Ipad', qtde: 2, preco: 7500, fragil: true },
    { nome: 'Computador', qtde: 2, preco: 5000, fragil: true },
]


// RESOLUÇÃO DO PROFESSOR
const eFragil = (item) => {
    return item.fragil
}
const totalItem = item => item.qtde * item.preco


// 3ª possibilidade - reduce

const calcularMedia = (total, valor, indice, array) => {
    const tamanho = array.length
    const ultimo = tamanho - 1 === indice
    const novoTotal = total + valor

    return ultimo ? novoTotal / tamanho : novoTotal
}

const media = carrinho
    .filter(eFragil)
    .map(totalItem).reduce(calcularMedia)


console.log(media)


