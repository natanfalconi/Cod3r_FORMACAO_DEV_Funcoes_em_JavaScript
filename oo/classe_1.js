class Data {
    constructor(dia, mes, ano) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const d1 = new Data(8, 10, 2024)
const d2 = new Data(9, 11, 1985)

console.log(d1, d2)

console.log(typeof Data)