//somar(3)(4)(5)

// COM APENAS UM PARAMETRO, PODE-SE REMOVER OS PARENTESES - ()
const somar = a => {
    return b => {
        return c => a + b + c
    }
}

const resultado = somar(13)(14)(5)
console.log(resultado)


// VERSÃO AINDA MAIS RESUMIDA
const somar2 = a => b => c => a + b + c  // APENAS UM PARAMETRO - NÃO É OBRIGATÓRIO OS PARANTESES
console.log(somar2(7)(7)(5))


const subtrair = (a, b) => a - b // NESSE EXEMPLO, NÃO POSSO REMOVER OS "()""
const bomDia = () => 'Bom Dia' // MESMO CASO NESSE EXEMPLO - NÃO POSSO REMOVER OS "()""
console.log(subtrair(7, 5))
console.log(bomDia())



