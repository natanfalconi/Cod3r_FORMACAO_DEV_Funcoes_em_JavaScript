// QUANDO A FUNÇÃO ARROW TEM APENAS UMA SENTENÇA DE CÓDIGO, ISSO É AUTOMATICAMENTE RETORNADO
// PELA FUNÇÃO, SEM NECESSIDADE DO "RETURN"
const somar = (a = 0, b = 0) => a + b  // RETURN IMPLICITO

const resultado = somar(4, 5)
console.log(resultado)

