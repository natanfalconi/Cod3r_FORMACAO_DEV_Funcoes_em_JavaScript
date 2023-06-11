
function bomDia() {
    console.log('Bom dia')
}


const boaTarde = function () {
    console.log('Boa tarde')
}


// uma função como parametro para outra função
function executar(x) {
    if (typeof x === 'function') {
        x()
    }
}

executar(1) // Não esecuta, pois não é uma funcão
executar(bomDia)
executar(boaTarde)

// retornar uma função a partir de outra função

function potencia(exp) {
    return function (base) {
        return Math.pow(base, exp)
    }
}

const aoQuadrado = potencia(2)
console.log(aoQuadrado(3))

const aoCubo = potencia(3)
console.log(aoCubo(4))

// Ou pode fazer tudo em uma unica chamada
const resultado = potencia(3)(10) // como uma função retorna a outra, tem como chamra dessa forma
console.log(resultado)