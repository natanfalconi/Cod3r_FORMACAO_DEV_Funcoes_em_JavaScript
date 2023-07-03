const produto = {
    nome: 'Ipad',
    marca: 'Apple',
    anoFabricacao: 2023,
    preco: 7500,
    fragil: true,
    desconto: 0.15,
    precoComDesconto: function () {
        return this.preco * (1 - this.desconto)
    }
}

console.log(produto.precoComDesconto())
