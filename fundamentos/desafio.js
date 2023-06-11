const num1 = 3
const num2 = 7

const multiplicacao = (a, b) => a * b
const soma = (a, b) => a + b
const subtracao = (a, b) => a - b

const calcular = (a) => (b) => (fn) => fn(a, b)

const resultadoMult = calcular(num1)(num2)(multiplicacao)
const resultadoSoma = calcular(num1)(num2)(soma)
const resultadoSub = calcular(num1)(num2)(subtracao)

console.log(`O resultado é: ${resultadoMult}`)
console.log(`O resultado é: ${resultadoSoma}`)
console.log(`O resultado é: ${resultadoSub}`)


// É POSSÍVEL FAZER ASSIM TAMBÉM

// const calcular2 = (a) => {
//     return (b) => {
//         return (fn) => {
//             return fn(a, b)
//         }
//     }
// }
// const resultado = calcular2(num1)(num2)(multiplicacao)
// console.log('resultado', resultado)