const promessa = new Promise(function (resolve) {
    resolve('promessa resolvida')
})

promessa.then(valor => console.log(valor))
console.log('fim')