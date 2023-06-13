
// OBJETIVO DESSE EXEMPLO É FILTAR OS NUMEROS PARES
function numeroPar(numero) {
    return numero % 2 === 0
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(nums.filter(numeroPar))
