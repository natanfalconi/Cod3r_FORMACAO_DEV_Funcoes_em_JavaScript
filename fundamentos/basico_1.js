const a = 4
console.log(a) // o log é um exemplo de função

// Function declaration
function bomDia() {
    console.log('Bom dia')
}

bomDia()


// Function Expression

const boaTarde = function () {
    console.log('Boa tarde')
}

// boaTarde()
console.log(boaTarde()) // O retorno aqui é undefined, pois a função não tem um return



// Função com parametros  

function somar(a = 0, b = 0) {
    return a + b
}

let resultado = somar(3, 4)
console.log(resultado)

resultado = somar(3) // não tem o segundo parametro, portanto ele aplicou o "0" que já estava defindo na função
console.log(resultado)