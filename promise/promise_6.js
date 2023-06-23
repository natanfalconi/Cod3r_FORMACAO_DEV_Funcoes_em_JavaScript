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
    .then(valor => valor + '!!!!')
    .then(valor => console.log(valor))
    .catch(err => console.log(err))
    .finally(() => console.log('Fim'))