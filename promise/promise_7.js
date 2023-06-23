function promessaComPossivelErro(chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('Ocorreu um erro')
        } else {
            resolve('Tudo certo')
        }

    })
}

promessaComPossivelErro(0.5)
    .then(
        valor => valor + '!!!!', // resolve
        erro => console.log(`#1: ${erro}`) // reject
    )
    .then(
        valor => console.log(valor),
        erro => console.log(`#2: ${erro}`)
    )