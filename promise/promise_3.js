const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

const promessa = new Promise((resolve) => {
    resolve(['Ana', 'Carlos', 'Pedro', 'Daniel'])
})

// refatoração, ainda continua tudo funcionando
// a diferenã é que aqui eu passo a referencia da função diretamente
promessa
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)


console.log('fim')