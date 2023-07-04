// MOLDE - função construtora
function Data(dia, mes, ano) {
    // ATRIBUTOS PUBLICOS
    this.dia = dia
    this.mes = mes
    this.ano = ano
}

const prod1 = new Data(1, 12, 2023) // OBJETO OU INSTANCIA CRIADO

// posso alterar também
prod1.ano = 2030
// output - { dia: 1, mes: 12, ano: 2030 }

console.log(prod1)