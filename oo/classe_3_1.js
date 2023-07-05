// MOLDE!
class Data {
    // dessa forma a informação fica pricada
    #dia = 1
    #mes = 1
    #ano = 1970

    // Getters/Setter

    // seria necessário fazer um get e set para cada private - no caso mês e ano
    get dia() {
        return this.#dia
    }

    set dia(novodia) {
        if (novodia >= 1 && novodia <= 31) {
            return this.#dia = novodia
        }
    }

    exibir() {
        return `${this.#dia}/${this.#mes}/${this.#ano}`
    }
}

// vai gerar um erro, pois o dia e privado "Private field '#dia' must be declared in an enclosing class"
// d1.#dia = "cuidado" 

const d1 = new Data()
d1.dia = 12

console.log(d1.dia)

console.log(d1.exibir())