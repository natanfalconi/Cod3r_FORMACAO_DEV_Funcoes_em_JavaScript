// MOLDE - função construtora
function Data(dia, mes, ano) {
    this.dia = dia
    this.mes = mes
    this.ano = ano

    // Método de instancia publico (comportamento)
    this.exibir = function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const prod1 = new Data(1, 12, 2024)
const d2 = new Data(1, 12, 2025)

console.log(prod1.exibir())
console.log(d2.exibir())