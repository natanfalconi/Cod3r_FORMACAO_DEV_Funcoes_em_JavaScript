const executar = (fn) => fn() // return implicito

const bomDia = () => 'Bom dia' // return implicito

console.log(executar(bomDia))

// ou por ser chanado de outra fornma - abaixo

const resultado = executar(bomDia)
console.log(resultado) // Será o mesmo output de cima