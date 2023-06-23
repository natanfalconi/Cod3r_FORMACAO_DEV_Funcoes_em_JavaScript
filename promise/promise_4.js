// Callback

// esse seria um problema, chamado de calback hell
setTimeout(() => {
    console.log('executando calback...')

    setTimeout(() => {
        console.log('executando calback...')

        setTimeout(() => {
            console.log('executando calback...')

            setTimeout(() => {
                console.log('executando calback...')
            }, 2000)
        }, 2000)

    }, 2000)
}, 2000)


// Promisse

function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('executando promise...')
            resolve()
        }, tempo)
    })
}

esperarPor()
    .then(esperarPor)
    .then(esperarPor)
    .then(esperarPor)