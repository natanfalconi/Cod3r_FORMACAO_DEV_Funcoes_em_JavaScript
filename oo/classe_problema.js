// MOLDE!
class Data {
    constructor(dia, mes, ano) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }

    exibir() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }

}


// o problema atualmente é que é possível o dado ficar incosistente
const d1 = new Data(45, 79, -649)

console.log(d1)
console.log(d1.exibir())

console.log(typeof Data) 