// MOLDE - função construtora
function Produto(nome, preco, desconto = 0) {
    this.nome = nome
    this.preco = preco
    this.desconto = desconto

    this.precoFinal = function () {
        return this.preco * (1 - this.desconto)
    }
}

const prod1 = new Produto('Celular', 5000, 0.15)
const prod2 = new Produto('Monitor', 1233, 0.4)

console.log(prod1.precoFinal())
console.log(prod2.precoFinal())