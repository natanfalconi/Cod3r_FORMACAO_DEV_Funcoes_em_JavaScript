// MINHA RESOLUÇÃO ESTÁ NO ARQUIVO 1 - ESSA É A SEGUNDA VERSÃO DO PROFESSOR

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


// 2ª possibilidade - reduce

const media = (acc, valor) => {
    const qtde = acc.qtde + 1
    const total = acc.total + valor
    const media = total / quantidade

    return {
        qtde,
        total,
        media
    }
}

const resultado = carrinho
    .filter(eFragil)
    .map(totalItem)
    .reduce(media, { qtde: 0, total: 0, media: 0 })


console.log(resultado.media)


