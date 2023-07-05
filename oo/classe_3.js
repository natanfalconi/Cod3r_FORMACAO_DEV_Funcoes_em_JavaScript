// MOLDE!
class Data {
    // dessa forma a informação fica pricada
    #dia = 1
    #mes = 1
    #ano = 1970

    // Getters/Setter

    getDia() {
        return this.#dia
    }

    setDia(novodia) {
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
console.log(d1.getDia())
console.log(d1.setDia('ele não vai aceitar outro valor')) // posso validar dentro do método
console.log(d1.exibir())