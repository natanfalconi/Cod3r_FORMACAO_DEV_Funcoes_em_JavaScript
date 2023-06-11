const gritar = texto => texto.toUpperCase()
const enfatizar = texto => texto + '!!!'
const exagerar = texto => texto.split('').join(' ')

const frases = ['Cuidado', 'Olha o Carro']

// É POSSÍVEL CHAMAR UM MAP APÓS 
// O OUTRO ALÉM DA ORDEM PODER GERAR UM RESULTADO DIFERENTE
const final = frases.map(gritar).map(enfatizar).map(exagerar)
console.log(final)