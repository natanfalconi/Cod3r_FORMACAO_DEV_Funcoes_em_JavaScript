const path = require('path')
const fs = require('fs')

const caminho = path.join(__dirname, '..', 'dados', 'aprovados.txt');
console.log(caminho)

// function lerArquivo(erro, conteudo) {
//     if (erro) return
//     console.log(conteudo.toString())
// }
// fs.readFile(caminho, lerArquivo) // posso passar só a referencia da função também

fs.readFile(caminho, function (erro, conteudo) {
    if (erro) return
    console.log(erro) // retorna null por que não tem nenhum erro
    console.log(conteudo.toString())
})
console.log('Fim #01') //A função é asincrona, então o fim virá primeiro, para depois ter a resposta do conteudo - Async Function - Callback


// Existe a póssibilidade de ser uma função sincrona
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim #02') //Só irá exibir esse console. assim que terminar de ler o arquivo - Sync Function