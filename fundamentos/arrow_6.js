//somar(3)(4)(5)

// funções arrow também podem retornar outras funções, também arrow
const somar = (a) => {
    return function (b) { // pode ter chamada de funções normalmente
        return (c) => a + b + c
    }
}

const resultado = somar(3)(4)(5)
console.log(resultado)


// VERSÃO RESUMIDA
const somar2 = (a) => (b) => (c) => a + b + c //O RETURN DAS 3 FUNÇÕES ESTÃO IMPLICITOS

console.log(somar2(3)(4)(10))

