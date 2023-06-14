const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 4, preco: 649.50 },
    { nome: 'Carderno', qtde: 4, preco: 27.10 },
    { nome: 'Lápis', qtde: 3, preco: 5.83 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

// OBJETIVO É DEIXAR O CÓDIGO MAIS FÁCIL PARA REUTILIZAR, SEPARANDO AS FUNÇÕES E SUAS ATRIBUIÇÕES

const totalProduto = produto => produto.qtde * produto.preco
const totalizar = (total, valor) => total + valor

const totalCarrinho = (total, produto) => {
    return total + (produto.qtde * produto.preco)
}

const precoTotal = carrinho.map(totalProduto).reduce(totalizar)
console.log(precoTotal)