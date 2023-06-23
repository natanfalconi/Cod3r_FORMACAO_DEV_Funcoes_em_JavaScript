//'https://bible-api.com/jonh 3:16'

// UMA FUNÇÃO ASYNC SEMPRE VAI RETORNAR UMA PROMISSE!!!
async function obterVersiculo(livro, cap, versiculo) {
    const url = `https://bible-api.com/${livro} ${cap}:${versiculo}`

    const response = await fetch(url)
    const dados = await response.json()
    return dados.verses[0].text
}

async function executar() {
    const texto = await obterVersiculo('luke', 3, 16)
    console.log(texto)
}


executar()