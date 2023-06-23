const primeiroElemento = arrayOuString => arrayOuString[0]

const promessa = new Promise((resolve) => {
    resolve(['Ana', 'Carlos', 'Pedro', 'Daniel'])
})


// processamento sequencial usando o then - exemplo / assincronos
promessa
    .then(array => primeiroElemento(array))
    .then(elemento => primeiroElemento(elemento))
    .then(texto => texto.toLowerCase())
    .then(resultado => console.log(resultado))


console.log('fim')