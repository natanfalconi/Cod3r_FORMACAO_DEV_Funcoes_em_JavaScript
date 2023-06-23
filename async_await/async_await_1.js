function esperarPor(tempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, tempo)
    })
}

function executarPromise() {
    esperarPor(2000)
        .then(() => console.log('[Pormise] 2 segundos depois'))
        .then(() => esperarPor(3000))
        .then(() => console.log('[Pormise] 3 segundos depois'))
        .then(() => esperarPor(1500))
        .then(() => console.log('[Pormise] 1.5 segundos depois'))
}

async function executarAsync() {
    await esperarPor(2000)
    console.log('[Async/Await] 2 segundos depois')
    await esperarPor(3000)
    console.log('[Async/Await] 3 segundos depois')
    await esperarPor(1500)
    console.log('[Async/Await] 1.5 segundos depois')
}


executarPromise()
executarAsync()