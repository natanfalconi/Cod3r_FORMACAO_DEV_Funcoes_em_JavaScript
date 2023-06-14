const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: false },
    { nome: 'Carderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lápis', qtde: 3, preco: 5.83, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: false },

    { nome: 'Impressxora', qtde: 5, preco: 1000, fragil: true },
    { nome: 'Ipad', qtde: 2, preco: 7500, fragil: true },
    { nome: 'Computador', qtde: 2, preco: 5000, fragil: true },
]

// OBJETICO É USAR OS 3 MÉTIDOS - MINHA VERSÃO

// filter, map, reduce
// 1. Fragil: true = FILTER
const filtrarProdutoFragil = (prod) => {
    return prod.fragil === true
}

// 2. qtde * preco -> total = MAP
const calcularValorTotalProdutos = (prod) => {
    return prod.qtde * prod.preco
}

// 3. media totais = REDUCE
function media(numero) {
    const total = numero.reduce((total, atual) => {
        return total + atual
    })

    return total / numero.length
}


const total = carrinho.filter(filtrarProdutoFragil).map(calcularValorTotalProdutos)
console.log(media(total))


// RESOLUÇÃO DO PROFESSOR - primeira versão

const eFragil = (item) => {
    return item.fragil
}

const totalItem = item => item.qtde * item.preco

// 1ª possibilidade - reduce
const totalizador = (total, valor) => total + valor

const itensFrageis = carrinho.filter(eFragil)
const totalMedia = itensFrageis
    .map(totalItem)
    .reduce(totalizador)

const mediaTotal = totalMedia / itensFrageis.length

console.log(mediaTotal)


